import type { APIRoute } from "astro";
import { site } from "../config/site";

export const GET: APIRoute = ({ site: origin }) => {
  const base = (origin ?? site.siteUrl).toString().replace(/\/$/, "");
  const body = `User-agent: *\nAllow: /\nDisallow: /thank-you/\nSitemap: ${base}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
