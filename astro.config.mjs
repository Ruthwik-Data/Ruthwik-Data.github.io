// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://Ruthwik-Data.github.io",

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
