import { CaseStudyPager } from '../components/CaseStudyPager'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { LetsTalkPanel } from '../components/LetsTalkPanel'
import { VideoGallery } from '../components/VideoGallery'
import { JsonLd } from '../components/JsonLd'
import { caseStudyJsonLd } from '../data/caseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from '../data/site'
import { cn } from '../lib/utils'

const BLUE = 'rgb(0 82 255)'

const problems = [
  { letter: 'A', title: 'Uneven production', description: 'Camera, lighting and framing changed with every creator.' },
  { letter: 'B', title: 'Too promotional', description: 'Posts read like ads, so audiences scrolled past.' },
  { letter: 'C', title: 'Few formats', description: 'The same talking-head style showed up again and again.' },
  { letter: 'D', title: 'No creative lead', description: 'Creators had no brief, hooks or scripts to work from.' },
]

const beforeAfterPairs = [
  // Liseli | the one wearing the blue headband
  { before: '/case-studies/base/before-2.jpg', after: baseCaseStudy.afterImages![0] },
  // Nobantu
  { before: '/case-studies/base/before-1.jpg', after: baseCaseStudy.afterImages![2] },
  // Tebogo | no before photo available for this one, so it goes last
  { before: null, after: baseCaseStudy.afterImages![1] },
]

export function BaseCaseStudy() {
  useDocumentMeta({
    title: 'Base Southern Africa Creator Network Case Study | Ndubuisi Marvellous',
    description:
      'How I coached Base’s Southern Africa ambassador network into a consistent source of sharper, on-brand video content, including AI-directed campaign films.',
    image: '/case-studies/og-base.jpg',
    ogType: 'article',
  })
  const caseStudyLd = caseStudyJsonLd({
    path: '/base-southern-africa',
    title: 'Giving Southern Africa’s creator network a clear creative voice and structure',
    description: baseCaseStudy.summary,
    image: '/case-studies/base.jpg',
    clientName: 'Coinbase (Base)',
  })

  return (
    <Layout>
      <JsonLd data={caseStudyLd} />
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
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance">
              Giving Southern Africa’s creator network a clear creative voice and structure
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
              <div key={p.letter} className="flex flex-col gap-2 bg-hyacinth/5 p-6 tablet:p-8">
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
                      <div className="relative aspect-[9/16] overflow-hidden bg-hyacinth/10">
                        <img loading="lazy" decoding="async" src={pair.before} alt="" className="absolute inset-0 size-full object-cover grayscale" />
                        <span className="custom-p custom-p-sm absolute top-2 left-2 bg-black/70 px-2 py-1 tracking-[0.1em] uppercase" style={{ color: '#fff' }}>
                          Before
                        </span>
                      </div>
                    ) : null}
                    <div className={cn('relative aspect-[9/16] overflow-hidden bg-hyacinth/10', !pair.before && 'col-span-2 mx-auto w-1/2')}>
                      <img loading="lazy" decoding="async" src={pair.after.image} alt="" className="absolute inset-0 size-full object-cover" />
                      <span className="custom-p custom-p-sm absolute top-2 left-2 bg-red-600 px-2 py-1 tracking-[0.1em] uppercase" style={{ color: '#fff' }}>
                        After
                      </span>
                    </div>
                  </div>
                  <p className="custom-h4 custom-h4-bold">{quote}</p>
                  <p className="custom-p text-ink/60">{byline}</p>
                </div>
              )
            })}
          </div>
        </Grid>

        {/* What changed: each "before" next to its "after" */}
        <Grid className="mt-14">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="mb-4 hidden grid-cols-[1fr_3rem_1fr] gap-4 tablet:grid">
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Before</p>
              <span />
              <p className="custom-p custom-p-sm tracking-[0.1em] uppercase" style={{ color: 'rgb(220 38 38)' }}>
                After
              </p>
            </div>
            <div className="flex flex-col gap-2 tablet:gap-3">
              {baseCaseStudy.beforeAfter!.map((row) => (
                <div key={row.before}>
                  {/* Phone: one compact card per pair */}
                  <div className="border-l-[3px] bg-hyacinth/5 px-4 py-3 tablet:hidden" style={{ borderColor: 'rgb(220 38 38)' }}>
                    <p className="custom-p custom-p-sm text-ink/50 line-through decoration-ink/25">{row.before}</p>
                    <p className="custom-h4 custom-h4-bold mt-1 flex items-start gap-2">
                      <span aria-hidden="true" style={{ color: 'rgb(220 38 38)' }}>
                        →
                      </span>
                      <span>{row.after}</span>
                    </p>
                  </div>

                  {/* Tablet and up: before | arrow | after */}
                  <div className="hidden grid-cols-[1fr_3rem_1fr] items-stretch gap-4 tablet:grid">
                    <div className="flex items-center bg-hyacinth/5 px-5 py-4">
                      <p className="custom-p text-ink/55 line-through decoration-ink/25">{row.before}</p>
                    </div>
                    <div className="flex items-center justify-center" aria-hidden="true">
                      <span className="grid size-9 place-items-center bg-red-600" style={{ color: '#fff' }}>
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                          <path d="M4 12h16M14 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                    <div className="flex items-center border-l-[3px] bg-hyacinth/5 px-5 py-4" style={{ borderColor: 'rgb(220 38 38)' }}>
                      <p className="custom-h4 custom-h4-bold">{row.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        <VideoGallery videos={baseCaseStudy.videos!} orientation="landscape" rounded={0} showDescriptions titleBold threeUp />
      </section>

      <LetsTalkPanel />
      <CaseStudyPager
        prev={{ href: bitgetCaseStudy.href, title: bitgetCaseStudy.title }}
        next={{ href: binanceCaseStudy.href, title: binanceCaseStudy.title }}
      />
    </Layout>
  )
}

export default BaseCaseStudy
