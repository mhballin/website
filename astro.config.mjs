import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
  integrations: [mdx(), sitemap(), tailwind()]
});