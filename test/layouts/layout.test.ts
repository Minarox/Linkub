import { test, expect } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Layout, { type Props } from "@layouts/Layout.astro"

test("Main layout", async () => {
	const container: AstroContainer = await AstroContainer.create();
	const props: Props = {
		lang: ["en", "en-US", "English"],
		title: "Linkub",
		description: "All links in one place.",
		keywords: "Linkhub, Link, Social, Media, Hub, Landing, Page, Web",
		creator: "Mathis Serrieres Maniecki",
		xCreator: "Minarox_",
		themeColor: "#0C1136"
	};
	const component: Response = await container.renderToResponse(Layout, {
		props: { ...props }
	})

	expect(component.status).toBe(200)
	expect(component.headers.get("Content-Type")).toBe("text/html")

	const body: string = await component.text()
	expect(body).toContain(`<title>${props.title} - ${props.description}</title>`)
	expect(body).toContain(`<meta name="description" content="${props.description}">`)
	expect(body).toContain(`<meta property="og:title" content="${props.title}">`)
	// expect(body).toContain('<meta property="og:image" content="/banner.png">')
	expect(body).toContain(`<meta property="og:image:alt" content="${props.title} banner">`)
	expect(body).toContain(`<meta name="twitter:title" content="${props.title}">`)
	expect(body).toContain(`<meta name="twitter:description" content="${props.description}">`)
	// expect(body).toContain('<meta name="twitter:image" content="/banner.png">')
	expect(body).toContain(`<meta name="twitter:image:alt" content="${props.title} banner">`)
	expect(body).toContain(`<meta name="theme-color" content="${props.themeColor}">`)
	expect(body).toContain('<link rel="sitemap" href="/sitemap-index.xml">')
})
