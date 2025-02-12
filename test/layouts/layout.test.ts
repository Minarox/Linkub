import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Layout from '@layouts/Layout.astro';

test('Main layout', async () => {
	const container: AstroContainer = await AstroContainer.create();
	const component: Response = await container.renderToResponse(Layout);
	const title: string = 'Linkub'
	const description: string = "All links in one place."

	expect(component.status).toBe(200);
	expect(component.headers.get('Content-Type')).toBe('text/html');

	const body: string = await component.text();
	expect(body).toContain(`<title>${title}</title>`);
	expect(body).toContain(`<meta name="description" content="${description}">`);
	expect(body).toContain(`<meta property="og:title" content="${title}">`);
	// expect(body).toContain('<meta property="og:image" content="/banner.png">');
	expect(body).toContain(`<meta property="og:image:alt" content="${title} banner">`);
	expect(body).toContain(`<meta name="twitter:title" content="${title}">`);
	expect(body).toContain(`<meta name="twitter:description" content="${description}">`);
	// expect(body).toContain('<meta name="twitter:image" content="/banner.png">');
	expect(body).toContain(`<meta name="twitter:image:alt" content="${title} banner">`);
	expect(body).toContain('<link rel="sitemap" href="/sitemap-index.xml">');
})