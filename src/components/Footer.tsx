import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Grid } from './Grid'
import { CvMenu } from './CvMenu'
import { DotField } from './DotField'
import { EmailCopyButton } from './EmailCopyButton'
import { SocialLinks } from './SocialLinks'
import { openCookieSettings } from './CookieBanner'
import { site } from '../data/site'
import { cn } from '../lib/utils'

const LIGHT = 'var(--color-light)'
const LIGHT_MUTED = 'rgb(231 230 226 / 0.7)'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  // Shows only once the visitor is past 400px AND scrolling back up (the moment they'd want
  // it), and hides again as soon as they scroll down, so it never sits over what they're
  // reading. Hidden again near the top.
  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        if (Math.abs(y - lastY) < 6) return
        setVisible(y > 400 && y < lastY)
        lastY = y
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={cn(
        'fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex size-10 items-center justify-center bg-red-600 text-light shadow-md outline-none transition-[opacity,translate] duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-hyacinth-hover tablet:right-[max(1.5rem,env(safe-area-inset-right))] tablet:bottom-[max(1.5rem,env(safe-area-inset-bottom))] tablet:size-11',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        className="on-dark relative isolate scroll-mt-20 tablet:scroll-mt-24"
        style={{ background: 'var(--color-night)', color: 'var(--color-light)' }}
      >
        <DotField />
        <Grid className="gap-y-10 py-12 tablet:py-14 laptop:py-18">
          {/* Phones and tablets: heading, line and email button stacked on one left edge.
              Laptop: heading block left, email button right, centred on each other so the
              row is balanced across the full width. */}
          <div className="col-span-full flex flex-col items-start gap-6 tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2 laptop:flex-row laptop:items-center laptop:justify-between laptop:gap-12">
            <div className="min-w-0">
              {/* Phones: larger and allowed to wrap onto two lines, so it reads as the closing headline.
                  Tablet and up: the earlier one-line size. */}
              <h2
                className="footer-cta-title custom-h2 custom-h2-bold relative text-balance"
                style={{ color: LIGHT, fontWeight: 600 }}
              >
                Would love to hear from you.
              </h2>
              <p className="custom-p mt-4" style={{ color: LIGHT_MUTED }}>
                If you have requests or questions, feel free to reach out.
              </p>
            </div>
            <EmailCopyButton tone="dark" />
          </div>

          <div className="col-span-full flex flex-wrap items-center justify-between gap-4 border-t border-light/20 pt-6 tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2" style={{ color: LIGHT }}>
              <Link
                to="/"
                onClick={() => {
                  // Already on the home page: the route doesn't change, so scroll up manually.
                  if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="custom-p custom-p-sm inline-flex min-h-10 items-center tracking-wide uppercase outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-light/60"
                style={{ color: LIGHT }}
              >
                Home
              </Link>
              <CvMenu variant="link" label="Resume" />
              <SocialLinks />
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <button
                type="button"
                onClick={openCookieSettings}
                className="custom-p custom-p-sm inline-flex min-h-10 cursor-pointer items-center underline underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-light/60"
                style={{ color: LIGHT_MUTED }}
              >
                Cookie settings
              </button>
              <p className="custom-p custom-p-sm" style={{ color: LIGHT_MUTED }}>
                {site.copyright}
              </p>
            </div>
          </div>
        </Grid>
      </footer>

      <BackToTop />
    </>
  )
}
