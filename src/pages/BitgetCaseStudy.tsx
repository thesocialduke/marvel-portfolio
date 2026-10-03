import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { TestimonialsSection } from '../components/ui/testimonials-2'
import { FramerCarouselThumbnails } from '../components/ui/framer-thumbnails'
import { useCaseStudyJsonLd } from '../hooks/useCaseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy, site } from '../data/site'

const RED = 'rgb(220 38 38)'

const [, , bitquestPhoto, stocksPhoto] = bitgetCaseStudy.proofSections![0].photos
const [youtubeLivePhoto, twitterSpacePhoto] = bitgetCaseStudy.proofSections![2].photos

const eventCarouselImages = bitgetCaseStudy.gallery!.map((photo, i) => ({
  id: i + 1,
  url: photo.image,
  title: photo.caption ?? '',
}))

// Listing campaigns: logo, headline number (where there is one), and the X posts.
type Listing = {
  logo: string
  ticker: string
  stat?: string
  statLabel?: string
  posts: { url: string; views?: string }[]
}

const listings: Listing[] = [
  {
    logo: '/case-studies/bitget/logo-dogs.png',
    ticker: '$DOGS',
    stat: '2M+',
    statLabel: 'impressions',
    posts: [
      { url: 'https://x.com/BitgetAfrica/status/1825194958535471560', views: '1M' },
      { url: 'https://x.com/BitgetAfrica/status/1854147976123281547', views: '260K' },
      { url: 'https://x.com/BitgetAfrica/status/1826662113152303280', views: '33K' },
      { url: 'https://x.com/BitgetAfrica/status/182766950106574857', views: '41K' },
    ],
  },
  {
    logo: '/case-studies/bitget/logo-paws.jpg',
    ticker: '$PAWS',
    stat: '473K',
    statLabel: 'views across 3 posts',
    posts: [
      { url: 'https://x.com/BitgetAfrica/status/1901519115379937544', views: '196K' },
      { url: 'https://x.com/BitgetAfrica/status/1899372955068399828', views: '115K' },
      { url: 'https://x.com/BitgetAfrica/status/1900511913190072748', views: '162K' },
    ],
  },
  {
    logo: '/case-studies/bitget/logo-pi.png',
    ticker: '$PI',
    stat: '1M+',
    statLabel: 'impressions',
    posts: [{ url: 'https://x.com/BitgetAfrica/status/1891127323723784623', views: '685K' }],
  },
]

const challenges = [
  {
    photo: bitquestPhoto,
    stat: '11.9M+',
    title: '#BitQuest',
    description: 'Total reach for a 7-day gamified campaign that simplified key crypto concepts.',
  },
  {
    photo: stocksPhoto,
    title: 'Stocks vs Crypto Showdown',
  },
]

const communityStats = [
  { value: '1M+', label: 'Views on AMAs, Spaces and YouTube Lives' },
  { value: '0 → 10K', label: 'Followers on a street UGC channel I scripted and edited' },
  { value: '20K', label: 'Users from the ambassador program' },
  { value: '3,500', label: 'Followers gained in one day' },
]

const offlineStats = [
  { value: '84.35%', label: 'CSAT across offline events' },
  { value: '100+', label: 'New users per event, on average' },
]

