// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'http://127.0.0.1:4321',
  integrations: [mdx(), sitemap(), tailwind(), icon(), alpinejs()],
  trailingSlash: "always"
});