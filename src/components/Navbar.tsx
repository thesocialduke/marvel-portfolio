import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Dialog } from 'radix-ui'
import { Link, NavLink } from 'react-router-dom'
import { Grid } from './Grid'
import { nav, site } from '../data/site'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Flat, chrome-free bar — fixed so the logo never scrolls away, but
          no pill, border or blur; just the logo and the menu trigger. */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Grid>
          <div className="col-span-full flex items-center justify-between py-3 tablet:col-span-6 tablet:col-start-2 tablet:py-4 laptop:col-span-12 laptop:col-start-2 laptop:py-5">
            <Link
              to="/"
              aria-label={site.name}
              className="relative z-10 flex h-8 items-center outline-none active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              <img src="/brand-logo.svg" alt={site.name} className="h-5 w-auto tablet:h-8" />
            </Link>

            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Toggle navigation"
                className="relative z-20 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center bg-red-600/10 text-ink outline-none transition-[color,transform] duration-200 active:scale-[0.96] hover:text-red-600 focus-visible:ring-2 focus-visible:ring-hyacinth-hover laptop:size-9"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M3 7h18M3 13h18" />
                </svg>
              </button>
            </Dialog.Trigger>
          </div>
        </Grid>
      </div>

      {/* Full-screen navigation, every breakpoint. Deliberately inverted
          (ink background, page-colored text) regardless of light/dark
          theme, matching the editorial index-list menu at
          studioolimpo.it. It is a Radix Dialog: that handles Escape, keeping Tab
          inside the menu, locking page scroll, hiding the page from screen readers
          and returning focus to the menu button on close. Mounted only while open
          so the enter/exit motion stays simple. */}
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Invisible; Radix attaches page scroll locking to the overlay. */}
            <Dialog.Overlay forceMount className="fixed inset-0 z-60" />
            <Dialog.Content forceMount asChild aria-describedby={undefined}>
              <motion.div
                id="site-nav"
                key="site-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' }}
                className="fixed inset-0 z-60 flex flex-col bg-ink text-page outline-none"
              >
                <Dialog.Title className="sr-only">Menu</Dialog.Title>

                <Grid>
                  <div className="col-span-full flex items-center justify-between py-3 tablet:col-span-6 tablet:col-start-2 tablet:py-4 laptop:col-span-12 laptop:col-start-2 laptop:py-5">
                    <img src="/brand-logo-white.svg" alt={site.name} className="h-6 w-auto tablet:h-7" />
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close navigation"
                        className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center text-page outline-none transition-[background-color,transform] duration-200 active:scale-[0.96] hover:bg-page/10 focus-visible:ring-2 focus-visible:ring-page/40 laptop:size-9"
                      >
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>
                    </Dialog.Close>
                  </div>
                </Grid>

                <nav aria-label="Main" className="flex flex-1 items-center justify-center px-8 tablet:px-16 laptop:px-24">
                  <motion.ul
                    variants={prefersReducedMotion ? undefined : listVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-4xl"
                  >
                    {nav.map((item, i) => {
                      const linkClassName =
                        'group relative flex items-start gap-3 py-3 outline-none transition-[color] duration-200 focus-visible:ring-2 focus-visible:ring-page/40 tablet:gap-4'
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
                </nav>

                <div className="font-poppins flex items-center justify-between gap-4 px-6 pb-5 text-xs tracking-wide text-page/60 tablet:px-10 tablet:pb-6 laptop:px-14 laptop:pb-8">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 outline-none transition-colors duration-200 hover:text-page focus-visible:ring-2 focus-visible:ring-page/40"
                  >
                    <span aria-hidden="true" className="inline-block size-2 shrink-0 bg-red-600 motion-safe:animate-pulse" />
                    <span>
                      Open to work<span className="hidden tablet:inline">: full-time and contract roles</span>
                    </span>
                  </Link>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="outline-none transition-colors duration-200 hover:text-page focus-visible:ring-2 focus-visible:ring-page/40"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
