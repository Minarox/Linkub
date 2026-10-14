import { test, expect } from "vitest"
import { decodeHTMLEntities } from "@types"

test("Decode named HTML entities", () => {
	expect(decodeHTMLEntities("&amp; &lt; &gt; &quot; &apos;")).toBe(`& < > " '`)
})

test("Decode numeric HTML entities", () => {
	expect(decodeHTMLEntities("&#39;Linkub&#39; &#38; &#169;")).toBe("'Linkub' & ©")
})

test("Leave plain text unchanged", () => {
	expect(decodeHTMLEntities("All links in one place")).toBe("All links in one place")
})
