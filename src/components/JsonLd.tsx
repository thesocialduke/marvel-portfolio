// Structured data (JSON-LD) rendered as part of the page, so it is in the pre-rendered
// HTML that crawlers read as well as in the browser. "<" is escaped so page text can
// never close the script tag early.
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
