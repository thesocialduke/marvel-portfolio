import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { VideoGallery } from '../components/VideoGallery'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from '../data/site'

const BLUE = 'rgb(0 82 255)'

const problems = [
  { letter: 'A', title: 'Uneven production', description: 'Camera, lighting and framing changed with every creator.' },
  { letter: 'B', title: 'Too promotional', description: 'Posts read like ads, so audiences scrolled past.' },
  { letter: 'C', title: 'Few formats', description: 'The same talking-head style showed up again and again.' },
  { letter: 'D', title: 'No creative lead', description: 'Creators had no brief, hooks or scripts to work from.' },
]

const beforeAfterPairs = [
  // Liseli — the one wearing the blue headband
  { before: '/case-studies/base/before-2.jpg', after: baseCaseStudy.afterImages![0] },
  // Tebogo — no before photo available for this one
  { before: null, after: baseCaseStudy.afterImages![1] },
  // Nobantu
  { before: '/case-studies/base/before-1.jpg', after: baseCaseStudy.afterImages![2] },
]

export function BaseCaseStudy() {
  useDocumentMeta({
    title: 'Giving Base’s Creator Network a Clear Creative Voice — Case Study | Ndubuisi Marvellous',
    description: baseCaseStudy.summary,
  })

  return (
    <Layout>
      {/* HERO */}
      <section className="case-study-serif pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="pb-12 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: BLUE }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">
                Case study · Coinbase (Base) · Southern Africa
              </p>
            </div>
            <h1 className="custom-h1 relative max-w-4xl text-balance">
              Giving Base’s creator network a clear creative voice
            </h1>
            <p className="custom-p mt-6 max-w-2xl text-ink/70">
              Base had ambassadors posting every week, but the work looked and sounded uneven. I coached the
              network, wrote the scripts and set the creative direction so the content felt local, sharp and
              on-brand.
            </p>
          </div>
        </Grid>
      </section>

      {/* SNAPSHOT */}
      <section className="case-study-serif">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="grid grid-cols-1 gap-6 bg-hyacinth/5 p-6 tablet:grid-cols-3 tablet:p-8">
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Role</p>
                <p className="custom-h4 custom-h4-bold mt-1">{baseCaseStudy.roleTitle}</p>
              </div>
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Region</p>
                <p className="custom-h4 custom-h4-bold mt-1">Southern Africa</p>
              </div>
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Focus</p>
                <p className="custom-h4 custom-h4-bold mt-1">Coaching, scripts, new formats, AI video</p>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      {/* THE PROBLEM */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-start gap-y-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">01. The problem</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Plenty of content, no shared direction</h2>
            <p className="custom-p mt-4 text-ink/70">
              The network was active and posting often. Quality and depth varied from creator to creator, and
              nobody was setting the creative bar.
            </p>
          </div>
          <div className="col-span-full grid grid-cols-1 gap-4 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-6 laptop:col-start-8">
            {problems.map((p) => (
              <div key={p.letter} className="flex flex-col gap-2 bg-hyacinth/5 p-6">
                <p className="custom-p custom-p-sm text-ink/50">{p.letter}</p>
                <p className="custom-h4 custom-h4-bold">{p.title}</p>
                <p className="custom-p text-ink/60">{p.description}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* BEFORE / AFTER */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-end gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">02. Before and after</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Same creators, sharper work</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10">
            <p className="custom-p text-ink/60">Each pair shows one creator’s video before coaching and after it.</p>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-1 gap-8 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-3 laptop:col-span-12 laptop:col-start-2">
            {beforeAfterPairs.map((pair) => {
              const [quote, byline] = pair.after.caption!.split(', by ')
              return (
                <div key={pair.after.image} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-2">
                    {pair.before ? (
                      <div className="relative aspect-[3/4] overflow-hidden bg-hyacinth/10">
                        <img src={pair.before} alt="" className="absolute inset-0 size-full object-cover grayscale" />
                        <p className="custom-p custom-p-sm absolute top-2 left-2 text-ink/60 uppercase">Before</p>
                      </div>
                    ) : (
                      <div className="aspect-[3/4] bg-hyacinth/10" />
                    )}
                    <div className="relative aspect-[3/4] overflow-hidden bg-hyacinth/10">
                      <img src={pair.after.image} alt="" className="absolute inset-0 size-full object-cover" />
                      <p className="custom-p custom-p-sm absolute top-2 left-2 text-ink/60 uppercase">After</p>
                    </div>
                  </div>
                  <p className="custom-h4 custom-h4-bold">{quote}</p>
                  <p className="custom-p text-ink/60">{byline}</p>
                </div>
              )
            })}
          </div>
        </Grid>

        {/* Shift table */}
        <Grid className="mt-12">
          <div className="col-span-full divide-y divide-ink/15 border-t border-ink/15 tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            {baseCaseStudy.beforeAfter!.map((row) => (
              <div key={row.before} className="grid grid-cols-1 gap-2 py-5 tablet:grid-cols-2 tablet:gap-6">
                <p className="custom-p text-ink/50">{row.before}</p>
                <p className="custom-h4 custom-h4-bold">→ {row.after}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* AI CREATIVE DIRECTION */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-end gap-y-6 pb-4 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">03. AI creative direction</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Campaign films made with AI</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10">
            <p className="custom-p text-ink/60">
              I wrote and directed each concept, then produced it with AI video tools for regional campaigns.
            </p>
          </div>
        </Grid>
        <VideoGallery videos={baseCaseStudy.videos!} orientation="landscape" rounded={0} showDescriptions />
      </section>

      {/* OUTCOME */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-center gap-y-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={baseCaseStudy.gallery![0].image}
                alt={baseCaseStudy.gallery![0].caption ?? ''}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
              <p className="custom-p custom-h4-invert absolute inset-x-0 bottom-0 p-4">
                {baseCaseStudy.gallery![0].caption}
              </p>
            </div>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">04. Outcome</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">
              An uneven network turned into a steady source of on-brand content
            </h2>
            <p className="custom-p mt-4 text-ink/70">{baseCaseStudy.closing[0]}</p>
            <p className="custom-p mt-4 text-ink/70">{baseCaseStudy.closing[1]}</p>
          </div>
        </Grid>
      </section>

      {/* NEXT / PREVIOUS / CTA */}
      <section className="case-study-serif border-t border-ink/15 py-12 tablet:py-14 laptop:py-18">
        <Grid className="items-center gap-y-8">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Previous case study</p>
            <Link
              to={bitgetCaseStudy.href}
              className="custom-h2 relative mt-2 inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              ← Bitget Africa
            </Link>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-3 laptop:col-start-7">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Next case study</p>
            <Link
              to={binanceCaseStudy.href}
              className="custom-h2 relative mt-2 inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              {binanceCaseStudy.title} →
            </Link>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10 laptop:justify-self-end">
            <ButtonLink to="#contact">Work with me</ButtonLink>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}

export default BaseCaseStudy
