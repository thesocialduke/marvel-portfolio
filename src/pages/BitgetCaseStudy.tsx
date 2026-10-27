import { useEffect, useRef, useState } from 'react'
import { CaseStudyPager } from '../components/CaseStudyPager'
import { Grid } from '../components/Grid'
import { ImageStrip, type StripImage } from '../components/ImageStrip'
import { ImageViewer } from '../components/ImageViewer'
import { Layout } from '../components/Layout'
import { TestimonialsSection } from '../components/ui/testimonials-2'
import { JsonLd } from '../components/JsonLd'
import { EventVideos, type EventVideo } from '../components/EventVideos'
import { Reveal } from '../components/Reveal'
import { SplitSection } from '../components/SplitSection'
import { caseStudyJsonLd } from '../data/caseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { cn } from '../lib/utils'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from '../data/site'


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
    stat: '20K+',
    statLabel: 'New users from',
    title: 'Ambassador program',
    body: 'I built the Bitget Africa ambassador program from scratch: recruiting, training and incentivizing advocates.',
  },
  {
    stat: '1M+',
    statLabel: 'Views on live',
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
    statLabel: 'Google ranking',
    title: 'For SEO-driven educational content',
    body: 'Community-led articles on crypto-related user education, ranking #1 on Google in Nigeria and Kenya and on page one in Ethiopia.',
  },
  {
    stat: 'Loop',
    statLabel: 'Community to product and support',
    title: 'Product feedback loop',
    body: 'Recurring community feedback becomes structured insight for product and support teams, covering friction points and emerging trends.',
  },
]

// OKX exit proof, cropped from one collage into three shots shown side by side.
const okxShotsDir = '/case-studies/bitget/okx/ndubuisi-marvellous-bitget-okx-'
const okxShots = [
  {
    src: `${okxShotsDir}trending.webp`,
    width: 492,
    height: 552,
    alt: 'X Trending stories with “OKX Ends Nigerian Operations, Users Face Uncertainty” highlighted, shown with the Bitget logo',
    caption: 'The OKX exit trending on X',
  },
  {
    src: `${okxShotsDir}app-store.webp`,
    width: 518,
    height: 537,
    alt: 'Nigerian App Store Top Charts with Bitget Wallet ranked #1 in Free Apps overall and in Finance',
    caption: '#1 in the App Store, overall and Finance',
  },
  {
    src: `${okxShotsDir}wallet-1.webp`,
    width: 868,
    height: 523,
    alt: 'Bitget Wallet announcement: Nigeria’s #1 downloaded app, #1 in App Store All Apps and Finance, #5 in Google Play Finance',
    caption: 'Bitget Wallet: Nigeria’s #1 downloaded app',
  },
]

