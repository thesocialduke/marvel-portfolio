import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Grid } from './Grid'
import { ButtonLink } from './Button'
import { site } from '../data/site'

const LIGHT = 'var(--color-page)'
const LIGHT_MUTED = 'rgb(231 230 226 / 0.7)'

function EmailAction() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API unavailable (e.g. insecure context); nothing to fall back to.
    }
  }

  return (
    <div className="flex items-center gap-3">
      <ButtonLink
        to={`mailto:${site.email}`}
        external
        tone="red"
        fullWidth={false}
        className="min-w-0 flex-1 shrink px-3 text-[3.1vw] tracking-tight whitespace-nowrap ring-page/60 tablet:flex-none tablet:px-8 tablet:text-[1rem] tablet:tracking-normal"
      >
        {site.email}
      </ButtonLink>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="flex size-9 shrink-0 cursor-pointer items-center justify-center text-red-600 outline-none transition-colors tablet:text-page/50 tablet:hover:text-red-600 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
      >
        {copied ? (
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="12" height="12" rx="0" />
            <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
          </svg>
        )}
      </button>
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center bg-red-600 text-page shadow-lg outline-none transition-[opacity,transform] hover:opacity-80 focus-visible:ring-2 focus-visible:ring-hyacinth-hover ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

export function Footer() {
  const { pathname } = useLocation()

  return (
    <>
      <footer
        id="contact"
        className="on-dark scroll-mt-20 tablet:scroll-mt-24"
        style={{ background: 'var(--color-graphite)', color: 'var(--color-page)' }}
      >
        <Grid className="gap-y-10 py-12 tablet:py-14 laptop:py-18">
          <div className="col-span-full flex flex-col gap-6 tablet:col-span-6 tablet:col-start-2 tablet:flex-row tablet:items-end tablet:justify-between laptop:col-span-12 laptop:col-start-2">
            <div>
              <h2 className="custom-h2 custom-h2-bold relative text-balance" style={{ color: LIGHT }}>
                Would love to hear from you.
              </h2>
              <p className="custom-p mt-4" style={{ color: LIGHT_MUTED }}>
                If you have requests or questions, kindly do not hesitate to contact me.
              </p>
            </div>
            <div className="shrink-0">
              <EmailAction />
            </div>
          </div>

          <div className="col-span-full flex flex-wrap items-center justify-between gap-4 border-t border-page/20 pt-6 tablet:col-span-8 laptop:col-span-12 laptop:col-start-2">
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/"
                onClick={() => {
                  // Already on the home page: the route doesn't change, so scroll up manually.
                  if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
                style={{ color: LIGHT }}
              >
                Home
              </Link>
              <a
                href={site.cvUrl}
                download
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
                style={{ color: LIGHT }}
              >
                CV
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
                style={{ color: LIGHT }}
              >
                LinkedIn
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
                style={{ color: LIGHT }}
              >
                Instagram
              </a>
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
                style={{ color: LIGHT }}
              >
                Telegram
              </a>
            </div>
            <p className="custom-p custom-p-sm" style={{ color: LIGHT_MUTED }}>
              {site.copyright}
            </p>
          </div>
        </Grid>
      </footer>

      <BackToTop />
    </>
  )
}
