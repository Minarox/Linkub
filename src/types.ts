export interface Link {
    name: string
    url: string
    icon?: string
    pack?: string
}

export interface Settings {
	lang: [string, string, string]
	title: string
	description: string
	keywords: string
	creator: string
	xCreator: string
	themeColor: string
	thumbnail?: ImageMetadata
}

export function decodeHTMLEntities(text: string): string {
    return text.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
}