// The growth levers behind the 10,000-followers-a-month target, in the order they were added.
const growthLevers = [
  { title: 'KOL partnerships', body: 'Partnered with KOLs to push our campaigns to audiences we couldn’t reach alone.' },
  { title: 'Organic campaigns and giveaways', body: 'Small, steady campaigns and incentives, the format crypto audiences respond to most.' },
  { title: 'Riding the trend', body: 'When a token or topic was trending across the region, I found the best way to bring it onto Bitget’s pages.' },
  { title: 'Business development', body: 'Worked directly with our business developer, learning BD and KOL management along the way.' },
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

// Education: live sessions I hosted on the Bitget Africa YouTube channel (market updates,
// VIP and product sessions), and the best-performing #BitQuest learn & earn post on X.
const eduThumbs = '/case-studies/bitget/education/ndubuisi-marvellous-bitget-live-'
const liveSessions: (EventVideo & { uploadDate: string; seconds: number })[] = [
  { id: 'cxpAgjk4avw', name: 'What Is the NFP Report and Why It Matters', place: 'LIVE market updates', youtubeTitle: 'What Is the NFP Report and Why It Matters', thumb: `${eduThumbs}nfp-report-market-update-3741.webp`, length: '43:11', seconds: 2591, uploadDate: '2025-11-05' },
  { id: 'HJ1z1Z8zsbY', name: 'Gold, Forex & CFD Markets on Bitget', place: 'Product education', youtubeTitle: 'Gold, Forex & CFD Markets on Bitget', thumb: `${eduThumbs}gold-forex-cfd-markets.webp`, length: '43:33', seconds: 2613, uploadDate: '2026-01-09' },
  { id: 'IbBaE9aMHqM', name: 'VIP Privileges & Smart Investing', place: 'VIP partner sessions', youtubeTitle: 'VIP Privileges & Smart Investing in 2026', thumb: `${eduThumbs}vip-privileges-smart-investing.webp`, length: '32:47', seconds: 1967, uploadDate: '2026-05-11' },
  { id: 'eJyZ1nSu2ag', name: 'Becoming an Institutional Merchant on Bitget P2P', place: 'P2P merchant onboarding', youtubeTitle: 'Becoming An Institutional Merchant On Bitget P2P', thumb: `${eduThumbs}institutional-merchant-bitget-p2p.webp`, length: '39:35', seconds: 2375, uploadDate: '2026-04-10' },
  { id: 'bBXalmHFKso', name: 'Beginners Guide to US Stocks Futures', place: 'Product education', youtubeTitle: 'Beginners Guide to US Stocks Futures Trading', thumb: `${eduThumbs}us-stocks-futures-guide.webp`, length: '31:54', seconds: 1914, uploadDate: '2026-05-01' },
  { id: 'mun02c-qnVg', name: 'CFD Trading for Beginners', place: 'Product education', youtubeTitle: 'CFD (Contract For Difference) Trading For Beginners', thumb: `${eduThumbs}cfd-trading-for-beginners.webp`, length: '58:48', seconds: 3528, uploadDate: '2026-05-21' },
]
const liveSessionsUrl = 'https://www.youtube.com/@BitgetAfrica/streams'

// Short explainer videos presented by a KOL on the Bitget Africa channel. I wrote the scripts
// and directed them.
const explainerThumbs = '/case-studies/bitget/education/bitget-africa-explainer-'
const explainers: (EventVideo & { uploadDate: string; seconds: number })[] = [
  { id: '5jTw79SRsIw', name: 'Trade Gold, Forex and Commodities on Bitget TradFi', place: 'Product education', youtubeTitle: 'Trade Gold, Forex and Commodities on Bitget TradFi', thumb: `${explainerThumbs}trade-gold-forex-commodities-tradfi.webp`, length: '6:12', seconds: 372, uploadDate: '2026-01-15' },
  { id: 'NWgGdb_uTgw', name: 'Introduction to Bitget Spot Auto Invest', place: 'Product education', youtubeTitle: 'Introduction To Bitget Spot Auto Invest', thumb: `${explainerThumbs}spot-auto-invest.webp`, length: '1:42', seconds: 102, uploadDate: '2025-11-10' },
  { id: '1BIzUYiFx9c', name: 'How to Invest in US Stocks from Africa', place: 'Product education', youtubeTitle: 'How to Invest in US Stocks from Africa (No Foreign Broker Needed!)', thumb: `${explainerThumbs}invest-in-us-stocks-from-africa.webp`, length: '2:48', seconds: 168, uploadDate: '2026-07-06' },
  { id: 'P0aKk7HJQsM', name: 'How to Stay Safe on P2P in Nigeria', place: 'User safety', youtubeTitle: 'How To Stay Safe On P2P In Nigeria', thumb: `${explainerThumbs}stay-safe-on-p2p-nigeria.webp`, length: '1:35', seconds: 95, uploadDate: '2025-12-02' },
  { id: 'BppKcWTiJL8', name: 'Market Cap, Liquidity, Spread, Slippage & Volume Explained', place: 'Crypto basics', youtubeTitle: 'Market Cap, Liquidity, Spread, Slippage & Volume Explained (Beginner’s Guide)', thumb: `${explainerThumbs}market-cap-liquidity-spread-slippage-volume.webp`, length: '2:40', seconds: 160, uploadDate: '2026-03-04' },
  { id: 'uqYr5i_NYBc', name: 'Early Access to OpenAI Pre-IPO on Bitget', place: 'Product launch', youtubeTitle: 'Eary Access To OpenAI Pre-IPO on Bitget', thumb: `${explainerThumbs}openai-pre-ipo-early-access.webp`, length: '3:04', seconds: 184, uploadDate: '2026-05-12' },
]
const explainersUrl = 'https://www.youtube.com/@BitgetAfrica/videos'

const explainersLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bitget Africa creator-led explainer videos, with scripting and creative direction contributed by Ndubuisi Marvellous',
  itemListElement: explainers.slice(0, 4).map((video, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'VideoObject',
      name: video.youtubeTitle,
      description: `Bitget Africa ${video.place.toLowerCase()} explainer made with a Ghanaian creator; Ndubuisi Marvellous contributed to scripting and creative direction.`,
      thumbnailUrl: `https://ndubuisimarvellous.com${video.thumb}`,
      uploadDate: video.uploadDate,
      duration: `PT${Math.floor(video.seconds / 60)}M${video.seconds % 60}S`,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      publisher: { '@type': 'Organization', name: 'Bitget Africa' },
      director: { '@type': 'Person', name: 'Ndubuisi Marvellous', url: 'https://ndubuisimarvellous.com/' },
    },
  })),
}

const liveSessionsLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bitget Africa live education sessions hosted by Ndubuisi Marvellous',
  itemListElement: liveSessions.slice(0, 4).map((video, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'VideoObject',
      name: video.youtubeTitle,
      description: `Bitget Africa live session (${video.place.toLowerCase()}) hosted by Ndubuisi Marvellous, Head of Social Media and Community, Africa.`,
      thumbnailUrl: `https://ndubuisimarvellous.com${video.thumb}`,
      uploadDate: video.uploadDate,
      duration: `PT${Math.floor(video.seconds / 60)}M${video.seconds % 60}S`,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      publisher: { '@type': 'Organization', name: 'Bitget Africa' },
      actor: { '@type': 'Person', name: 'Ndubuisi Marvellous', url: 'https://ndubuisimarvellous.com/' },
    },
  })),
}

const seoProof = {
  image: '/case-studies/bitget/education/bitget-africa-seo-articles-google-ranking-nigeria-kenya-ethiopia.webp',
  width: 1045,
  height: 1090,
  alt: 'Google search results showing Bitget blog articles ranking: How to Buy Crypto via P2P Using OPay in 2026 (Nigeria), How to Buy Crypto in Kenya with M-Pesa on Bitget P2P (Kenya), and How to Buy Crypto in Ethiopia Using Telebirr on Bitget P2P (Ethiopia).',
  articles: [
    { country: 'Nigeria', title: 'How to Buy Crypto via P2P Using OPay' },
    { country: 'Kenya', title: 'How to Buy Crypto in Kenya with M-Pesa on Bitget P2P' },
    { country: 'Ethiopia', title: 'How to Buy Crypto in Ethiopia Using Telebirr on Bitget P2P' },
  ],
}

const seoProofLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  name: 'Bitget Africa SEO articles ranking on Google in Nigeria, Kenya and Ethiopia',
  contentUrl: `https://ndubuisimarvellous.com${seoProof.image}`,
  width: seoProof.width,
  height: seoProof.height,
  description: seoProof.alt,
  creator: { '@type': 'Person', name: 'Ndubuisi Marvellous', url: 'https://ndubuisimarvellous.com/' },
}

