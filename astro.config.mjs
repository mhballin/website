import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://michaelballin.com',
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
  integrations: [sitemap(), tailwind()]
});
