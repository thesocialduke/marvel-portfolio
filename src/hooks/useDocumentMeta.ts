import { useEffect } from 'react'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useDocumentMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    return () => {
      document.title = previousTitle
    }
  }, [title, description])
}
