import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config/site.ts";

const siteUrl = process.env.SITE_URL || site.siteUrl;

export default defineConfig({
  site: siteUrl,
  base: "/",
  trailingSlash: "always",
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
});
