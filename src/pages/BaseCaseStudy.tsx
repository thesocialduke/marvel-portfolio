import { CaseStudyPager } from '../components/CaseStudyPager'
import { SourceLink } from '../components/SourceLink'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { VideoGallery } from '../components/VideoGallery'
import { SplitSection } from '../components/SplitSection'
import { LoopingClip } from '../components/LoopingClip'
import { JsonLd } from '../components/JsonLd'
import { caseStudyJsonLd } from '../data/caseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from '../data/site'
import { cn } from '../lib/utils'
import { useRef, useState } from 'react'
import { ImageViewer } from '../components/ImageViewer'

const guide = {
  cover: '/case-studies/base/guide/ndubuisi-marvellous-base-creator-guide-cover.webp',
  pages: '/case-studies/base/guide/ndubuisi-marvellous-base-creator-guide-pages.mp4',
  poster: '/case-studies/base/guide/ndubuisi-marvellous-base-creator-guide-pages-poster.webp',
}

const calendar = {
  src: '/case-studies/base/ndubuisi-marvellous-base-africa-editorial-calendar.webp',
  width: 1802,
  height: 798,
  alt: 'Base Africa content calendar in Google Sheets, set up by Ndubuisi Marvellous: three weeks of two posts a day (9:00 AM and 3:00 PM), each with a post code and a format (tweet, still post, video or LIVE session), plus rows for caption, image or video copy and the final asset link. Caption text is blurred.',
}

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
  const [calendarOpen, setCalendarOpen] = useState(false)
  const calendarOpenerRef = useRef<HTMLButtonElement>(null)
  useDocumentMeta({
    title: 'Base Southern Africa Creator Network Case Study | Ndubuisi Marvellous',
    description:
      'How I turned Base’s Southern Africa creator network into a steady source of on-brand content: a creator playbook, coaching and AI-directed films.',
    image: '/case-studies/og-base.jpg',
    ogType: 'article',
  })
  const caseStudyLd = caseStudyJsonLd({
    path: '/base-southern-africa',
    title: 'Turning a quiet creator network into Base’s creative engine in Southern Africa',
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
              Turning a quiet creator network into Base’s creative engine in Southern Africa
            </h1>
            <p className="custom-p mt-6 max-w-2xl text-pretty text-ink/70">
              Base had creators across Southern Africa, but little was being made, and what was made didn’t hold
              up. I gave the network a playbook, showed every creator what good looked like, and added AI-directed
              films to the regional campaign mix.
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
        <SplitSection title="A creator network that wasn’t creating">
          <p className="custom-p text-pretty text-ink/70">
            Base is Coinbase’s Ethereum layer 2, second only to Ethereum among blockchains by value locked in DeFi, per{' '}
            <SourceLink href="https://defillama.com/chain/base">DefiLlama</SourceLink>. It already had a social media lead. What it needed was someone to make its
            creator network work. Creators were spread across Southern Africa, some of them on a paid retainer, yet very
            little content was coming out. What did come out was low quality, unstructured and hard to use.
          </p>
          <p className="custom-p mt-3 text-pretty text-ink/70">I was brought in to change that. Four problems stood out.</p>
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

      {/* THE PLAYBOOK */}
      <section className="case-study-serif py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="Starting with a shared playbook">
          <p className="custom-p text-pretty text-ink/70">
            My first move was a call with the whole ambassador group. Before asking anyone to make more, I wanted
            everyone working from the same standard.
          </p>
          <p className="custom-p mt-3 text-pretty text-ink/70">
            I wrote a creator guide that set out how to make better content, from framing, light and sound to hooks and
            structure, and which new formats we would move into next. It became the brief every creator worked from.
          </p>
          {/* The guide itself: the cover, and the pages flipping through on a loop */}
          <div className="mt-8 grid grid-cols-2 gap-4 tablet:gap-6">
            <figure>
              <img
                src={guide.cover}
                alt="Cover page of the Base Ambassador Mobile Video Production Guide by Ndubuisi Marvellous: planning your video (who it is for, one thing to learn, what to do after watching), scripting, location and equipment."
                width={960}
                height={1242}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full bg-white outline outline-1 -outline-offset-1 outline-ink/10"
              />
              <figcaption className="custom-p custom-p-sm mt-2 text-pretty text-ink/60">The creator guide</figcaption>
            </figure>
            <figure>
              <LoopingClip
                src={guide.pages}
                poster={guide.poster}
                width={720}
                height={932}
                label="The eight pages of the Base creator guide, shown one after another"
                className="block h-auto w-full bg-white outline outline-1 -outline-offset-1 outline-ink/10"
              />
              <figcaption className="custom-p custom-p-sm mt-2 text-pretty text-ink/60">All eight pages</figcaption>
            </figure>
          </div>
          <p className="custom-p mt-10 text-pretty text-ink/70">
            To keep it going week to week, I also set up a clear editorial calendar for publishing, so every creator knew
            what was going out, when, and on which channel.
          </p>
          <p className="custom-p mt-3 text-pretty text-ink/70">
            It did more than organise the creators. It gave Base’s social media lead a structure for their own work, and a
            clear, shared view to show stakeholders what was planned, what was live, and what was coming next.
          </p>
          <figure className="mt-6">
            <button
              ref={calendarOpenerRef}
              type="button"
              onClick={() => setCalendarOpen(true)}
              aria-label="View the editorial calendar full size"
              className="group block w-full cursor-zoom-in text-left outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <img
                src={calendar.src}
                alt={calendar.alt}
                width={calendar.width}
                height={calendar.height}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full bg-white outline outline-1 -outline-offset-1 outline-ink/10"
              />
              <span
                aria-hidden="true"
                className="mt-2 inline-flex items-center gap-1 bg-ink px-1.5 py-1 font-modernist text-[10px] leading-none font-semibold tracking-[0.1em] whitespace-nowrap text-page uppercase transition-colors duration-200 group-hover:bg-red-600 group-hover:text-light"
              >
                <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
                </svg>
                <span className="tablet:hidden">Tap to enlarge</span>
                <span className="hidden tablet:inline">View full size</span>
              </span>
            </button>
            <figcaption className="custom-p custom-p-sm mt-2 text-pretty text-ink/60">The editorial calendar: two posts a day, each with a time and a format</figcaption>
          </figure>
          <ImageViewer
            image={calendarOpen ? { src: calendar.src, alt: calendar.alt, width: calendar.width, label: 'Editorial calendar' } : null}
            onClose={() => setCalendarOpen(false)}
            returnFocusTo={calendarOpenerRef}
            maxWidth={1400}
            scrollOnPhone
          />
        </SplitSection>
      </section>

      {/* BEFORE / AFTER */}
      <section className="case-study-serif py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="Showing, not telling: before and after">
          <p className="custom-p text-pretty text-ink/70">
            Guides only go so far, so I worked with creators on their own videos, taking each one from what it was to what
            it could be. Alongside that, I produced clean, well-made videos myself to set the bar for the region.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 tablet:grid-cols-3">
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
        <SplitSection title="From experiments to AI-directed films">
          <p className="custom-p text-pretty text-ink/70">
            With the creator network producing steadily, Base’s regional lead wanted to try something new: AI films and short
            videos. I took the idea and ran with it.
          </p>
          <p className="custom-p mt-3 text-pretty text-ink/70">
            The early ones were experiments, testing tools, styles and storytelling to see what held up. Each round got
            sharper. I wrote and directed every concept, produced it with AI video tools, and the films went on to be used in
            Base’s promotional materials across the region.
          </p>
          <div className="mt-8">
            <VideoGallery videos={baseCaseStudy.videos!} orientation="landscape" rounded={0} showDescriptions titleBold bare />
          </div>
        </SplitSection>
      </section>

      {/* THE OUTCOME */}
      <section className="case-study-serif py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="A region with a creative structure">
          <p className="custom-p text-pretty text-ink/70">
            The network went from creators on paper to a steady source of rich, on-brand content. More of it came out of
            the region, it looked and sounded better, and every creator now had a clear creative structure for the work
            they were paid to do.
          </p>
        </SplitSection>
      </section>

      <CaseStudyPager
        prev={{ href: bitgetCaseStudy.href, title: bitgetCaseStudy.title }}
        next={{ href: binanceCaseStudy.href, title: binanceCaseStudy.title }}
      />
    </Layout>
  )
}

export default BaseCaseStudy
