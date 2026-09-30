import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { supabase } from "../lib/supabase";
import { slugify } from "../blog/blogUtils";
import "../blog/blog.css";

const EMPTY = {
  id: null,
  title: "",
  slug: "",
  excerpt: "",
  cover_image: "",
  tagsText: "",
  meta_description: "",
  content: "",
  published: false,
  published_at: null,
};

const inputCls =
  "w-full rounded-md border border-neutral-300 px-3 py-2 text-base focus:border-[#b68d40] focus:outline-none focus:ring-2 focus:ring-[#b68d40]/30";

function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-800">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-neutral-500">{hint}</span>}
    </label>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setBusy(false);
  }

  return (
    <form onSubmit={submit} className="mx-auto mt-10 max-w-sm space-y-4">
      <h1 className="text-2xl font-bold">Blog admin</h1>
      <Field label="Email">
        <input className={inputCls} type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Field>
      <Field label="Password">
        <input className={inputCls} type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </Field>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <button disabled={busy} className="rounded-md bg-[#b68d40] px-5 py-2 font-medium text-white disabled:opacity-60">
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

function Editor({ initial, onSaved, onCancel }) {
  const [form, setForm] = useState(initial);
  const [slugTouched, setSlugTouched] = useState(Boolean(initial.id));
  const [preview, setPreview] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);

  const set = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => {
      const next = { ...f, [key]: value };
      if (key === "title" && !slugTouched) next.slug = slugify(value);
      return next;
    });
  };

  async function save(e) {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!form.title.trim() || !form.slug.trim() || !form.content.trim()) {
      setMessage({ type: "error", text: "Title, slug and content are required." });
      return;
    }

    setBusy(true);
    const now = new Date().toISOString();
    const payload = {
      title: form.title.trim(),
      slug: slugify(form.slug),
      excerpt: form.excerpt.trim() || null,
      cover_image: form.cover_image.trim() || null,
      tags: form.tagsText.split(",").map((t) => t.trim()).filter(Boolean),
      meta_description: form.meta_description.trim() || null,
      content: form.content,
      published: form.published,
      // Set the publish date once, the first time the post goes live
      published_at: form.published ? form.published_at || now : form.published_at,
      updated_at: now,
    };

    const query = form.id
      ? supabase.from("posts").update(payload).eq("id", form.id)
      : supabase.from("posts").insert(payload);
    const { data, error } = await query.select().single();
    setBusy(false);

    if (error) {
      const duplicate = error.code === "23505";
      setMessage({
        type: "error",
        text: duplicate ? "Another post already uses this slug. Change the slug and save again." : error.message,
      });
      return;
    }

    setForm({ ...form, id: data.id, slug: data.slug, published_at: data.published_at });
    setMessage({ type: "ok", text: data.published ? "Published." : "Draft saved." });
    onSaved();
  }

  const metaLen = form.meta_description.length;

  return (
    <form onSubmit={save} className="mt-8 space-y-5">
      <Field label="Title" hint={`${form.title.length} characters. Aim for 60 or fewer.`}>
        <input className={inputCls} value={form.title} onChange={set("title")} />
      </Field>

      <Field label="Slug" hint="Used in the URL: /blog/your-slug. For Hindi titles, type the slug in English letters.">
        <input
          className={inputCls}
          value={form.slug}
          onChange={(e) => {
            setSlugTouched(true);
            set("slug")(e);
          }}
        />
      </Field>

      <Field label="Short summary" hint="Shown on the blog page and used as the search description if you leave the box below empty.">
        <textarea className={inputCls} rows={2} value={form.excerpt} onChange={set("excerpt")} />
      </Field>

      <Field label="Search description" hint={`${metaLen} characters. Aim for 150 to 160 so Google does not cut it off.`}>
        <textarea className={inputCls} rows={2} value={form.meta_description} onChange={set("meta_description")} />
      </Field>

      <Field label="Cover image URL" hint="Paste a Cloudinary image link (ideally 1200 × 630).">
        <input className={inputCls} value={form.cover_image} onChange={set("cover_image")} />
      </Field>

      <Field label="Tags" hint="Separate with commas, for example: student tips, bridal makeup, career">
        <input className={inputCls} value={form.tagsText} onChange={set("tagsText")} />
      </Field>

      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-800">Content (Markdown)</span>
          <button type="button" onClick={() => setPreview((p) => !p)} className="text-sm text-[#8a6a28] underline underline-offset-4">
            {preview ? "Back to editing" : "Preview"}
          </button>
        </div>
        {preview ? (
          <div className="blog-prose mt-2 rounded-md border border-neutral-200 p-5">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{form.content || "Nothing to preview yet."}</ReactMarkdown>
          </div>
        ) : (
          <textarea
            className={`${inputCls} mt-2 font-mono text-sm`}
            rows={20}
            value={form.content}
            onChange={set("content")}
            placeholder={"## Heading\n\nWrite your post here. Use ![alt text](image-url) for images."}
          />
        )}
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" checked={form.published} onChange={set("published")} className="h-4 w-4 accent-[#b68d40]" />
        <span className="text-sm">Published (visible to everyone)</span>
      </label>

      {message.text && (
        <p role="status" className={`text-sm ${message.type === "error" ? "text-red-700" : "text-green-800"}`}>
          {message.text}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button disabled={busy} className="rounded-md bg-[#b68d40] px-5 py-2 font-medium text-white disabled:opacity-60">
          {busy ? "Saving…" : form.published ? "Save and publish" : "Save draft"}
        </button>
        <button type="button" onClick={onCancel} className="rounded-md border border-neutral-300 px-5 py-2">
          Back to posts
        </button>
        {form.id && form.published && (
          <a href={`/blog/${form.slug}`} target="_blank" rel="noreferrer" className="self-center text-sm text-[#8a6a28] underline underline-offset-4">
            View live post
          </a>
        )}
      </div>
    </form>
  );
}

export default function AdminBlogPage() {
  const [session, setSession] = useState(undefined); // undefined = still checking
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [listError, setListError] = useState("");

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const loadPosts = useCallback(async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("id,title,slug,published,published_at,created_at")
      .order("created_at", { ascending: false });
    if (error) setListError(error.message);
    else {
      setListError("");
      setPosts(data);
    }
  }, []);

  useEffect(() => {
    if (session) loadPosts();
  }, [session, loadPosts]);

  async function openPost(id) {
    const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();
    if (error) return setListError(error.message);
    setEditing({ ...EMPTY, ...data, tagsText: (data.tags || []).join(", "), excerpt: data.excerpt || "", cover_image: data.cover_image || "", meta_description: data.meta_description || "" });
  }

  async function removePost(post) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    const { error } = await supabase.from("posts").delete().eq("id", post.id);
    if (error) setListError(error.message);
    else loadPosts();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
      <Helmet>
        <title>Blog admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {!supabase && (
        <p className="text-red-700">
          Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.
        </p>
      )}

      {supabase && session === undefined && <p className="text-neutral-500">Checking sign-in…</p>}
      {supabase && session === null && <Login />}

      {supabase && session && !editing && (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Your posts</h1>
            <div className="flex gap-3">
              <button onClick={() => setEditing({ ...EMPTY })} className="rounded-md bg-[#b68d40] px-4 py-2 font-medium text-white">
                New post
              </button>
              <button onClick={() => supabase.auth.signOut()} className="rounded-md border border-neutral-300 px-4 py-2">
                Sign out
              </button>
            </div>
          </div>

          {listError && <p role="alert" className="mt-4 text-sm text-red-700">{listError}</p>}
          {posts.length === 0 && !listError && (
            <p className="mt-8 text-neutral-600">No posts yet. Select New post to write your first one.</p>
          )}

          <ul className="mt-6 divide-y divide-neutral-200 rounded-md border border-neutral-200">
            {posts.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-4 p-4">
                <div className="min-w-0">
                  <p className="truncate font-medium">{p.title}</p>
                  <p className="text-sm text-neutral-500">
                    {p.published ? "Published" : "Draft"} · /blog/{p.slug}
                  </p>
                </div>
                <div className="flex shrink-0 gap-3 text-sm">
                  <button onClick={() => openPost(p.id)} className="text-[#8a6a28] underline underline-offset-4">Edit</button>
                  <button onClick={() => removePost(p)} className="text-red-700 underline underline-offset-4">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {supabase && session && editing && (
        <>
          <h1 className="text-2xl font-bold">{editing.id ? "Edit post" : "New post"}</h1>
          <Editor
            key={editing.id || "new"}
            initial={editing}
            onSaved={loadPosts}
            onCancel={() => {
              setEditing(null);
              loadPosts();
            }}
          />
        </>
      )}
    </div>
  );
}