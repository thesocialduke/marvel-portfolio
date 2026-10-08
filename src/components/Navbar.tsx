import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link, NavLink } from 'react-router-dom'
import { Grid } from './Grid'
import { nav, site } from '../data/site'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const } },
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Move focus into the overlay on open, and back to the button that
  // opened it on close, so keyboard focus never gets lost. Skipped on
  // first mount so page load doesn't steal focus onto the toggle button.
  const hasOpenedRef = useRef(false)
  useEffect(() => {
    if (open) {
      hasOpenedRef.current = true
      closeRef.current?.focus()
    } else if (hasOpenedRef.current) {
      toggleRef.current?.focus()
    }
  }, [open])

  return (
    <>
      {/* Flat, chrome-free bar — fixed so the logo never scrolls away, but
          no pill, border or blur; just the logo and the menu trigger. */}
      <div className="fixed inset-x-0 top-0 z-50" inert={open}>
        <Grid>
          <div className="col-span-full flex items-center justify-between py-3 tablet:col-span-6 tablet:col-start-2 tablet:py-4 laptop:col-span-12 laptop:col-start-2 laptop:py-5">
            <Link
              to="/"
              aria-label={site.name}
              className="relative z-10 flex h-8 items-center outline-none active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              <img src="/brand-logo.svg" alt={site.name} className="h-5 w-auto tablet:h-8" />
            </Link>

            <button
              ref={toggleRef}
              type="button"
              aria-label="Toggle navigation"
              aria-controls="site-nav"
              aria-expanded={open}
              className="relative z-20 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center bg-red-600/10 text-ink outline-none transition-[color,transform] active:scale-[0.96] hover:text-red-600 focus-visible:ring-2 focus-visible:ring-hyacinth-hover laptop:size-9"
              onClick={() => setOpen((v) => !v)}
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M3 7h18M3 13h18" />
              </svg>
            </button>
          </div>
        </Grid>
      </div>

      {/* Full-screen navigation, every breakpoint. Deliberately inverted
          (ink background, page-colored text) regardless of light/dark
          theme, matching the editorial index-list menu at
          studioolimpo.it. Mounted only while open so enter/exit motion
          and focus management stay simple. */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-nav"
            key="site-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-page"
          >
            <Grid>
              <div className="col-span-full flex items-center justify-between py-3 tablet:col-span-6 tablet:col-start-2 tablet:py-4 laptop:col-span-12 laptop:col-start-2 laptop:py-5">
                <img src="/brand-logo-white.svg" alt={site.name} className="h-6 w-auto tablet:h-7" />
                <button
                  ref={closeRef}
                  type="button"
                  aria-label="Close navigation"
                  className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center text-page outline-none transition-[background-color,transform] active:scale-[0.96] hover:bg-page/10 focus-visible:ring-2 focus-visible:ring-page/40 laptop:size-9"
                  onClick={() => setOpen(false)}
                >
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </Grid>

            <div className="flex flex-1 items-center justify-center px-8 tablet:px-16 laptop:px-24">
              <motion.ul
                variants={prefersReducedMotion ? undefined : listVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-4xl"
              >
                {nav.map((item, i) => {
                  const linkClassName =
                    'group relative flex items-start gap-3 py-3 outline-none transition-[color] focus-visible:ring-2 focus-visible:ring-page/40 tablet:gap-4'
                  const content = (
                    <>
                      <span className="font-poppins w-6 shrink-0 pt-2 text-xs tabular-nums opacity-60 tablet:w-8 tablet:pt-3 tablet:text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="hover-red-text font-modernist flex-1 text-right text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.95] font-bold uppercase group-hover:translate-x-[-0.25rem]">
                        {item.label}
                      </span>
                    </>
                  )

                  return (
                    <motion.li
                      key={item.href}
                      variants={prefersReducedMotion ? undefined : itemVariants}
                      className="border-b border-page/20 py-2 first:border-t tablet:py-3"
                    >
                      {item.href.startsWith('#') ? (
                        // Same-page scroll anchor (the footer's contact section
                        // exists on every route) instead of a route change.
                        <a href={item.href} onClick={() => setOpen(false)} className={linkClassName}>
                          {content}
                        </a>
                      ) : (
                        <NavLink to={item.href} end={item.href === '/'} onClick={() => setOpen(false)} className={linkClassName}>
                          {content}
                        </NavLink>
                      )}
                    </motion.li>
                  )
                })}
              </motion.ul>
            </div>

            <div className="font-poppins flex items-center justify-between px-6 pb-5 text-xs tracking-wide text-page/60 tablet:px-10 tablet:pb-6 laptop:px-14 laptop:pb-8">
              <span>{site.copyright}</span>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="outline-none transition-colors hover:text-page focus-visible:ring-2 focus-visible:ring-page/40"
              >
                LinkedIn
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
