import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Grid } from './Grid'
import { nav, site } from '../data/site'
import { useTheme } from '../hooks/useTheme'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className="relative z-10 inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:text-hyacinth-hover"
    >
      {isDark ? (
        <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

// A single floating hamburger control that reveals an anchored, frosted-glass
// dropdown panel — modeled on danielstoopendaal.nl's nav pattern, used at
// every breakpoint instead of a persistent inline link row.
export function Navbar() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onPointerDown(e: PointerEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-page/60 backdrop-blur-md">
      <Grid>
        <div className="col-span-full flex items-center justify-between py-4 tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2 laptop:py-6">
          <Link to="/" className="custom-h3 nav-brand-sm relative z-10 flex h-8 items-center py-2 tablet:h-10 laptop:h-12">
            {site.name}
          </Link>

          <div ref={panelRef} className="relative flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-controls="site-nav"
              aria-expanded={open}
              className="relative z-10 inline-flex size-9 cursor-pointer items-center justify-center text-ink"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M3 7h18M3 13h18" />
                </svg>
              )}
            </button>

            <nav
              id="site-nav"
              className={`absolute top-full right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-page/70 p-1.5 shadow-lg ring-1 ring-ink/10 backdrop-blur-md transition-[opacity,transform] duration-150 ${
                open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
              }`}
            >
              <ul className="custom-p flex flex-col">
                {nav.map((item, i) => {
                  const isLast = i === nav.length - 1
                  return (
                    <li key={item.href}>
                      <NavLink
                        to={item.href}
                        end={item.href === '/'}
                        onClick={() => setOpen(false)}
                        className={
                          isLast
                            ? 'mt-1 flex items-center justify-center rounded-lg bg-page px-4 py-3 text-center text-ink transition-colors hover:text-hyacinth-hover'
                            : 'flex items-center justify-end rounded-lg px-4 py-3 text-right text-ink transition-colors hover:text-hyacinth-hover'
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </Grid>
    </div>
  )
}
