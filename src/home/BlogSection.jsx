import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "../lib/supabase";
import { formatDate } from "../blog/blogUtils";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      if (!supabase) {
        setStatus("error");
        return;
      }

      const { data, error } = await supabase
        .from("posts")
        .select(
          "id,title,slug,excerpt,cover_image,tags,published_at"
        )
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(3);

      if (cancelled) return;

      if (error) {
        console.error("Blog loading error:", error);
        setStatus("error");
        return;
      }

      setPosts(data || []);
      setStatus("ready");
    }

    loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#fffdf9] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-[#d4af37] bg-[#fffaf0] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7625]">
            Our Blog
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Beauty Tips, Trends &{" "}
            <span className="text-[#b68d40]">Expert Advice</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Discover professional makeup tips, hair care advice, beauty
            trends, student stories and career guidance from Sonam Roy
            Makeup Academy.
          </p>

        </div>

        {/* =========================
            LOADING
        ========================= */}
        {status === "loading" && (
          <div className="grid gap-8 md:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="aspect-video animate-pulse bg-neutral-200" />

                <div className="space-y-4 p-6">
                  <div className="h-4 w-24 animate-pulse rounded bg-neutral-200" />
                  <div className="h-6 w-full animate-pulse rounded bg-neutral-200" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-neutral-200" />
                  <div className="h-4 w-24 animate-pulse rounded bg-neutral-200" />
                </div>
              </div>
            ))}

          </div>
        )}

        {/* =========================
            ERROR
        ========================= */}
        {status === "error" && (
          <div className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">
              Blog posts are currently unavailable
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              Please check back again shortly.
            </p>
          </div>
        )}

        {/* =========================
            NO POSTS
        ========================= */}
        {status === "ready" && posts.length === 0 && (
          <div className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">
              Coming Soon
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              We are preparing helpful beauty and career articles for you.
            </p>
          </div>
        )}

        {/* =========================
            BLOG CARDS
        ========================= */}
        {status === "ready" && posts.length > 0 && (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGE */}
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative overflow-hidden">
                      {post.cover_image ? (
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          width="640"
                          height="360"
                          loading="lazy"
                          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex aspect-video items-center justify-center bg-[#f5efe3]">
                          <span className="text-sm font-medium text-[#9a7625]">
                            Sonam Roy Makeup Academy
                          </span>
                        </div>
                      )}

                      {/* GOLD OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-6">

                    {/* DATE */}
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#b68d40]">
                      {formatDate(post.published_at)}
                    </p>

                    {/* TITLE */}
                    <h3 className="mt-3 text-xl font-bold leading-snug text-[#111827] transition group-hover:text-[#9a7625]">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* EXCERPT */}
                    {post.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
                        {post.excerpt}
                      </p>
                    )}

                    {/* TAGS */}
                    {post.tags?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#faf5e8] px-3 py-1 text-xs font-medium text-[#8a6a28]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* READ MORE */}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9a7625] transition hover:gap-3"
                    >
                      Read Article
                      <span aria-hidden="true">→</span>
                    </Link>

                  </div>
                </article>
              ))}

            </div>

            {/* =========================
                VIEW ALL BUTTON
            ========================= */}
            <div className="mt-12 text-center">

              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-full border border-[#b68d40] bg-[#b68d40] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#9a7625]"
              >
                View All Blogs
                <span className="ml-2">→</span>
              </Link>

            </div>
          </>
        )}

      </div>
    </section>
  );
}