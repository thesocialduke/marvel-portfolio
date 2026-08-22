import { Grid } from './Grid'
import { site } from '../data/site'

function LinkedInIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="footer" className="border-t border-ink/10">
      <Grid className="gap-8 py-12 tablet:py-14 laptop:py-18">
        <div className="col-span-full space-y-4 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
          <h2 className="custom-h2 relative text-balance">Tell me what&rsquo;s next.</h2>
          <a href={`mailto:${site.email}`} className="custom-p inline-block text-ink/60 transition-colors hover:text-ink">
            {site.email}
          </a>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full bg-ink text-page transition-colors hover:bg-hyacinth-hover"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="col-span-full mt-4 border-t border-ink/10 pt-8 tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
          <p className="custom-p text-ink/60">{site.copyright}</p>
        </div>
      </Grid>
    </footer>
  )
}
