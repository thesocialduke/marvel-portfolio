import { Link } from 'react-router-dom'
import { Grid } from './Grid'

type PagerLink = { href: string; title: string }

// Previous / next case study links as two compact, evenly split cells.
export function CaseStudyPager({ prev, next }: { prev: PagerLink; next: PagerLink }) {
  return (
    <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
      <Grid>
        <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
          <nav
            aria-label="More case studies"
            className="grid grid-cols-1 border-y border-ink/15 tablet:grid-cols-2 tablet:divide-x tablet:divide-ink/15"
          >
            <Link
              to={prev.href}
              className="group block py-6 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover tablet:pr-8"
            >
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Previous case study</p>
              <p className="custom-h4 mt-2 text-balance uppercase" style={{ fontWeight: 500, fontSize: "calc(var(--project-title-size) * 0.9)" }}>
                <span className="mr-2 inline-block transition-transform group-hover:-translate-x-1">←</span>
                {prev.title}
              </p>
            </Link>
            <Link
              to={next.href}
              className="group block border-t border-ink/15 py-6 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover tablet:border-t-0 tablet:pl-8 tablet:text-right"
            >
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Next case study</p>
              <p className="custom-h4 mt-2 text-balance uppercase" style={{ fontWeight: 500, fontSize: "calc(var(--project-title-size) * 0.9)" }}>
                {next.title}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </p>
            </Link>
          </nav>
        </div>
      </Grid>
    </section>
  )
}

export default CaseStudyPager
