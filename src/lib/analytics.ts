import { site } from '../data/site'

// Actions sent to Google Analytics as events, on top of the page views it already counts, so
// each traffic source can be judged by what its visitors did: copied the email, opened or
// downloaded the CV, went to a social profile, or headed to the contact page. gtag is set up
// in index.html; it only sends from the live domain and follows the visitor's cookie choice,
// so nothing here needs its own consent check.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function track(name: string, params: Record<string, string> = {}) {
  window.gtag?.('event', name, params)
}

// Where on the page the click happened, so the footer, the menus and the page body can be
// told apart in reports.
export function placementOf(el: Element) {
  if (el.closest('#site-nav')) return 'phone_menu'
  // Pop-up menus render outside their button, so they carry their own data-area.
  const area = el.closest('[data-area]')?.getAttribute('data-area')
  if (area) return area
  if (el.closest('footer')) return 'footer'
  return 'page'
}

const socialHosts: Record<string, string> = {
  'linkedin.com': 'linkedin',
  'instagram.com': 'instagram',
  't.me': 'telegram',
  'x.com': 'x',
  'twitter.com': 'x',
  'tiktok.com': 'tiktok',
}

// One listener for every link on the site (including ones added later), sorted by where the
// link goes. Runs in the capture phase so it still sees clicks on links that close a menu.
export function startClickTracking() {
  document.addEventListener(
    'click',
    (e) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const placement = placementOf(link)
      const href = link.href

      if (href === site.cvViewUrl) return track('resume_view', { placement })
      if (href === site.cvUrl) return track('resume_download', { placement })

      const url = new URL(href, location.href)
      if (url.origin === location.origin) {
        if (url.pathname === '/contact') track('contact_click', { placement })
        return
      }
      const host = url.hostname.replace(/^www\./, '')
      const platform = Object.entries(socialHosts).find(([h]) => host === h || host.endsWith('.' + h))?.[1]
      if (platform) track('social_click', { platform, placement })
    },
    { capture: true },
  )
}
