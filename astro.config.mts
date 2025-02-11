// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import metaTags from 'astro-meta-tags';
import icon from 'astro-icon';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    site: "https://minarox.github.com",
    base: "/linkub",
    integrations: [sitemap(), metaTags(), icon(), compressor({ gzip: false })]
});
