import type { APIRoute } from "astro";
import { getArgentinaDate } from "../lib/days-counter";

const CANONICAL_URL = "https://coudet-river.vercel.app/";

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${CANONICAL_URL}</loc>
    <lastmod>${getArgentinaDate()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
