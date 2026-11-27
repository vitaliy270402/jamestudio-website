import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config/site.ts";

const siteUrl = process.env.SITE_URL || site.siteUrl;

export default defineConfig({
  site: siteUrl,
  base: "/",
  trailingSlash: "always",
  compressHTML: true,
  redirects: {
    "/services/concrete-patio-slabs": "/services/concrete-work/",
    "/services/concrete": "/services/concrete-work/",
    "/services/complete-house-demolition": "/services/demolition/",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
});
