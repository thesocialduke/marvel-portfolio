import { useEffect, useState } from 'react'
import { Grid } from './Grid'
import { ButtonLink } from './Button'
import { site } from '../data/site'

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
      className={`fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center bg-ink text-page shadow-lg outline-none transition-[opacity,transform] hover:opacity-80 focus-visible:ring-2 focus-visible:ring-hyacinth-hover ${
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
  return (
    <>
      <footer id="contact" className="scroll-mt-20 bg-page text-ink tablet:scroll-mt-24">
        {/* Full-bleed, edge to edge — same technique as the Trusted-by
            logo grid, breaking out of the Grid container. */}
        <div className="h-px w-full bg-ink/15" />

        <Grid className="gap-y-10 py-10 tablet:py-14 laptop:py-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <h2 className="custom-h2 custom-h2-bold relative text-balance">Would love to hear from you.</h2>
            <p className="custom-p mt-4 text-ink/70">
              If you have requests or questions, kindly do not hesitate to contact me.
            </p>
            <div className="mt-8">
              <ButtonLink to={`mailto:${site.email}`} external>
                {site.email}
              </ButtonLink>
            </div>
          </div>

          <div className="col-span-full flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6 tablet:col-span-8 laptop:col-span-12 laptop:col-start-2">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
              >
                LinkedIn
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
              >
                Instagram
              </a>
            </div>
            <p className="custom-p custom-p-sm text-ink/60">{site.copyright}</p>
          </div>
        </Grid>
      </footer>

      <BackToTop />
    </>
  )
}
