import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  redirects: {
    '/about': '/',
    '/writing': '/',
    '/projects': '/',
    '/tesla': '/writing/tesla-software-problems-in-winter',
    '/projects/home-renovation': '/projects/designing-a-home',
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      transformers: ['transformerRemoveLineBreak'],
    },
  },
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [svgr()],
  },
});
