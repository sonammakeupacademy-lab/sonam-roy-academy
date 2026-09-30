// Runs before `vite build`. Writes two files into public/:
//   sitemap-pages.xml  static pages + every course + every service
//   sitemap.xml        an index pointing to sitemap-pages.xml and sitemap-blog.xml
// Blog posts are NOT listed here: api/sitemap-blog.mjs serves them live from Supabase.
// Never fails the build: anything it cannot read is skipped with a warning.

import { mkdir, readFile, writeFile } from "node:fs/promises";

const SITE_URL = "https://www.sonamroyacademy.com"; // must match your canonical domain

// "/write-review" is left out on purpose. "/blog" is listed in the blog sitemap.
const STATIC_PATHS = ["/", "/gallery"];

// Reads the file as text (works whether or not package.json has "type": "module")
async function slugsFromFile(file, regex) {
  try {
    const text = await readFile(file, "utf8");
    return [...new Set([...text.matchAll(regex)].map((m) => m[1]))];
  } catch (err) {
    console.warn(`[sitemap] Could not read ${file}: ${err.message}`);
    return [];
  }
}

const entry = (path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`;

const courseSlugs = await slugsFromFile("src/constants/coursesData.js", /^\s*slug:\s*"([^"]+)"/gm);
const serviceSlugs = await slugsFromFile("src/pages/ServiceDetails.jsx", /^\s*"([a-z0-9-]+)":\s*\{/gm);

const urls = [
  ...STATIC_PATHS.map(entry),
  ...courseSlugs.map((s) => entry(`/courses/${s}`)),
  ...serviceSlugs.map((s) => entry(`/services/${s}`)),
];

const pagesXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

const today = new Date().toISOString().slice(0, 10);
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap-blog.xml</loc>
  </sitemap>
</sitemapindex>
`;

await mkdir("public", { recursive: true });
await writeFile("public/sitemap-pages.xml", pagesXml);
await writeFile("public/sitemap.xml", indexXml);
console.log(
  `[sitemap] Wrote index + ${urls.length} page URLs (${courseSlugs.length} courses, ${serviceSlugs.length} services).`
);