export function BitgetCaseStudy() {
  useDocumentMeta({
    title: 'Growing Bitget’s Community Across Africa | Case Study | Ndubuisi Marvellous',
    description:
      'How I led social media and community for Bitget across Africa, driving 30M+ impressions and making Bitget Wallet Nigeria’s #1 downloaded crypto app.',
    image: '/case-studies/bitget.jpg',
  })
  useCaseStudyJsonLd({
    path: '/bitget',
    title: 'Growing Bitget’s community across Africa',
    description: bitgetCaseStudy.summary,
    image: '/case-studies/bitget.jpg',
    clientName: 'Bitget',
  })

  return (
    <Layout>
      {/* HERO */}
      <section className="case-study-serif pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="pb-12 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Case study · Bitget Africa</p>
            </div>
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance">Growing Bitget’s community across Africa</h1>
            <p className="custom-p mt-6 max-w-2xl text-ink/70">{bitgetCaseStudy.summary}</p>

            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-ink/15 pt-8 tablet:grid-cols-3">
              <div>
                <h2 className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  30M+
                </h2>
                <p className="custom-p mt-2 text-ink/60">Total impressions</p>
              </div>
              <div>
                <h2 className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  150K+
                </h2>
                <p className="custom-p mt-2 text-ink/60">New followers gained</p>
              </div>
              <div>
                <h2 className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  #1
                </h2>
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
      <section className="case-study-serif pt-10 pb-12 tablet:pt-14 tablet:pb-14 laptop:pt-18 laptop:pb-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-8 tablet:grid-cols-[1.081fr_0.754fr] tablet:gap-4">
              <img
                src="/case-studies/bitget/account-overview.webp"
                alt="X account analytics for Bitget Africa from June 2024 to May 2025, showing 16.4M impressions and a peak of 3,500 new followers in one day"
                width={1600}
                height={1480}
                className="mx-auto block h-auto w-full"
              />
              <img
                src="/case-studies/bitget/instagram-profile.webp"
                alt="Bitget Africa Instagram profile at 10.8K followers, grown from zero"
                width={800}
                height={1061}
                className="mx-auto block h-auto w-full max-w-[18rem] tablet:max-w-none"
              />
            </div>
            <div className="mt-10 grid grid-cols-1 items-center gap-8 tablet:grid-cols-[1.447fr_0.807fr] tablet:gap-4">
              <img
                src="/case-studies/bitget/telegram-stats.webp"
                alt="Bitget Africa Telegram group statistics for 12 to 19 October 2025: 61.1K members and 1.1M messages"
                width={819}
                height={566}
                className="mx-auto block h-auto w-full"
              />
              <img
                src="/case-studies/bitget/youtube-channel.webp"
                alt="Bitget Africa YouTube channel home page, with training sessions, videos and Shorts"
                width={1000}
                height={1239}
                className="mx-auto block h-auto w-full max-w-sm tablet:max-w-none"
              />
            </div>
          </div>
        </Grid>
      </section>

      {/* FEATURED STORY */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-center gap-y-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">01. Featured story</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">When OKX left Nigeria, Bitget took the top spot</h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="custom-h4 custom-h4-bold tracking-[0.06em] uppercase">The moment</p>
                <p className="custom-p mt-2 text-ink/70">
                  OKX announced it was ending operations in Nigeria, leaving a large base of users looking for a new
                  home.
                </p>
              </div>
              <div>
                <p className="custom-h4 custom-h4-bold tracking-[0.06em] uppercase">What I did</p>
                <p className="custom-p mt-2 text-ink/70">
                  Spearheaded social media strategy during the OKX market exit from Nigeria, capitalizing on the
                  vacuum to trend Bitget Wallet and drive it to become the #1 most downloaded crypto app in Nigeria;
                  leaned into trust, safety, and security narrative themes to reduce adoption friction.
                </p>
              </div>
              <div>
                <p className="custom-h4 custom-h4-bold tracking-[0.06em] uppercase">The result</p>
                <p className="custom-p mt-2 text-ink/70">
                  Bitget Wallet became the #1 downloaded crypto app in Nigeria, and “Bitget” trended nationally.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full flex flex-col gap-5 tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            <img
              src="/case-studies/bitget/okx-exit.webp"
              alt="Screenshots of the OKX Nigeria exit trending on X, Bitget Wallet ranked #1 in the Nigerian App Store's Top Charts, and the announcement that Bitget Wallet is Nigeria's #1 downloaded app"
              width={1400}
              height={1111}
              className="block h-auto w-full"
            />
          </div>
        </Grid>
      </section>

      {/* CAMPAIGNS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-end gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">02. Campaigns</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Listings and challenges built to spread</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10">
            <p className="custom-p text-ink/60">
              Each campaign had one job: awareness and follower growth around a moment people already cared about.
            </p>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-3 gap-4 tablet:col-span-6 tablet:col-start-2 tablet:gap-8 laptop:col-span-12 laptop:col-start-2">
            {listings.map((l) => (
              <div key={l.ticker} className="flex flex-col items-start gap-4">
                <img
                  src={l.logo}
                  alt={`${l.ticker} logo`}
                  className="size-16 rounded-full object-cover tablet:size-24 laptop:size-28"
                />
                <div>
                  <h3 className="custom-h4 custom-h4-bold">{l.ticker}</h3>
                  {l.stat && (
                    <p className="custom-p custom-p-sm mt-1 text-ink/60">
                      <span className="font-bold text-ink">{l.stat}</span> {l.statLabel}
                    </p>
                  )}
                </div>
                <ul className="flex flex-col gap-2 border-t border-ink/15 pt-3">
                  {l.posts.map(({ url, views }, i) => (
                    <li key={i}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="custom-p custom-p-sm underline underline-offset-4 outline-none transition-opacity hover:opacity-70"
                      >
                        X post {i + 1} ↗
                      </a>
                      {views && <span className="custom-p custom-p-sm ml-2 text-ink/50">{views} views</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Grid>
        <Grid className="mt-12">
          <div className="col-span-full grid grid-cols-1 gap-6 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-12 laptop:col-start-2">
            {challenges.map((c) => (
              <div key={c.photo.image} className="flex flex-col gap-4">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.photo.image} alt={c.photo.caption ?? ''} className="size-full object-cover" />
                </div>
                {c.stat && <h3 className="custom-h1 custom-h1-bold text-[2rem]">{c.stat}</h3>}
                <div>
                  <p className="custom-h4 custom-h4-bold">{c.title}</p>
                  {c.description && <p className="custom-p mt-1 text-ink/60">{c.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* COMMUNITY & EDUCATION */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="gap-y-8 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-10 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">03. Community &amp; education</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 max-w-3xl text-balance">
              The fastest-growing Telegram community at Bitget Africa
            </h2>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-2 gap-6 border-t border-ink/15 pt-8 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-4 laptop:col-span-12 laptop:col-start-2">
            {communityStats.map((stat, i) => (
              <div key={i}>
                <h3 className="custom-h1 custom-h1-bold text-[2.25rem]">{stat.value}</h3>
                <p className="custom-p mt-2 text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Grid>
        <Grid className="mt-10">
          <div className="col-span-full grid grid-cols-1 gap-5 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-12 laptop:col-start-2">
            {[youtubeLivePhoto, twitterSpacePhoto].map((photo) => (
              <div key={photo.image} className="relative aspect-[4/3] overflow-hidden">
                <img src={photo.image} alt={photo.caption ?? ''} className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                <p className="custom-p custom-h4-invert absolute inset-x-0 bottom-0 p-4">{photo.caption}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* TESTIMONIAL */}
      <section className="case-study-serif py-2 tablet:py-4 laptop:py-6">
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

      {/* EVENTS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-end gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-7 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">04. Events</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Offline events &amp; activations</h2>
          </div>
          <div className="col-span-full flex flex-nowrap gap-8 tablet:col-span-6 tablet:col-start-2 laptop:col-span-5 laptop:col-start-9 laptop:justify-self-end">
            {offlineStats.map((stat, i) => (
              <div key={i}>
                <h3 className="custom-h1 custom-h1-bold text-[2rem]" style={{ color: RED }}>{stat.value}</h3>
                <p className="custom-p mt-1 text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      <section className="case-study-serif pb-12 tablet:pb-14 laptop:pb-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <FramerCarouselThumbnails images={eventCarouselImages} />
          </div>
        </Grid>
      </section>

      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid>
          <div className="col-span-full grid grid-cols-1 gap-x-6 gap-y-5 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-3 laptop:col-span-12 laptop:col-start-2">
            {bitgetCaseStudy.gallery!.map((photo) => {
              const [eventName, ...rest] = photo.caption!.split(', ')
              return (
                <div key={photo.image} className="flex flex-col gap-1 border-t border-ink/15 pt-4">
                  <p className="custom-h4 custom-h4-bold">{eventName}</p>
                  <p className="custom-p custom-p-sm tracking-wide text-ink/50 uppercase">{rest.join(' · ')}</p>
                </div>
              )
            })}
            <div className="flex flex-col gap-1 border-t border-ink/15 pt-4">
              <p className="custom-h4 custom-h4-bold">...and more</p>
            </div>
          </div>
        </Grid>
      </section>

      {/* NEXT / PREVIOUS / CTA */}
      <section className="case-study-serif border-t border-ink/15 py-12 tablet:py-14 laptop:py-18">
        <Grid className="items-center gap-y-8">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Previous case study</p>
            <Link
              to={binanceCaseStudy.href}
              className="custom-h2 relative mt-2 inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              ← {binanceCaseStudy.title}
            </Link>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-3 laptop:col-start-7">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Next case study</p>
            <Link
              to={baseCaseStudy.href}
              className="custom-h2 relative mt-2 inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              {baseCaseStudy.title} →
            </Link>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10 laptop:justify-self-end">
            <ButtonLink to={site.bookingUrl} external beam>
              Book a call
              <svg aria-hidden="true" className="size-[1.1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </ButtonLink>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}

export default BitgetCaseStudy
