// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    site: "https://minarox.github.com",
    base: "/linkub",
    integrations: [sitemap(), compressor({ gzip: false })]
});
