import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), sitemap()],
  site: "https://ruthwik-data.github.io",

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
