import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://coudet-river.vercel.app",
  trailingSlash: "always",
  integrations: [preact()]
});
