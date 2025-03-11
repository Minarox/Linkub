import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Layout, { type Props as LayoutProps } from '@layouts/Layout.astro';

test('Main layout', async () => {
	const container: AstroContainer = await AstroContainer.create();
	const props: LayoutProps = {
		title: 'Linkub',
		description: 'All links in one place.',
		keywords: 'Linkhub, Link, social media, hub, landing page, web',
		creator: 'Minarox',
		color: '#0C1136'
	};
	const component: Response = await container.renderToResponse(Layout, {
		props: { ...props }
	});

	expect(component.status).toBe(200);
	expect(component.headers.get('Content-Type')).toBe('text/html');

	const body: string = await component.text();
	expect(body).toContain(`<title>${props.title}</title>`);
	expect(body).toContain(`<meta name="description" content="${props.description}">`);
	expect(body).toContain(`<meta property="og:title" content="${props.title}">`);
	// expect(body).toContain('<meta property="og:image" content="/banner.png">');
	expect(body).toContain(`<meta property="og:image:alt" content="${props.title} banner">`);
	expect(body).toContain(`<meta name="twitter:title" content="${props.title}">`);
	expect(body).toContain(`<meta name="twitter:description" content="${props.description}">`);
	// expect(body).toContain('<meta name="twitter:image" content="/banner.png">');
	expect(body).toContain(`<meta name="twitter:image:alt" content="${props.title} banner">`);
	expect(body).toContain(`<meta name="theme-color" content="${props.color}">`);
	expect(body).toContain('<link rel="sitemap" href="/sitemap-index.xml">');
})