const bitquestPost = {
  url: 'https://x.com/BitgetAfrica/status/1950285812454875544',
  image: '/case-studies/bitget/education/bitget-africa-bitquest-p2p-quiz-x-post.webp',
  width: 1086,
  height: 1836,
  alt: 'Bitget Africa post on X, 29 July 2025: Win $500 USDT from the #BitQuest quiz on Bitget P2P, quoting the launch of the #BitQuest learn and earn challenge. 352 likes and 223 replies.',
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
  itemListElement: eventVideos.slice(0, 4).map((video, i) => ({
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

// Chapters of the case study. On laptops each section's left column shows this list with the
// current chapter marked, so it reads as one index that follows you down the page.
const chapters = [
  { id: 'growth', n: '01', label: 'Growth' },
  { id: 'featured-story', n: '02', label: 'Featured story' },
  { id: 'operating-model', n: '03', label: 'Operating model' },
  { id: 'programs', n: '04', label: 'Programs' },
  { id: 'education', n: '05', label: 'Education' },
  { id: 'events', n: '06', label: 'Events' },
]

// Sentence-case sub-heading inside a section, with an optional link out on the right.
function SubHeading({ children, link }: { children: React.ReactNode; link?: { href: string; label: string } }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h3 className="custom-p text-balance text-ink" style={{ fontWeight: 600, fontSize: '1.0625rem' }}>
        {children}
      </h3>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="custom-p custom-p-sm inline-flex min-h-6 items-center underline underline-offset-4 outline-none transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-red-600"
        >
          {link.label} ↗<span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </div>
  )
}

// Small proof screenshot that opens full size. Same landscape (4:3) frame for every proof image.
function ProofThumb({
  image,
  alt,
  width,
  height,
  label,
  onOpen,
  openerRef,
}: {
  image: string
  alt: string
  width: number
  height: number
  label: string
  onOpen: () => void
  openerRef: React.RefObject<HTMLButtonElement | null>
}) {
  return (
    <button
      ref={openerRef}
      type="button"
      onClick={onOpen}
      aria-label={label}
      className="group relative block w-28 cursor-zoom-in text-right outline-none focus-visible:ring-2 focus-visible:ring-red-600 tablet:w-44"
    >
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="block aspect-[4/3] h-auto w-full object-cover object-top outline outline-1 -outline-offset-1 outline-ink/10"
      />
      <span
        aria-hidden="true"
        className="mt-2 inline-flex items-center gap-1 bg-ink px-1.5 py-1 font-modernist text-[10px] leading-none font-semibold tracking-[0.1em] whitespace-nowrap text-page uppercase transition-colors duration-200 group-hover:bg-red-600 group-hover:text-light"
      >
        <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
        </svg>
        <span className="tablet:hidden">Enlarge</span>
        <span className="hidden tablet:inline">View full size</span>
      </span>
    </button>
  )
}

// Notion-style table of contents: a column of short lines fixed in the right margin on wide
// screens (1400px+, where the margin is wide enough for the names to sit clear of the content),
// one per chapter (the current one longer and red). Hovering or focusing it reveals the
// chapter names beside the lines, with no panel behind them; clicking one jumps there.
function TableOfContents() {
  const [current, setCurrent] = useState(chapters[0].id)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setCurrent(hit.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
    <ChapterPill current={current} />
    <nav
      aria-label="On this page"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
      className="fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 min-[1400px]:block"
    >
      <ol
        className="flex flex-col items-end gap-1 py-3"
      >
        {chapters.map((c) => {
          const active = c.id === current
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                aria-current={active ? 'location' : undefined}
                className="group flex min-h-6 min-w-10 items-center justify-end gap-2 outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              >
                <span
                  className={cn(
                    'whitespace-nowrap font-poppins text-xs transition-opacity duration-150',
                    open ? 'opacity-100' : 'sr-only',
                    active ? 'text-ink' : 'text-ink/50 group-hover:text-ink',
                  )}
                  style={active ? { fontWeight: 600 } : undefined}
                >
                  {c.label}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'h-0.5 shrink-0 transition-[width,background-color] duration-150',
                    active ? 'w-5 bg-red-600' : 'w-3 bg-ink/25 group-hover:bg-ink/60',
                  )}
                />
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
    </>
  )
}

// Screens under 1400px (where the margin list doesn't fit): a small sticky pill in the bottom-left
// corner that shows the current chapter ("03/06 Operating model") once the reader reaches the
// first chapter. Tapping it opens the full chapter list to jump around; picking one closes it.
function ChapterPill({ current }: { current: string }) {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const first = document.getElementById(chapters[0].id)
    if (!first) return
    let frame = 0
    const check = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const footer = document.querySelector('footer')
        const pastStart = first.getBoundingClientRect().top < window.innerHeight * 0.6
        const beforeFooter = !footer || footer.getBoundingClientRect().top > window.innerHeight * 0.85
        setVisible(pastStart && beforeFooter)
      })
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', check)
    }
  }, [])

  useEffect(() => {
    if (!visible) setOpen(false)
  }, [visible])

  const index = Math.max(0, chapters.findIndex((c) => c.id === current))
  const chapter = chapters[index]

  return (
    <div
      className={cn(
        'fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-40 transition-[opacity,translate] duration-200 min-[1400px]:hidden tablet:bottom-[max(1.5rem,env(safe-area-inset-bottom))] tablet:left-[max(1.5rem,env(safe-area-inset-left))]',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      {open && (
        <nav aria-label="Chapters" className="mb-2 w-60 bg-ink py-2 text-page shadow-lg">
          <ol>
            {chapters.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={c.id === current ? 'location' : undefined}
                  className={cn(
                    'flex min-h-10 items-center gap-3 px-4 font-poppins text-sm outline-none transition-colors hover:bg-page/10 focus-visible:bg-page/10',
                    c.id === current ? 'text-page' : 'text-page/60',
                  )}
                >
                  <span className="tabular-nums text-xs text-page/50">{c.n}</span>
                  {c.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 cursor-pointer items-center gap-2 bg-ink px-3 font-poppins text-xs text-page shadow-md outline-none focus-visible:ring-2 focus-visible:ring-red-600 tablet:h-11 tablet:text-sm"
      >
        <span className="tabular-nums text-page/60">
          {chapter.n}/{String(chapters.length).padStart(2, '0')}
        </span>
        <span>{chapter.label}</span>
        <svg aria-hidden="true" className={cn('size-3 transition-transform duration-150', open && 'rotate-180')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <path d="m6 15 6-6 6 6" />
        </svg>
        <span className="sr-only">{open ? ' (close chapter list)' : ' (open chapter list)'}</span>
      </button>
    </div>
  )
}

export function BitgetCaseStudy() {
  const [opsOpen, setOpsOpen] = useState(false)
  const opsOpenerRef = useRef<HTMLButtonElement>(null)
  const [bitquestOpen, setBitquestOpen] = useState(false)
  const [seoOpen, setSeoOpen] = useState(false)
  const seoOpenerRef = useRef<HTMLButtonElement>(null)
  const bitquestOpenerRef = useRef<HTMLButtonElement>(null)
  const [okxIndex, setOkxIndex] = useState<number | null>(null)
  const okxOpenerRef = useRef<HTMLButtonElement | null>(null)

  useDocumentMeta({
    title: 'Bitget Africa Community Growth Case Study | Ndubuisi Marvellous',
    description:
      'How I grew Bitget’s social media and community across Africa from a 10,000-followers-a-month target: 40M+ organic views and impressions, and Bitget Wallet became Nigeria’s #1 downloaded crypto app.',
    image: '/case-studies/og-bitget.jpg',
    ogType: 'article',
  })
  const caseStudyLd = caseStudyJsonLd({
    path: '/bitget',
    title: 'Building and scaling Bitget’s community ecosystem across Africa',
    description: bitgetCaseStudy.summary,
    image: '/case-studies/bitget.webp',
    clientName: 'Bitget',
  })

  return (
    <Layout>
      <JsonLd data={caseStudyLd} />
      <TableOfContents />
      {/* HERO */}
      <section className="case-study-serif pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="pb-12 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance" style={{ fontSize: 'calc(var(--h1-size) * 0.8)' }}>Building and scaling Bitget’s community ecosystem across Africa</h1>
            <p className="custom-p mt-6 max-w-2xl text-pretty text-ink/70">{bitgetCaseStudy.summary}</p>

            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-ink/15 pt-8 tablet:grid-cols-2 laptop:grid-cols-4">
              <div>
                <p className="custom-h1 custom-h1-bold tabular-nums" style={{ color: 'var(--color-accent-text)' }}>
                  40M+
                </p>
                <p className="custom-p mt-2 text-ink/60">Organic views and impressions generated</p>
              </div>
              <div>
                <p className="custom-h1 custom-h1-bold tabular-nums" style={{ color: 'var(--color-accent-text)' }}>
                  150K+
                </p>
                <p className="custom-p mt-2 text-ink/60">New followers and members gained</p>
              </div>
              <div>
                <p className="custom-h1 custom-h1-bold tabular-nums" style={{ color: 'var(--color-accent-text)' }}>
                  20K+
                </p>
                <p className="custom-p mt-2 text-ink/60">Users attributed to ambassador program</p>
              </div>
              <div>
                <p className="custom-h1 custom-h1-bold tabular-nums" style={{ color: 'var(--color-accent-text)' }}>
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
            <ImageStrip images={analyticsImages} eager />
          </div>
        </Grid>
      </section>

      {/* THE GROWTH TARGET */}
      <section id="growth" className="case-study-serif scroll-mt-20 py-16 tablet:py-20 laptop:py-28">
        <SplitSection
          title="Growth was the brief"
        >
          <Reveal>
            <p className="custom-p text-pretty text-ink/70">
              When I joined Bitget, I was set one big goal: more than <strong className="font-semibold text-ink">10,000 new followers</strong> every month. There was no single
              trick for a number that size, so I stacked four levers across every platform.
            </p>
          </Reveal>
          <ol className="mt-8 grid grid-cols-1 gap-x-10 tablet:grid-cols-2">
            {growthLevers.map((lever, i) => (
              <li key={lever.title} className="border-t border-ink/15 py-5">
                <Reveal delay={(i % 2) * 100} className="flex gap-4">
                  <span className="custom-p custom-p-sm pt-0.5 tabular-nums tracking-[0.1em]" style={{ color: 'var(--color-accent-text)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="custom-p text-balance text-ink" style={{ fontWeight: 600 }}>
                      {lever.title}
                    </h3>
                    <p className="custom-p mt-1 text-pretty text-ink/60">{lever.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal className="mt-6">
            <p className="custom-p text-pretty text-ink/70">
              Growth came little by little, and it went beyond followers: Bitget’s user base and trade volume grew across the
              region too. The business developer I worked alongside was generating $20M to $30M in trade volume every month.
            </p>
          </Reveal>
        </SplitSection>
      </section>

      {/* FEATURED STORY (dark band) */}
      <section
        id="featured-story"
        className="on-dark case-study-serif scroll-mt-20 py-12 tablet:py-14 laptop:py-24"
        style={{ background: 'var(--color-night)' }}
      >
        <SplitSection dark title="Turning a market exit into a growth opportunity">
          <Reveal className="flex flex-col gap-4">
            <p className="custom-p text-pretty" style={{ color: 'var(--color-light)' }}>
              When OKX announced its exit from Nigeria, crypto users were looking for alternatives. I led Bitget’s social and
              community response, coordinating community, PR, external partners, and key opinion leaders, using timely
              communication, localized messaging, and a trust-focused narrative to help position Bitget Wallet in the
              conversation.
            </p>
            <p className="custom-p text-pretty" style={{ color: 'var(--color-light)' }}>
              The campaign helped put Bitget Wallet in front of users at a critical moment. Bitget Wallet subsequently reached
              the number-one spot in Nigeria’s app-store rankings and “Bitget” trended nationally.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            {/* Three proof shots in one row on tablet and up, each sized by its own aspect ratio so
                they share a height. Phones show the first two side by side and the third below. */}
            <div className="grid grid-cols-2 gap-3 tablet:flex tablet:items-start">
              {okxShots.map((shot, i) => (
                <figure
                  key={shot.src}
                  className={cn('m-0', i === 2 && 'col-span-2')}
                  style={{ flex: `${shot.width / shot.height} 1 0` }}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      okxOpenerRef.current = e.currentTarget
                      setOkxIndex(i)
                    }}
                    aria-label={`View full size: ${shot.caption}`}
                    className="block w-full cursor-zoom-in outline-none transition-opacity duration-150 hover:opacity-85 focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      className="block h-auto w-full outline outline-1 -outline-offset-1 outline-light/10"
                    />
                  </button>
                  <figcaption className="custom-p custom-p-sm mt-2" style={{ color: 'var(--color-light)', opacity: 0.6 }}>
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </SplitSection>
        <ImageViewer
          image={okxIndex !== null ? { src: okxShots[okxIndex].src, alt: okxShots[okxIndex].alt, width: okxShots[okxIndex].width, label: okxShots[okxIndex].caption } : null}
          onClose={() => setOkxIndex(null)}
          returnFocusTo={okxOpenerRef}
          maxWidth={900}
        />
      </section>

      {/* OPERATING MODEL */}
      <section id="operating-model" className="case-study-serif scroll-mt-20 py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="The community operating model">
          <Reveal>
            <p className="custom-p text-pretty text-ink/60">
              I built a regional operating model that connected two distinct audiences: retail users who needed education,
              support, and engagement, and ecosystem stakeholders who helped extend Bitget’s reach across African markets.
            </p>
            <p className="custom-p mt-3 text-pretty text-ink/60">
              A shared communications and content function supported both sides, while each audience had its own engagement
              channels, programs, and relationship needs.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <figure>
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
                  className="h-auto w-full outline outline-1 -outline-offset-1 outline-ink/10"
                />
                {/* Visible cue that the map opens larger (phones have no zoom cursor). */}
                <span
                  aria-hidden="true"
                  className="absolute right-3 bottom-[8%] inline-flex items-center gap-1 bg-ink px-1.5 py-1 font-modernist text-[10px] leading-none font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition-colors duration-200 group-hover:bg-red-600 group-focus-visible:bg-red-600 tablet:right-5 text-page group-hover:text-light group-focus-visible:text-light"
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
          </Reveal>
        </SplitSection>
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
      <section id="programs" className="case-study-serif scroll-mt-20 py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="Core programs">
          <div className="grid grid-cols-1 gap-3 tablet:grid-cols-3">
            {corePrograms.map((program, i) => (
                <Reveal key={program.title} delay={(i % 3) * 100} className="flex">
                  {/* Compact cards: smaller number, tighter padding and spacing, body in the small size. */}
                  <div className="flex w-full flex-col bg-hyacinth/5 p-4 laptop:p-5">
                    <p className="custom-h1 custom-h1-bold normal-case tabular-nums" style={{ color: 'var(--color-accent-text)', fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)', lineHeight: 1.2 }}>
                      {program.stat}
                    </p>
                    <p className="custom-p custom-p-sm mt-1.5 tracking-[0.1em] uppercase" style={{ fontSize: '0.7rem' }}>{program.statLabel}</p>
                    <p className="custom-h4 custom-h4-bold mt-3 text-balance" style={{ fontSize: '0.95rem' }}>{program.title}</p>
                    <p className="custom-p custom-p-sm mt-1.5 text-pretty text-ink/60">{program.body}</p>
                  </div>
                </Reveal>
              ))}
          </div>
        </SplitSection>
      </section>

      {/* EDUCATION */}
      <section id="education" className="case-study-serif scroll-mt-20 py-16 tablet:py-20 laptop:py-28">
        <SplitSection title="Educational activities">
          <Reveal>
            <p className="custom-p text-pretty text-ink/70">
              As Bitget grew across the region, so did the questions. People needed to understand the product, the ecosystem
              and crypto itself, so I started building education into everything we did.
            </p>
            <p className="custom-p mt-3 text-pretty text-ink/70">
              That included launching Bitget Africa’s YouTube channel, which we grew to about 2,000 subscribers with
              explainers, product education and live market updates. On the B2B side, it meant merchant onboarding and VIP
              partner sessions.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <SubHeading link={{ href: liveSessionsUrl, label: 'All lives on YouTube' }}>Live sessions I hosted</SubHeading>
            <div className="mt-5">
              <EventVideos videos={liveSessions.slice(0, 4)} twoUp />
            </div>
            <JsonLd data={liveSessionsLd} />
          </Reveal>

          <Reveal className="mt-12">
            <SubHeading link={{ href: explainersUrl, label: 'All videos on YouTube' }}>Creator-Led Explainers</SubHeading>
            <p className="custom-p mt-3 max-w-xl text-pretty text-ink/60">
              Collaborated with a Ghanaian creator on educational videos, contributing to scripting and creative direction.
            </p>
            <div className="mt-5">
              <EventVideos videos={explainers.slice(0, 4)} twoUp />
            </div>
            <JsonLd data={explainersLd} />
          </Reveal>

          <Reveal className="mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 tablet:gap-10">
            <div>
              <SubHeading>#BitQuest: a learn &amp; earn challenge on X</SubHeading>
              <p className="custom-p mt-3 max-w-md text-pretty text-ink/60">
                A 7-day gamified campaign that simplified key crypto concepts: one lesson posted each day for six days, then a
                final quiz. This round taught Bitget P2P.
              </p>
              <a
                href={bitquestPost.url}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm mt-4 inline-flex min-h-6 items-center underline underline-offset-4 outline-none transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-red-600"
              >
                View the post on X ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <ProofThumb
              image={bitquestPost.image}
              alt={bitquestPost.alt}
              width={bitquestPost.width}
              height={bitquestPost.height}
              label="View the #BitQuest post full size"
              onOpen={() => setBitquestOpen(true)}
              openerRef={bitquestOpenerRef}
            />
          </Reveal>

          <Reveal className="mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 tablet:gap-10">
            <div>
              <SubHeading>Educational articles ranking on Google</SubHeading>
              <p className="custom-p mt-3 max-w-md text-pretty text-ink/60">
                Community-led articles on crypto-related user education, ranking #1 on Google in Nigeria and Kenya and on page
                one in Ethiopia.
              </p>
            </div>
            <ProofThumb
              image={seoProof.image}
              alt={seoProof.alt}
              width={seoProof.width}
              height={seoProof.height}
              label="View the Google ranking screenshots full size"
              onOpen={() => setSeoOpen(true)}
              openerRef={seoOpenerRef}
            />
          </Reveal>
          <JsonLd data={seoProofLd} />
        </SplitSection>
        <ImageViewer
          image={seoOpen ? { src: seoProof.image, alt: seoProof.alt, width: seoProof.width, label: 'Google ranking screenshots' } : null}
          onClose={() => setSeoOpen(false)}
          returnFocusTo={seoOpenerRef}
          maxWidth={900}
        />
        <ImageViewer
          image={bitquestOpen ? { src: bitquestPost.image, alt: bitquestPost.alt, width: bitquestPost.width, label: '#BitQuest post on X' } : null}
          onClose={() => setBitquestOpen(false)}
          returnFocusTo={bitquestOpenerRef}
          maxWidth={560}
        />
      </section>

      {/* EVENTS */}
      <section id="events" className="case-study-serif scroll-mt-20 py-16 tablet:py-20 laptop:py-28">
        <SplitSection
         
          title="Offline events & activations"
        >
          <Reveal>
            <p className="custom-p text-pretty text-ink/70">
              As community manager, I took Bitget offline across Africa: sponsoring events, hosting most of them myself, and
              writing the guide and standard operating structure our events were run on.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <SubHeading link={{ href: eventVideosPlaylist, label: 'Watch all on YouTube' }}>Event highlights</SubHeading>
            <div className="mt-5">
              <EventVideos videos={eventVideos.slice(0, 4)} twoUp />
            </div>
            <JsonLd data={eventVideosLd} />
          </Reveal>
        </SplitSection>
      </section>

      {/* TESTIMONIAL */}
      <section className="case-study-serif pt-2 pb-10 tablet:pt-4 tablet:pb-12 laptop:pt-6 laptop:pb-14">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 tablet:px-12 laptop:col-span-12 laptop:col-start-2">
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



      <CaseStudyPager
        prev={{ href: binanceCaseStudy.href, title: binanceCaseStudy.title }}
        next={{ href: baseCaseStudy.href, title: baseCaseStudy.title }}
      />
    </Layout>
  )
}

export default BitgetCaseStudy
