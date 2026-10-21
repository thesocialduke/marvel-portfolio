import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Dialog } from 'radix-ui'
import { Link, NavLink } from 'react-router-dom'
import { Grid } from './Grid'
import { nav, site } from '../data/site'
import { cn } from '../lib/utils'

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
  const [scrolled, setScrolled] = useState(false)

  // Once the page has moved even a little, the bar gets a solid background so content
  // never shows through behind the logo and menu button. Passive listener, state only
  // changes when crossing the threshold.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Fixed bar: transparent at the top of the page; once scrolled it becomes frosted
          glass (translucent page colour, blur and a little extra saturation, a light inner
          highlight on top and a hairline below). The blur switches on rather than animating,
          and browsers without backdrop-filter get an almost solid background instead. */}
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-150 ease-out',
          scrolled
            ? 'border-ink/10 bg-page/95 shadow-[inset_0_1px_0_rgb(255_255_255/0.5)] supports-[backdrop-filter]:bg-page/75 supports-[backdrop-filter]:backdrop-blur-xl supports-[backdrop-filter]:backdrop-saturate-150'
            : 'border-transparent bg-transparent',
        )}
      >
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
              {/* Solid black block with the word and two bars, so it reads as the menu at a glance
                  without competing with the page's red accents; it turns red on hover.
                  Accessible name stays "Toggle navigation"; the visible word is part of it. */}
              <button
                type="button"
                aria-label="Menu, toggle navigation"
                className="group relative z-20 inline-flex h-10 shrink-0 cursor-pointer items-center gap-2.5 bg-ink px-3.5 font-modernist text-xs font-semibold tracking-[0.15em] text-page uppercase outline-none transition-[background-color,scale] duration-150 ease-out active:scale-[0.96] hover:bg-red-600 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page laptop:h-11 laptop:px-4"
              >
                <span aria-hidden="true">Menu</span>
                <span aria-hidden="true" className="flex w-4 flex-col gap-1">
                  <span className="h-0.5 w-4 bg-current" />
                  <span className="h-0.5 w-4 bg-current" />
                </span>
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
                      {/* Mirrors the menu button: same red block, "Close" and the bars crossed. */}
                      <button
                        type="button"
                        aria-label="Close navigation"
                        className="inline-flex h-10 shrink-0 cursor-pointer items-center gap-2.5 bg-red-600 px-3.5 font-modernist text-xs font-semibold tracking-[0.15em] text-white uppercase outline-none transition-[background-color,color,scale] duration-150 ease-out active:scale-[0.96] hover:bg-page hover:text-ink focus-visible:ring-2 focus-visible:ring-page/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink laptop:h-11 laptop:px-4"
                      >
                        <span aria-hidden="true">Close</span>
                        <span aria-hidden="true" className="relative block size-4">
                          <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 rotate-45 bg-current" />
                          <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 -rotate-45 bg-current" />
                        </span>
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
