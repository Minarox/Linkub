import { test, expect } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Layout from "@layouts/Layout.astro"
import Background from "@assets/svg/background.svg"
import { type Settings, decodeHTMLEntities } from "@types"

test("Main layout", async () => {
	const container: AstroContainer = await AstroContainer.create();
	const settings: Settings = {
		lang: ['', '', ''],
		title: "Linkub",
		description: "All links in one place.",
		keywords: "Linkhub, Link, Social, Media, Hub, Landing, Page, Web",
		creator: "Mathis Serrieres Maniecki",
		xCreator: "Minarox_",
		themeColor: "#0C1136"
	};
	const component: Response = await container.renderToResponse(Layout, {
		props: { settings }
	})

	expect(component.status).toBe(200)
	expect(component.headers.get("Content-Type")).toBe("text/html")

	const body: string = decodeHTMLEntities(await component.text())
	expect(body).toContain(`<title>${settings.title} - ${settings.description}</title>`)
	expect(body).toContain(`<meta name="description" content="${settings.description}">`)
	expect(body).toContain(`<meta property="og:title" content="${settings.title}">`)
	expect(body).toContain(`<meta property="og:image" content="${Background.src}">`)
	expect(body).toContain(`<meta property="og:image:alt" content="${settings.title} banner">`)
	expect(body).toContain(`<meta name="twitter:title" content="${settings.title}">`)
	expect(body).toContain(`<meta name="twitter:description" content="${settings.description}">`)
	expect(body).toContain(`<meta name="twitter:image" content="${Background.src}">`)
	expect(body).toContain(`<meta name="twitter:image:alt" content="${settings.title} banner">`)
	expect(body).toContain(`<meta name="theme-color" content="${settings.themeColor}">`)
	expect(body).toContain('<link rel="sitemap" href="/sitemap-index.xml">')
})
