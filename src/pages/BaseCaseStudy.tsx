import { CaseStudyPager } from '../components/CaseStudyPager'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { LetsTalkPanel } from '../components/LetsTalkPanel'
import { VideoGallery } from '../components/VideoGallery'
import { SplitSection } from '../components/SplitSection'
import { JsonLd } from '../components/JsonLd'
import { caseStudyJsonLd } from '../data/caseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from '../data/site'
import { cn } from '../lib/utils'

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
    image: '/case-studies/base.webp',
    clientName: 'Coinbase (Base)',
  })

  return (
    <Layout>
      <JsonLd data={caseStudyLd} />
      {/* HERO */}
      <section className="case-study-serif pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="pb-12 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance" style={{ fontSize: 'calc(var(--h1-size) * 0.8)' }}>
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
      <section className="case-study-serif py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="Plenty of content, no shared direction">
          <p className="custom-p text-pretty text-ink/70">
            The network was active and posting often. Quality and depth varied from creator to creator, and nobody was
            setting the creative bar.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 tablet:grid-cols-2">
            {problems.map((p) => (
              <div key={p.letter} className="flex flex-col gap-2 bg-hyacinth/5 p-6 tablet:p-8">
                <p className="custom-h4 custom-h4-bold">{p.title}</p>
                <p className="custom-p text-ink/60">{p.description}</p>
              </div>
            ))}
          </div>
        </SplitSection>
      </section>

      {/* BEFORE / AFTER */}
      <section className="case-study-serif py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="Same creators, sharper work: before and after coaching">
          <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3">
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

          {/* What changed: each "before" next to its "after" */}
          <div className="mt-14">
            <div className="mb-4 hidden grid-cols-[1fr_3rem_1fr] gap-4 tablet:grid">
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Before</p>
              <span />
              <p className="custom-p custom-p-sm tracking-[0.1em] uppercase" style={{ color: 'var(--color-accent-text)' }}>
                After
              </p>
            </div>
            <div className="flex flex-col gap-2 tablet:gap-3">
              {baseCaseStudy.beforeAfter!.map((row) => (
                <div key={row.before}>
                  {/* Phone: one compact card per pair */}
                  <div className="border-l-[3px] bg-hyacinth/5 px-4 py-3 tablet:hidden" style={{ borderColor: 'var(--color-red-600)' }}>
                    <p className="custom-p custom-p-sm text-ink/50 line-through decoration-ink/25">{row.before}</p>
                    <p className="custom-h4 custom-h4-bold mt-1 flex items-start gap-2">
                      <span aria-hidden="true" style={{ color: 'var(--color-accent-text)' }}>
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
                    <div className="flex items-center border-l-[3px] bg-hyacinth/5 px-5 py-4" style={{ borderColor: 'var(--color-red-600)' }}>
                      <p className="custom-h4 custom-h4-bold">{row.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SplitSection>
      </section>

      {/* AI CREATIVE DIRECTION */}
      <section className="case-study-serif py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="Campaign films made with AI">
          <p className="custom-p text-pretty text-ink/60">
            I wrote and directed each concept, then produced it with AI video tools for regional campaigns.
          </p>
          <div className="mt-8">
            <VideoGallery videos={baseCaseStudy.videos!} orientation="landscape" rounded={0} showDescriptions titleBold bare />
          </div>
        </SplitSection>
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
