// Vercel serverless function. Served at /sitemap-blog.xml (see vercel.json).
// Reads published posts from Supabase on each request, so new posts appear
// without a redeploy. Vercel caches the response for 10 minutes.

const SITE_URL = "https://www.sonamroyacademy.com"; // must match your canonical domain

const escapeXml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export default async function handler(req, res) {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_ANON_KEY;

  let posts = [];
  try {
    if (!url || !key) throw new Error("Supabase env vars are missing on Vercel");
    const r = await fetch(
      `${url}/rest/v1/posts?select=slug,updated_at,published_at&published=eq.true&order=published_at.desc`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } }
    );
    if (!r.ok) throw new Error(`Supabase responded with HTTP ${r.status}`);
    posts = await r.json();
  } catch (err) {
    console.error("[sitemap-blog]", err.message);
    // A 5xx tells Google to retry later instead of treating the sitemap as empty
    res.status(503).send("Sitemap temporarily unavailable");
    return;
  }

  const urls = [
    `  <url>\n    <loc>${SITE_URL}/blog</loc>\n  </url>`,
    ...posts.map((p) => {
      const date = p.updated_at || p.published_at;
      const lastmod = date ? `\n    <lastmod>${new Date(date).toISOString().slice(0, 10)}</lastmod>` : "";
      return `  <url>\n    <loc>${SITE_URL}/blog/${escapeXml(p.slug)}</loc>${lastmod}\n  </url>`;
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=86400");
  res.status(200).send(xml);
}