import { test, expect } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Links from "@components/Links.astro"
import { type Link, decodeHTMLEntities } from "@types"

const links: Link[] = [
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

test("Array of links", async () => {
	const container: AstroContainer = await AstroContainer.create()
	const component: Response = await container.renderToResponse(Links, {
		props: { links }
	})

	expect(component.status).toBe(200)
	expect(component.headers.get("Content-Type")).toBe("text/html")

	const body: string = decodeHTMLEntities(await component.text())
	for (const link of links) {
		expect(body).toContain(link.name)
		expect(body).toContain(link.url)
		expect(body).toContain(`data-icon="${link.pack || 'fa6-brands'}:${link.icon || link.name.toLowerCase()}"`)
	}
})
