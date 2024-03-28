import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

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
    syntaxHighlight: 'prism',
  },
});
