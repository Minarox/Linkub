import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Links, { type Props } from '@components/Links.astro';

const social: Props['social'] = [
	{
		name: "YouTube",
		url: "https://youtube.com/@Minarox"
	},
	{
		name: "X",
		url: "https://x.com/Minarox_",
		icon: "x-twitter"
	},
	{
		name: "Email",
		url: "mailto:contact@minarox.fr",
		icon: "envelope",
		pack: "mdi"
	}
]

test('Array of links', async () => {
	const container: AstroContainer = await AstroContainer.create();
	const component: string = await container.renderToString(Links, {
		props: {
			social: social
		}
	});
	for (const link of social) {
		expect(component).toContain(link.name);
		expect(component).toContain(link.url);
		expect(component).toContain(`data-icon="${link.pack || 'fa6-brands'}:${link.icon || link.name.toLowerCase()}"`);
	}
})