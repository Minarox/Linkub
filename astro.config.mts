// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import metaTags from 'astro-meta-tags';
import icon from 'astro-icon';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    site: "https://minarox.github.com",
    base: "/",
    outDir: "./build",
    integrations: [sitemap(), metaTags(), icon(), compressor({ gzip: false })],
    server: {
        host: "127.0.0.1"
    }
});
