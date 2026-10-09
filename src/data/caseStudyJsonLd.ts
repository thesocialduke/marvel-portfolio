const SITE_URL = 'https://ndubuisimarvellous.com'

// CreativeWork + BreadcrumbList structured data for a case study page: a
// machine-readable summary of what the work is, who did it, and where it sits
// in the site. Rendered with <JsonLd /> so it ships in the pre-rendered HTML.
export function caseStudyJsonLd({
  path,
  title,
  description,
  image,
  clientName,
}: {
  path: string
  title: string
  description: string
  image: string
  clientName: string
}) {
  const url = `${SITE_URL}${path}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: title,
        description,
        url,
        image: `${SITE_URL}${image}`,
        about: { '@type': 'Organization', name: clientName },
        author: { '@type': 'Person', name: 'Ndubuisi Marvellous', url: SITE_URL },
        creator: { '@type': 'Person', name: 'Ndubuisi Marvellous', url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE_URL}/#case-studies` },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
    ],
  }
}
