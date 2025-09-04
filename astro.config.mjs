// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), sitemap(), tailwind(), vue()],
    site: 'https://eduardoconx.github.io',
    base: '/blog-con-x',
});