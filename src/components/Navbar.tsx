import { useEffect, useState } from 'react'
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
      className="relative z-10 inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-ink outline-none transition-colors hover:text-hyacinth focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
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

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-page/70 backdrop-blur-md">
      <Grid>
        <div className="col-span-full flex items-center justify-between py-3 tablet:col-span-6 tablet:col-start-2 tablet:py-4 laptop:col-span-12 laptop:col-start-2 laptop:py-11">
          <Link
            to="/"
            className="custom-h3 nav-brand-sm relative z-10 flex h-8 items-center rounded-sm py-2 outline-none tablet:h-10 laptop:h-12 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
          >
            {site.name}
          </Link>
          <div className="flex items-center gap-2 tablet:gap-6">
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-controls="site-nav"
              aria-expanded={open}
              className="custom-h3 z-20 -mx-3 inline-flex cursor-pointer items-center justify-center rounded-sm p-3 outline-none tablet:hidden focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 15h18v2H3zM3 7h18v2H3z" />
                </svg>
              )}
            </button>
            <nav
              id="site-nav"
              className={`fixed inset-0 z-10 flex max-h-screen items-center justify-center bg-page tablet:static tablet:visible tablet:bg-transparent tablet:pointer-events-auto ${open ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
            >
              <ul className="custom-p flex flex-col items-center space-y-4 leading-snug tablet:flex-row tablet:flex-wrap tablet:gap-x-16 tablet:space-y-0">
                {nav.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      onClick={() => setOpen(false)}
                      className="group relative inline-flex h-12 items-center rounded-sm text-ink outline-none hover:text-hyacinth focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
                    >
                      {({ isActive }) => (
                        <div
                          className={`relative text-hyacinth ${
                            isActive
                              ? 'underline decoration-1 underline-offset-8'
                              : 'group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8'
                          }`}
                        >
                          <p>{item.label}</p>
                        </div>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Grid>
    </div>
  )
}
