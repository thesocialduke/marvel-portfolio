import { useRef, useState } from 'react'
import { CaseStudyPager } from '../components/CaseStudyPager'
import { Grid } from '../components/Grid'
import { ImageStrip, type StripImage } from '../components/ImageStrip'
import { ImageViewer } from '../components/ImageViewer'
import { Layout } from '../components/Layout'
import { LetsTalkPanel } from '../components/LetsTalkPanel'
import { TestimonialsSection } from '../components/ui/testimonials-2'
import { JsonLd } from '../components/JsonLd'
import { EventVideos, type EventVideo } from '../components/EventVideos'
import { caseStudyJsonLd } from '../data/caseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from '../data/site'

const RED = 'rgb(220 38 38)'

const analyticsImages: StripImage[] = [
  {
    src: '/case-studies/bitget/account-overview.webp',
    alt: 'X account analytics for Bitget Africa from June 2024 to May 2025, showing 16.4M impressions and a peak of 3,500 new followers in one day',
    width: 1600,
    height: 1480,
    label: 'X analytics',
  },
  {
    src: '/case-studies/bitget/instagram-profile.webp',
    alt: 'Bitget Africa Instagram profile at 10.8K followers, grown from zero',
    width: 800,
    height: 1061,
    label: 'Instagram',
  },
  {
    src: '/case-studies/bitget/telegram-stats.webp',
    alt: 'Bitget Africa Telegram group statistics for 12 to 19 October 2025: 61.1K members and 1.1M messages',
    width: 819,
    height: 566,
    label: 'Telegram',
  },
  {
    src: '/case-studies/bitget/youtube-channel.webp',
    alt: 'Bitget Africa YouTube channel home page, with training sessions, videos and Shorts',
    width: 1000,
    height: 1239,
    label: 'YouTube',
  },
]

const corePrograms = [
  {
    stat: '20,000+',
    statLabel: 'New users from ambassadors',
    title: 'Ambassador program',
    body: 'I built the Bitget Africa ambassador program from scratch: recruiting, training and incentivizing advocates.',
  },
  {
    stat: '1M+',
    statLabel: 'Views on live programming',
    title: 'Education programming',
    body: 'AMAs, product LIVE sessions, audio spaces and quizzes that help new users activate. Hosted across X, YouTube Live & Telegram',
  },
  {
    stat: '60%+',
    statLabel: 'New-member retention',
    title: 'Gamified engagement',
    body: 'Challenges, mini-games and recurring programs that sustain 3 to 5% weekly community growth.',
  },
  {
    stat: '70+',
    statLabel: 'Creator and partner network',
    title: 'B2B relationships across Africa',
    body: 'Creators, KOLs, universities, grassroots communities, affiliates, P2P traders and community leaders, with clear paths to advocacy, UGC and cross-community growth.',
  },
  {
    stat: '#1',
    statLabel: 'Ranking on Google',
    title: 'SEO and educational content',
    body: 'Community-led articles on crypto-related user education, ranking #1 on Google in Nigeria and Kenya and on page one in Ethiopia.',
  },
  {
    stat: 'Loop',
    statLabel: 'Community to product and support',
    title: 'Product feedback loop',
    body: 'Recurring community feedback becomes structured insight for product and support teams, covering friction points and emerging trends.',
  },
]

// Community operations map: how the B2C channels and B2B relationships were run.
// Alt text and caption only state what the image itself shows.
const communityOps = {
  src: '/case-studies/bitget/ndubuisi-marvellous-bitget-africa-community-operations-1280.webp',
  srcLarge: '/case-studies/bitget/ndubuisi-marvellous-bitget-africa-community-operations-2400.webp',
  width: 1280,
  height: 913,
  alt: 'Bitget Africa community operations map by Ndubuisi Marvellous',
  description:
    'Bitget Africa community operations map by Ndubuisi Marvellous, Head of Social Media and Community: B2C channels (Telegram 60K with three regional moderators, X and Instagram 95K+, education, collaborations, community events) and B2B relationships (Bitget Builders ambassadors, 100+ KOLs and creators, 200+ P2P merchants, partner events).',
  caption:
    'How I ran community operations for Bitget Africa. Communications and content covered both sides: retail users (B2C) on Telegram, X, Instagram, education programming, collaborations and community events, and direct relationships (B2B) with Bitget Builders in Francophone Africa, Ethiopia, Ghana and Kenya, 100+ KOLs and creators, 200+ P2P merchants and partner events across Nigeria, Kenya, Ghana, Ethiopia, South Africa and Francophone Africa.',
}

const communityOpsLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  name: 'Bitget Africa community operations map',
  contentUrl: `https://ndubuisimarvellous.com${communityOps.srcLarge}`,
  thumbnailUrl: `https://ndubuisimarvellous.com${communityOps.src}`,
  width: 2400,
  height: 1711,
  caption: communityOps.caption,
  description: communityOps.description,
  about: ['Community operations', 'Community management', 'Ambassador programs', 'KOL partnerships', 'Telegram community moderation'],
  creator: { '@type': 'Person', name: 'Ndubuisi Marvellous', url: 'https://ndubuisimarvellous.com/' },
  creditText: 'Ndubuisi Marvellous',
}

// Event highlight videos from the Bitget Africa YouTube channel ("Bitget Africa
// Community Events" playlist). Names and places come from the video titles.
const eventVideosPlaylist = 'https://www.youtube.com/playlist?list=PLWYmyziiYzHujVt9R6hIOkUhiy1b0EZ6d'
const eventVideoThumbs = '/case-studies/bitget/events-video/bitget-africa-'
const eventVideos: (EventVideo & { uploadDate: string; seconds: number })[] = [
  { id: 'PM5CGcpZfbI', name: 'P2P Merchant Connect', place: 'Lagos', youtubeTitle: 'Bitget P2P Merchant Connect, Lagos', thumb: `${eventVideoThumbs}p2p-merchant-connect-lagos.webp`, length: '2:42', seconds: 162, uploadDate: '2026-03-31' },
  { id: 'KZxOoFnJo0o', name: 'Merchant Meetup', place: 'Nairobi', youtubeTitle: 'Bitget Merchant Meetup, Nairobi', thumb: `${eventVideoThumbs}merchant-meetup-nairobi.webp`, length: '1:01', seconds: 61, uploadDate: '2026-02-22' },
  { id: '456BQ_CZwBs', name: 'Crypto Experience Month 2025', place: 'University of Nairobi', youtubeTitle: 'Crypto Experience Month 2025, University of Nairobi', thumb: `${eventVideoThumbs}crypto-experience-month-2025-university-of-nairobi.webp`, length: '1:33', seconds: 93, uploadDate: '2025-09-17' },
  { id: 'tq-zxHfCquA', name: 'Ethiopia Blockchain Week', place: 'Ethiopia', youtubeTitle: 'Ethiopia Blockchain Week Highlight', thumb: `${eventVideoThumbs}ethiopia-blockchain-week.webp`, length: '1:35', seconds: 95, uploadDate: '2025-09-17' },
  { id: 'cn6WVkI5-qI', name: 'El Clasico Watch Party', place: 'Lagos', youtubeTitle: 'Bitget Africa El Clasico Watch Party, Lagos, Nigeria', thumb: `${eventVideoThumbs}el-clasico-watch-party-lagos.webp`, length: '1:13', seconds: 73, uploadDate: '2025-05-15' },
  { id: '5GAKqdkkV-g', name: 'Community Meetup', place: 'Nairobi', youtubeTitle: 'Bitget Community Meetup, Nairobi Highlight', thumb: `${eventVideoThumbs}community-meetup-nairobi.webp`, length: '1:59', seconds: 119, uploadDate: '2025-05-11' },
]

// Lets search engines list the highlights as videos tied to this case study.
const eventVideosLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Selected Bitget Africa community event highlights',
  description: 'A selection of highlight videos from Bitget Africa community events, meetups and activations.',
  itemListElement: eventVideos.map((video, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'VideoObject',
      name: video.youtubeTitle,
      description: `Highlight video from ${video.youtubeTitle.replace(/ Highlight$/, '')}, a Bitget Africa community event.`,
      thumbnailUrl: [`https://ndubuisimarvellous.com${video.thumb}`, `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`],
      uploadDate: video.uploadDate,
      duration: `PT${Math.floor(video.seconds / 60)}M${video.seconds % 60}S`,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      publisher: { '@type': 'Organization', name: 'Bitget Africa' },
    },
  })),
}

// Independent press coverage of one of the events: a news article that names me and
// describes the session I led. Linked under the event photos and described for search
// engines so the article is tied to my name.
const pressMention = {
  url: 'https://techpression.com/bitget-hosts-community-education-day-in-lagos-eyes-africas-crypto-future/',
  publication: 'Techpression',
  headline: 'Bitget Hosts Community Education Day in Lagos, eyes Africa’s crypto future',
  date: 'Sept 2025',
}

const pressMentionLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Bitget Hosts Community Education Day in Lagos, eyes Africa’s crypto future',
  url: pressMention.url,
  datePublished: '2025-09-21',
  author: { '@type': 'Person', name: 'Abimbola Samuel' },
  publisher: { '@type': 'Organization', name: 'Techpression', url: 'https://techpression.com/' },
  about: {
    '@type': 'Event',
    name: 'Bitget Community Education Day',
    startDate: '2025-09-20',
    location: {
      '@type': 'Place',
      name: 'Imperial Hall, Lilygate Hotel',
      address: { '@type': 'PostalAddress', streetAddress: 'Lekki Phase 1', addressLocality: 'Lagos', addressCountry: 'NG' },
    },
    organizer: { '@type': 'Organization', name: 'Bitget' },
  },
  mentions: {
    '@type': 'Person',
    name: 'Ndubuisi Marvellous',
    alternateName: 'Marvellous Ndubuisi',
    jobTitle: 'Head of Social Media & Community, Africa',
    url: 'https://ndubuisimarvellous.com/',
  },
}

export function BitgetCaseStudy() {
  const [opsOpen, setOpsOpen] = useState(false)
  const opsOpenerRef = useRef<HTMLButtonElement>(null)

  useDocumentMeta({
    title: 'Bitget Africa Community Growth Case Study | Ndubuisi Marvellous',
    description:
      'How I led Bitget’s social media and community across Africa: 40M+ organic views and impressions, and Bitget Wallet became Nigeria’s #1 downloaded crypto app.',
    image: '/case-studies/og-bitget.jpg',
    ogType: 'article',
  })
  const caseStudyLd = caseStudyJsonLd({
    path: '/bitget',
    title: 'Building and scaling Bitget Africa’s community ecosystem',
    description: bitgetCaseStudy.summary,
    image: '/case-studies/bitget.webp',
    clientName: 'Bitget',
  })

  return (
    <Layout>
      <JsonLd data={caseStudyLd} />
      {/* HERO */}
      <section className="case-study-serif pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="pb-12 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Case study · Bitget Africa</p>
            </div>
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance">Building and scaling Bitget Africa’s community ecosystem</h1>
            <p className="custom-p mt-6 max-w-2xl text-pretty text-ink/70">{bitgetCaseStudy.summary}</p>

            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-ink/15 pt-8 tablet:grid-cols-3">
              <div>
                <p className="custom-h1 custom-h1-bold tabular-nums" style={{ color: RED }}>
                  40M+
                </p>
                <p className="custom-p mt-2 text-ink/60">Organic views and impressions generated</p>
              </div>
              <div>
                <p className="custom-h1 custom-h1-bold tabular-nums" style={{ color: RED }}>
                  150K+
                </p>
                <p className="custom-p mt-2 text-ink/60">Followers and members gained</p>
              </div>
              <div>
                <p className="custom-h1 custom-h1-bold tabular-nums" style={{ color: RED }}>
                  #1
                </p>
                <p className="custom-p mt-2 text-ink/60">Downloaded crypto app in Nigeria (Bitget Wallet)</p>
              </div>
            </div>
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
                <p className="custom-h4 custom-h4-bold mt-1">{bitgetCaseStudy.roleTitle}</p>
              </div>
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Region</p>
                <p className="custom-h4 custom-h4-bold mt-1">East, West and South Africa</p>
              </div>
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Channels</p>
                <p className="custom-h4 custom-h4-bold mt-1">X, Telegram, Instagram, YouTube, UGC, IRL events</p>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      {/* ACCOUNT ANALYTICS */}
      <section className="case-study-serif pt-10 pb-12 tablet:pt-12 tablet:pb-14 laptop:pt-14 laptop:pb-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <ImageStrip images={analyticsImages} />
          </div>
        </Grid>
      </section>

      {/* FEATURED STORY (dark band) */}
      <section className="on-dark case-study-serif py-12 tablet:py-14 laptop:py-24" style={{ background: 'var(--color-graphite)' }}>
        <Grid className="items-center gap-y-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] uppercase" style={{ color: 'rgb(231 230 226 / 0.8)' }}>
                01. Featured story
              </p>
            </div>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance" style={{ color: 'var(--color-page)' }}>
              Turning a market exit into a growth opportunity
            </h2>
            <div className="mt-8 border-t" style={{ borderColor: 'rgb(231 230 226 / 0.2)' }}>
              <div className="border-b py-5" style={{ borderColor: 'rgb(231 230 226 / 0.2)' }}>
                <p className="custom-p" style={{ color: 'var(--color-page)' }}>
                  OKX announced it was ending operations in Nigeria, leaving many users looking for a new home.
                </p>
              </div>
              <div className="border-b py-5" style={{ borderColor: 'rgb(231 230 226 / 0.2)' }}>
                <p className="custom-p custom-p-sm tracking-[0.1em] uppercase" style={{ color: 'rgb(231 230 226 / 0.6)' }}>
                  What I did
                </p>
                <p className="custom-p mt-2" style={{ color: 'var(--color-page)' }}>
                  I led social strategy through the exit and got Bitget Wallet trending while users chose where to go
                  next. The narrative centered on trust, safety and security.
                </p>
              </div>
              <div className="border-b py-5" style={{ borderColor: 'rgb(231 230 226 / 0.2)' }}>
                <p className="custom-p custom-p-sm tracking-[0.1em] uppercase" style={{ color: 'rgb(231 230 226 / 0.6)' }}>
                  The result
                </p>
                <p className="custom-p mt-2" style={{ color: 'var(--color-page)' }}>
                  Bitget Wallet became the most downloaded crypto app in Nigeria, and “Bitget” trended nationally.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full flex flex-col gap-5 tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            <img loading="lazy" decoding="async"
              src="/case-studies/bitget/okx-exit.webp"
              alt="Screenshots of the OKX Nigeria exit trending on X, Bitget Wallet ranked #1 in the Nigerian App Store's Top Charts, and the announcement that Bitget Wallet is Nigeria's #1 downloaded app"
              width={1400}
              height={1111}
              className="block h-auto w-full"
            />
          </div>
        </Grid>
      </section>

      {/* HOW IT'S RUN: community operations map */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-10 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">02. How it’s run</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">How I built the community operating model</h2>
            <p className="custom-p mt-4 max-w-3xl text-pretty text-ink/60">
              I built a regional operating model that connected two distinct audiences: retail users who needed
              education, support, and engagement, and ecosystem stakeholders who helped extend Bitget’s reach across
              African markets.
            </p>
            <p className="custom-p mt-3 max-w-3xl text-pretty text-ink/60">
              A shared communications and content function supported both sides, while each audience had its own
              engagement channels, programs, and relationship needs.
            </p>
          </div>
        </Grid>
        <Grid>
          <figure className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <button
              ref={opsOpenerRef}
              type="button"
              onClick={() => setOpsOpen(true)}
              aria-label="View the community operations map full size"
              aria-describedby="community-ops-description"
              className="group relative block w-full cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <img
                src={communityOps.src}
                srcSet={`${communityOps.src} 1280w, ${communityOps.srcLarge} 2400w`}
                sizes="(min-width: 1024px) 82vw, 100vw"
                width={communityOps.width}
                height={communityOps.height}
                alt={communityOps.alt}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
              {/* Visible cue that the map opens larger (phones have no zoom cursor). */}
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-[8%] inline-flex items-center gap-1 bg-ink px-1.5 py-1 font-modernist text-[10px] leading-none font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition-colors duration-200 group-hover:bg-red-600 group-focus-visible:bg-red-600 tablet:right-5"
                style={{ color: 'var(--color-page)' }}
              >
                <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
                </svg>
                <span className="tablet:hidden">Tap to enlarge</span>
                <span className="hidden tablet:inline">View full size</span>
              </span>
            </button>
            <p id="community-ops-description" className="sr-only">
              {communityOps.description}
            </p>
          </figure>
        </Grid>
        <JsonLd data={communityOpsLd} />
        <ImageViewer
          image={opsOpen ? { src: communityOps.srcLarge, alt: communityOps.alt, width: 2400, label: 'Community operations map' } : null}
          onClose={() => setOpsOpen(false)}
          returnFocusTo={opsOpenerRef}
          maxWidth={1280}
          scrollOnPhone
        />
      </section>

      {/* CORE PROGRAMS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-10 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">03. The programs</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Core programs</h2>
            <p className="custom-p mt-4 max-w-xl text-ink/60">Six programs sit behind the numbers at the top of this page.</p>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-1 gap-5 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-12 laptop:col-start-2 laptop:grid-cols-3">
            {corePrograms.map((program) => (
              <div key={program.title} className="flex flex-col bg-hyacinth/5 p-6 tablet:p-8">
                <p className="custom-h1 custom-h1-bold text-[2.75rem] normal-case tabular-nums" style={{ color: RED }}>
                  {program.stat}
                </p>
                <p className="custom-p custom-p-sm mt-3 tracking-[0.1em] uppercase">{program.statLabel}</p>
                <p className="custom-h4 custom-h4-bold mt-6">{program.title}</p>
                <p className="custom-p mt-2 text-ink/60">{program.body}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* EVENTS */}
      <section className="case-study-serif pt-12 tablet:pt-14 laptop:pt-24">
        <Grid className="pb-8 tablet:pb-10">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">04. Events</p>
            {/* Same header pattern as sections 02 and 03 (label, heading, one muted line), with
                the satisfaction score in bold inside that line, the way the campaign stats above
                read. The heading stays on one line; it shrinks slightly on narrow phones to fit. */}
            <h2
              className="custom-h2 custom-h2-bold custom-h2-lg mt-4 whitespace-nowrap [--fit:5.6vw] tablet:[--fit:4.6vw]"
              style={{ fontSize: 'min(calc(var(--h2-size) * 1.2), var(--fit))' }}
            >
              Offline events &amp; activations
            </h2>
            <p className="custom-p mt-4 max-w-xl text-pretty text-ink/60">
              Attendees rated them <span className="font-bold tabular-nums" style={{ color: RED }}>94.35%</span> on satisfaction (CSAT).
            </p>
          </div>
        </Grid>
      </section>

      <section className="case-study-serif pb-12 tablet:pb-14 laptop:pb-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            {/* Event highlight videos */}
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="inline-block size-2 shrink-0" style={{ background: RED }} />
                <h3 className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Event highlights</h3>
              </div>
              <a
                href={eventVideosPlaylist}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm underline underline-offset-4 outline-none transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-red-600"
              >
                Watch all on YouTube ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="custom-p custom-p-sm mt-2 text-pretty text-ink/60">
              Just a few of the many events and activations.
            </p>
            <div className="mt-5">
              <EventVideos videos={eventVideos} />
            </div>
            <JsonLd data={eventVideosLd} />

            {/* Press coverage of one of the events. The arrow sits at the end of the
                headline (not in a separate box) so it reads as one link that leaves the site. */}
            <a
              href={pressMention.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 block outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4 focus-visible:ring-offset-page mb-14 tablet:mb-16 laptop:mt-12 laptop:mb-24"
            >
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="inline-block size-2 shrink-0" style={{ background: RED }} />
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">In the press</p>
              </div>
              <p className="custom-h4 custom-h4-bold mt-3 max-w-3xl text-balance">
                {pressMention.headline}
                <svg
                  aria-hidden="true"
                  className="ml-2 inline-block size-[0.9em] -translate-y-[0.1em] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-[0.25em] motion-reduce:transition-none"
                  style={{ color: RED }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="square"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </p>
              <p className="custom-p custom-p-sm mt-3 text-ink/60">
                {pressMention.publication} · {pressMention.date}
                <span className="sr-only"> (opens in a new tab)</span>
              </p>
            </a>
            <JsonLd data={pressMentionLd} />
          </div>
        </Grid>
      </section>


      {/* TESTIMONIAL */}
      <section className="case-study-serif pt-2 pb-10 tablet:pt-4 tablet:pb-12 laptop:pt-6 laptop:pb-14">
        <Grid>
          <div className="col-span-full px-6 tablet:col-span-6 tablet:col-start-2 tablet:px-12 laptop:col-span-12 laptop:col-start-2">
            <TestimonialsSection
              quote={bitgetCaseStudy.testimonial!.quote}
              name={bitgetCaseStudy.testimonial!.name}
              role={bitgetCaseStudy.testimonial!.role}
              avatarSrc="/testimonials/aka-leung.jpg?v=2"
              avatarAlt={bitgetCaseStudy.testimonial!.name}
              avatarFallback={bitgetCaseStudy.testimonial!.name.charAt(0)}
            />
          </div>
        </Grid>
      </section>

      <LetsTalkPanel />


      <CaseStudyPager
        prev={{ href: binanceCaseStudy.href, title: binanceCaseStudy.title }}
        next={{ href: baseCaseStudy.href, title: baseCaseStudy.title }}
      />
    </Layout>
  )
}

export default BitgetCaseStudy
