import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Index from '@pages/index.astro';

test('Landing page', async () => {
	const container: AstroContainer = await AstroContainer.create();
	const component: Response = await container.renderToResponse(Index);
	const title: string = "Linkub";

	expect(component.status).toBe(200);
	expect(component.headers.get('Content-Type')).toBe('text/html');

	const body: string = await component.text();
	expect(body).toContain('<main');
	expect(body).toContain('<header');
	expect(body).toContain('<img');
	expect(body).toContain(`alt="${title} logo"`);
	expect(body).toContain('width="140"');
	expect(body).toContain('<h1');
	expect(body).toContain(`${title}</h1>`);
	expect(body).toContain('</header> <article ');
	expect(body).toContain('</article> </main>');
})