// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://heicgo.com',

  integrations: [
    preact({ compat: true }),
    mdx(),
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        return !/^\/(zh-CN|de|ja|ko|fr)\/(about|contact|faq|privacy|terms)\//.test(url.pathname);
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  output: 'static',
});
