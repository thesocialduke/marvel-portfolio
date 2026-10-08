import { ButtonLink } from './Button'
import { Grid } from './Grid'
import { site } from '../data/site'

const RED = 'rgb(220 38 38)'

// The closing "Let's talk about you." panel with a Book a call button.
export function LetsTalkPanel() {
  return (
    <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
      <Grid>
        <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
          <div className="flex flex-col gap-6 bg-hyacinth/5 p-8 tablet:flex-row tablet:items-center tablet:justify-between tablet:p-10 laptop:p-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Work with me</p>
              </div>
              <h2 className="custom-h2 custom-h2-bold mt-3 text-balance">Let’s talk about you.</h2>
            </div>
            <div className="flex shrink-0">
              <ButtonLink to={site.bookingUrl} external fullWidth={false} className="bg-red-600 text-page ring-red-600">
                Book a call
                <svg aria-hidden="true" className="size-[1.1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Grid>
    </section>
  )
}

export default LetsTalkPanel
