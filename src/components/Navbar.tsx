import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Dialog } from 'radix-ui'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Grid } from './Grid'
import { ThemeToggle } from './ThemeToggle'
import { SocialLinks } from './SocialLinks'
import { nav, site } from '../data/site'
import { cn } from '../lib/utils'

// Desktop nav links: 40px-tall hit area and red hover. The current one is marked by a
// single red underline that slides between links (see Navbar).
const navLinkBase =
  "relative inline-flex h-10 items-center font-poppins text-[13px] font-bold tracking-wide uppercase outline-none transition-colors duration-150 hover:text-accent-text focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page"

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
  const { pathname } = useLocation()
  // On the home page, the underline moves to "Case Studies" while that section fills the
  // middle of the screen, and back to "Home" everywhere else on the page.
  const [inCaseStudies, setInCaseStudies] = useState(false)
  useEffect(() => {
    setInCaseStudies(false)
    if (pathname !== '/') return
    const el = document.getElementById('case-studies')
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInCaseStudies(entry.isIntersecting), {
      rootMargin: '-45% 0px -45% 0px',
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [pathname])

  // A link to where you already are changes nothing in the address, so the router does
  // nothing. Handle those clicks by scrolling instead: "Home" on the home page goes back
  // to the top, and "Case Studies" on the home page scrolls to that section every time.
  const desktopItems = nav.filter((item) => item.href !== '/contact')
  const currentHref =
    pathname === '/' ? (inCaseStudies ? '/#case-studies' : '/') : desktopItems.find((item) => item.href === pathname)?.href

  // One underline that slides to the current link: measured from the link's position, moved
  // with transform only (translate + scaleX on a 1px-wide bar), so it animates smoothly.
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [bar, setBar] = useState<{ x: number; w: number } | null>(null)
  useLayoutEffect(() => {
    const measure = () => {
      const el = currentHref ? linkRefs.current[currentHref] : null
      setBar(el && el.offsetWidth ? { x: el.offsetLeft, w: el.offsetWidth } : null)
    }
    measure()
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [currentHref])

  function handleNavClick(e: React.MouseEvent, href: string) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    const [path, hash] = href.split('#')
    if ((path || '/') !== pathname) return
    if (hash) {
      const el = document.getElementById(hash)
      if (!el) return
      e.preventDefault()
      setInCaseStudies(true) // underline moves on click, not when the scroll arrives
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      window.history.replaceState(null, '', `#${hash}`)
    } else if (href === '/') {
      e.preventDefault()
      setInCaseStudies(false)
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      if (window.location.hash) window.history.replaceState(null, '', '/')
    }
  }

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
          {/* Laptop and up: logo left, page links centred in one row, "Contact me" as the only
              filled button on the right. Smaller screens keep the MENU button and full-screen menu. */}
          <div className="col-span-full flex items-center justify-between py-3 tablet:col-span-6 tablet:col-start-2 tablet:py-4 laptop:col-span-12 laptop:col-start-2 laptop:grid laptop:grid-cols-[1fr_auto_1fr] laptop:py-4">
            <Link
              to="/"
              aria-label={site.name}
              className="relative z-10 flex h-8 items-center outline-none active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              <img src="/brand-logo.svg" alt={site.name} className="h-5 w-auto tablet:h-8" />
            </Link>

            <nav aria-label="Main" className="hidden laptop:block">
              <ul className="relative flex items-center gap-8">
                <span
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute bottom-1.5 left-0 h-0.5 w-px origin-left bg-red-600 transition-[translate,scale,opacity] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none',
                    bar ? 'opacity-100' : 'opacity-0',
                  )}
                  style={bar ? { translate: `${bar.x}px 0`, scale: `${bar.w} 1` } : undefined}
                />
                {desktopItems.map((item) => (
                    <li key={item.href}>
                      {/* Current = the page you're on; on the home page, whichever of Home or
                          Case Studies you're looking at. */}
                      {(() => {
                        const current = item.href === currentHref
                        return (
                          <Link
                            ref={(el) => {
                              linkRefs.current[item.href] = el
                            }}
                            to={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            aria-current={current ? (item.href.includes('#') ? 'location' : 'page') : undefined}
                            className={cn(navLinkBase, current ? 'text-ink' : 'text-ink/70')}
                          >
                            {item.label}
                          </Link>
                        )
                      })()}
                    </li>
                  ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2 justify-self-end laptop:gap-3">
              <ThemeToggle />
              {/* Same type as the site's other buttons (bold capitals), filled black as the
                  one highlighted action in the bar; red on hover. */}
              <Link
                to="/contact"
                className="custom-button-label hidden h-10 items-center gap-2 bg-ink px-4 text-sm text-page uppercase hover:text-light outline-none transition-[background-color,color,scale] duration-150 ease-out active:scale-[0.96] hover:bg-red-600 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page laptop:inline-flex"
                
              >
                Contact me
              </Link>

              <Dialog.Trigger asChild>
                {/* Phones and tablets: a plain three-bar menu icon (the instantly recognised shape) in a
                    44px tap area pulled into the gutter so the bars line up with the page edge. */}
                <button
                  type="button"
                  aria-label="Open menu"
                  className="relative z-20 -mr-2.5 inline-flex size-11 shrink-0 cursor-pointer items-center justify-center text-ink outline-none transition-[color,scale] duration-150 ease-out active:scale-[0.96] hover:text-accent-text focus-visible:ring-2 focus-visible:ring-red-600 laptop:hidden"
                >
                  <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
                    <span className="h-0.5 w-6 bg-current" />
                    <span className="h-0.5 w-6 bg-current" />
                    <span className="h-0.5 w-6 bg-current" />
                  </span>
                </button>
              </Dialog.Trigger>
            </div>
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
                className="fixed inset-0 z-60 flex flex-col bg-night text-light outline-none"
              >
                <Dialog.Title className="sr-only">Menu</Dialog.Title>

                <Grid>
                  <div className="col-span-full flex items-center justify-between py-3 tablet:col-span-6 tablet:col-start-2 tablet:py-4 laptop:col-span-12 laptop:col-start-2 laptop:py-5">
                    <img src="/brand-logo-white.svg" alt={site.name} className="h-6 w-auto tablet:h-7" />
                    <Dialog.Close asChild>
                      {/* Plain ×, the same bars as the menu icon crossed, in the same 44px tap area. */}
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="-mr-2.5 inline-flex size-11 shrink-0 cursor-pointer items-center justify-center text-light outline-none transition-[color,scale] duration-150 ease-out active:scale-[0.96] hover:text-red-light focus-visible:ring-2 focus-visible:ring-light/60"
                      >
                        <span aria-hidden="true" className="relative block size-6">
                          <span className="absolute top-1/2 left-0 h-0.5 w-6 -translate-y-1/2 rotate-45 bg-current" />
                          <span className="absolute top-1/2 left-0 h-0.5 w-6 -translate-y-1/2 -rotate-45 bg-current" />
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
                        'group relative flex items-start gap-3 py-3 outline-none transition-[color] duration-200 focus-visible:ring-2 focus-visible:ring-light/40 tablet:gap-4'
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
                          className="border-b border-light/20 py-2 first:border-t tablet:py-3"
                        >
                          {item.href.startsWith('#') ? (
                            // Same-page scroll anchor (the footer's contact section
                            // exists on every route) instead of a route change.
                            <a href={item.href} onClick={() => setOpen(false)} className={linkClassName}>
                              {content}
                            </a>
                          ) : (
                            <NavLink to={item.href} end={item.href === '/'} onClick={(e) => { setOpen(false); handleNavClick(e, item.href) }} className={linkClassName}>
                              {content}
                            </NavLink>
                          )}
                        </motion.li>
                      )
                    })}
                  </motion.ul>
                </nav>

                <div className="font-poppins flex items-center justify-between gap-4 px-6 pb-5 text-xs tracking-wide text-light/60 tablet:px-10 tablet:pb-6 laptop:px-14 laptop:pb-8">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 outline-none transition-colors duration-200 hover:text-light focus-visible:ring-2 focus-visible:ring-light/40"
                  >
                    <span aria-hidden="true" className="inline-block size-2 shrink-0 bg-red-600 motion-safe:animate-pulse" />
                    <span>
                      Open to work<span className="hidden tablet:inline">: full-time and contract roles</span>
                    </span>
                  </Link>
                  <SocialLinks className="-my-2 mx-0" linkClassName="hover:opacity-100 hover:text-light" size="size-4" />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
