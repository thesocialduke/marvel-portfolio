import { useEffect, useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const KEY = 'cookie-consent'
const OPEN_EVENT = 'cookie-settings'

/** Shows the cookie banner again (used by the "Cookie settings" link in the footer). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

// Removes Google Analytics cookies already set, for when someone changes their mind.
function clearAnalyticsCookies() {
  const host = window.location.hostname
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0].trim()
    if (!name.startsWith('_ga')) continue
    for (const domain of ['', `; domain=${host}`, `; domain=.${host.replace(/^www\./, '')}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
    }
  }
}

// Asks once whether analytics cookies are OK. Until someone accepts, Google Analytics
// runs in consent mode with cookies off (set up in index.html). The choice is kept in
// this browser and can be changed from the footer. Decline is as easy as Accept.
export function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(KEY)
    } catch {
      // Storage blocked: ask every visit, cookies stay off unless accepted.
    }
    if (!saved) setOpen(true)
    const show = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, show)
    return () => window.removeEventListener(OPEN_EVENT, show)
  }, [])

  function choose(granted: boolean) {
    try {
      localStorage.setItem(KEY, granted ? 'granted' : 'denied')
    } catch {
      // Ignore: the choice still applies for this visit.
    }
    window.gtag?.('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' })
    if (!granted) clearAnalyticsCookies()
    setOpen(false)
  }

  if (!open) return null

  const button =
    'cursor-pointer px-3 py-1.5 font-modernist text-[11px] leading-none font-semibold tracking-[0.08em] uppercase outline-none transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink'

  // Compact card: one short line in the standard wording, two equal buttons.
  return (
    <section
      aria-label="Cookie consent"
      className="fixed right-[max(0.75rem,env(safe-area-inset-right))] bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-[max(0.75rem,env(safe-area-inset-left))] z-50 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 bg-ink px-4 py-3 shadow-lg tablet:left-auto tablet:max-w-[22rem]"
    >
      <p className="text-pretty" style={{ color: 'var(--color-page)', fontSize: '12.5px', lineHeight: 1.45 }}>
        This website uses cookies to analyse traffic and improve your experience.
      </p>
      <div className="ml-auto flex gap-2">
        <button
          type="button"
          onClick={() => choose(false)}
          className={`${button} border border-page/40`}
          style={{ color: 'var(--color-page)' }}
        >
          Decline
        </button>
        <button type="button" onClick={() => choose(true)} className={`${button} bg-page`} style={{ color: 'var(--color-ink)' }}>
          Accept
        </button>
      </div>
    </section>
  )
}

export default CookieBanner
