import { Link } from 'react-router-dom'
import { Grid } from './Grid'
import { nav, site } from '../data/site'

export function Footer() {
  return (
    // Deliberately inverted (ink background, page-colored text) regardless
    // of light/dark theme — same treatment as the full-screen nav overlay,
    // so the site closes on a consistent high-contrast bookend.
    <footer id="contact" className="scroll-mt-20 bg-ink text-page tablet:scroll-mt-24">
      <Grid className="gap-y-6 py-6 tablet:py-8 laptop:py-10">
        <div className="col-span-full space-y-6 tablet:col-span-3 tablet:col-start-1 laptop:col-span-4 laptop:col-start-2">
          <div>
            <p
              className="custom-p custom-p-sm mb-4 tracking-wide uppercase"
              style={{ color: 'color-mix(in srgb, var(--color-page) 50%, transparent)' }}
            >
              Quick links
            </p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="custom-h4 relative inline-flex items-center rounded-sm outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-page/40"
                      style={{ color: 'var(--color-page)' }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="custom-h4 relative inline-flex items-center rounded-sm outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-page/40"
                      style={{ color: 'var(--color-page)' }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="custom-p custom-p-sm mb-4 tracking-wide uppercase"
              style={{ color: 'color-mix(in srgb, var(--color-page) 50%, transparent)' }}
            >
              Follow
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="custom-h4 relative inline-flex items-center rounded-sm outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-page/40"
                  style={{ color: 'var(--color-page)' }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="custom-h4 relative inline-flex items-center rounded-sm outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-page/40"
                  style={{ color: 'var(--color-page)' }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-full tablet:col-span-5 tablet:col-start-4 laptop:col-span-8 laptop:col-start-7">
          <a
            href={`mailto:${site.email}`}
            className="custom-h3 relative inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-page/40"
            style={{ color: 'var(--color-page)' }}
          >
            {site.email}
          </a>
        </div>

        <div className="col-span-full border-t border-page/15 pt-4 tablet:col-span-8 laptop:col-span-12 laptop:col-start-2">
          <p className="custom-p" style={{ color: 'color-mix(in srgb, var(--color-page) 50%, transparent)' }}>
            {site.copyright}
          </p>
        </div>
      </Grid>
    </footer>
  )
}
