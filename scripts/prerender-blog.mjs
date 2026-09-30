// Runs AFTER `vite build` (see package.json). Writes static HTML for /blog
// and every published /blog/:slug into dist/, so crawlers -- and the very
// first paint for real visitors -- get real content immediately instead of
// an empty <div id="root">. React then boots normally on top of it and
// re-renders the live version, exactly like on every other page.
// Never fails the build: any problem here is logged as a warning and skipped,
// so the rest of the site still deploys.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { marked } from "marked";

// Node does not read .env by itself (unlike Vite). This loads it manually so
// the script behaves the same with `npm run build` locally and on Vercel,
// where the dashboard's env vars are already in process.env and this is a
// harmless no-op (no local .env file exists there).
async function loadDotEnv() {
  try {
    const text = await readFile(".env", "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) process.env[key] = value;
    }
  } catch {
    // No .env file -- fine, env vars already come from the platform (Vercel).
  }
}

await loadDotEnv();

const SITE_URL = "https://www.sonamroyacademy.com"; // must match your canonical domain
const BUSINESS_NAME = "Sonam Roy Makeup Academy";
const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dascytq6n/image/upload/v1779368607/logoo_mwvcaf.webp";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

async function fetchPosts() {
  if (!supabaseUrl || !supabaseKey) {
    console.warn("[prerender-blog] Supabase env vars missing, skipping.");
    return [];
  }
  try {
    const r = await fetch(
      `${supabaseUrl}/rest/v1/posts?select=*&published=eq.true&order=published_at.desc`,
      { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
    );
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } catch (err) {
    console.warn("[prerender-blog] Could not load posts:", err.message);
    return [];
  }
}

const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";

// Tags that exist on every page of the built template (the homepage's own
// description, canonical, robots, og:*, twitter:*) and would otherwise sit
// alongside our page-specific versions, creating duplicates. Google (and
// other crawlers) generally trust whichever one comes FIRST in the document
// when there are duplicates -- so simply appending new tags near </head>
// while leaving the originals in place would leave the homepage's canonical
// URL and description winning over the blog post's, silently undoing the
// whole point of this script. These are stripped before the new set is added.
// Note: the character class includes 0-9 and _ so properties like
// "og:site_name" (which contains an underscore) are matched and stripped too.
const HEAD_STRIP_PATTERNS = [
  /<meta[^>]*\bname=["']description["'][^>]*\/?>/gi,
  /<meta[^>]*\bname=["']robots["'][^>]*\/?>/gi,
  /<link[^>]*\brel=["']canonical["'][^>]*\/?>/gi,
  /<meta[^>]*\bproperty=["']og:[a-zA-Z0-9_:]+["'][^>]*\/?>/gi,
  /<meta[^>]*\bname=["']twitter:[a-zA-Z0-9_:]+["'][^>]*\/?>/gi,
];

// Swaps the <title> and replaces the page-level <meta>/<link> tags the SEO
// component would normally set at runtime, then drops fully-formed content
// into #root. React replaces this once it boots -- same idea as react-snap /
// prerender-spa-plugin.
function renderPage(template, { title, description, canonical, image, bodyHtml, jsonLd }) {
  let html = template;

  if (!/<title>.*?<\/title>/s.test(html)) throw new Error("dist/index.html has no <title> tag");
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`);

  for (const pattern of HEAD_STRIP_PATTERNS) html = html.replace(pattern, "");

  const metaTags = `
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="${escapeHtml(BUSINESS_NAME)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${image}" />
    ${jsonLd.map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`).join("\n    ")}
  `;
  html = html.replace("</head>", `${metaTags}\n  </head>`);

  if (!html.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html has no empty <div id="root"></div> to fill');
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  return html;
}

async function main() {
  const template = await readFile("dist/index.html", "utf8");
  const posts = await fetchPosts();

  // ---- /blog (listing) ----
  const listItems = posts
    .map(
      (p) => `
      <li>
        <a href="/blog/${escapeHtml(p.slug)}">
          <h2>${escapeHtml(p.title)}</h2>
        </a>
        ${p.excerpt ? `<p>${escapeHtml(p.excerpt)}</p>` : ""}
        <time>${formatDate(p.published_at)}</time>
      </li>`
    )
    .join("\n");

  const listHtml = renderPage(template, {
    title: `Student Blog | ${BUSINESS_NAME}`,
    description:
      "Tips, success stories and career guidance for makeup and beautician students at Sonam Roy Makeup Academy in Gaya, Bihar.",
    canonical: `${SITE_URL}/blog`,
    image: FALLBACK_IMAGE,
    jsonLd: [],
    bodyHtml: `<main><h1>Student blog</h1><ul>${listItems}</ul></main>`,
  });

  await mkdir("dist/blog", { recursive: true });
  await writeFile("dist/blog/index.html", listHtml);

  // ---- /blog/:slug (each post) ----
  for (const post of posts) {
    const description = post.meta_description || post.excerpt || "";
    const canonical = `${SITE_URL}/blog/${post.slug}`;
    const image = post.cover_image || FALLBACK_IMAGE;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description,
      image: post.cover_image ? [post.cover_image] : undefined,
      datePublished: post.published_at,
      dateModified: post.updated_at || post.published_at,
      author: { "@type": "Organization", name: BUSINESS_NAME },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: canonical },
      ],
    };

    const contentHtml = marked.parse(post.content || "");
    const bodyHtml = `
      <main>
        <article>
          <h1>${escapeHtml(post.title)}</h1>
          <time>${formatDate(post.published_at)}</time>
          ${post.cover_image ? `<img src="${post.cover_image}" alt="${escapeHtml(post.title)}" />` : ""}
          <div>${contentHtml}</div>
        </article>
      </main>`;

    const postHtml = renderPage(template, {
      title: `${post.title} | ${BUSINESS_NAME}`,
      description,
      canonical,
      image,
      jsonLd: [articleSchema, breadcrumbSchema],
      bodyHtml,
    });

    await mkdir(`dist/blog/${post.slug}`, { recursive: true });
    await writeFile(`dist/blog/${post.slug}/index.html`, postHtml);
  }

  console.log(`[prerender-blog] Wrote static HTML for /blog + ${posts.length} post(s).`);
}

main().catch((err) => {
  console.warn("[prerender-blog] Skipped due to error:", err.message);
});