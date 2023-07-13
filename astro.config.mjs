import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://beta.altiesgamingstudios.com',
  output: "server",
  adapter: cloudflare(),
  integrations: [prefetch(), sitemap()]
});
