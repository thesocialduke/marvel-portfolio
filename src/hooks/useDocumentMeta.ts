import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://thesocialduke.vercel.app'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Every page's <link rel="canonical"> and og:url must point at *that page*,
// not the homepage — otherwise search engines read every subpage as a
// duplicate of "/" and may not index it. Reads the current route via
// react-router so callers don't have to pass a path manually.
export function useDocumentMeta({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image?: string
}) {
  const { pathname } = useLocation()

  useEffect(() => {
    const previousTitle = document.title
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    const ogImage = image ? `${SITE_URL}${image}` : `${SITE_URL}/avatar.jpg`

    document.title = title
    upsertMeta('name', 'description', description)
    upsertCanonical(url)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)

    return () => {
      document.title = previousTitle
    }
  }, [title, description, image, pathname])
}
