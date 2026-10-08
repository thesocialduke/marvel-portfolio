import { useState } from 'react'
import { CaseStudyPager } from '../components/CaseStudyPager'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { LetsTalkPanel } from '../components/LetsTalkPanel'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { VideoModal, type EmbedSource } from '../components/VideoModal'
import { useCaseStudyJsonLd } from '../hooks/useCaseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, bitgetCaseStudy } from '../data/site'

const RED = 'rgb(220 38 38)'

const summary =
  'I produced short-form content for Binance Africa that translated complex industry and product concepts into accessible, shareable stories, built to travel on Instagram and TikTok.'


const challengeLead =
  'Binance needed content that could reach people on the street.'

const challengePoints = [
  'Existing crypto content was jargon-heavy and built for people who already understood the space',
  'Little to no street-style, camera-first content existed in crypto education at the time',
]

const processSteps = [
  { title: 'Research', body: 'Find what people already ask, doubt or get wrong about crypto.' },
  { title: 'Concept', body: 'Turn one crypto idea into a question anyone can answer.' },
  { title: 'Shoot', body: 'Film on the street with everyday people, no scripts for them.' },
  { title: 'Edit', body: 'Cut tight for short-form, hook in the first two seconds.' },
  { title: 'Distribute', body: 'Post natively on Instagram and TikTok, built for each feed.' },
]

// `thumb` is each video's own cover image (from /public/case-studies/binance).
// Clicking a card plays the video in a pop-up.
type Episode = EmbedSource & { title: string; views: string; thumb?: string }

const episodes: Episode[] = [
  {
    title: 'Learn Crypto for FREE',
    views: '11.8K',
    tiktok: 'https://www.tiktok.com/@binanceafrica/video/7326874630789057797',
    instagram: 'https://www.instagram.com/p/C2ZRj8RsHUJ/',
  },
  {
    title: 'Gold or Bitcoin?',
    thumb: '/case-studies/binance/gold-or-bitcoin.webp',
    views: '40.3K',
    tiktok: 'https://www.tiktok.com/@binanceafrica/video/7330925379009416453',
  },
  {
    title: 'Give a Bitcoin to someone!',
    thumb: '/case-studies/binance/give-a-bitcoin.webp',
    views: '17.6K',
    tiktok: 'https://www.tiktok.com/@binanceafrica/video/7329476147056577798',
    instagram: 'https://www.instagram.com/p/C2r7a6ZMWX-/',
  },
  {
    title: 'Heard about Crypto?',
    thumb: '/case-studies/binance/heard-about-crypto.webp',
    views: '15.4K',
    tiktok: 'https://www.tiktok.com/@binanceafrica/video/7324238921632697606',
    instagram: 'https://www.instagram.com/p/C2HSeoisvrN/',
  },
  {
    title: 'BTC Vs Gold',
    thumb: '/case-studies/binance/btc-vs-gold.webp',
    views: '10.5K',
    tiktok: 'https://www.tiktok.com/@binanceafrica/video/7311617269128367366',
    instagram: 'https://www.instagram.com/p/C0vuJ_osGeQ/',
  },
]

export function BinanceCaseStudy() {
  const [playing, setPlaying] = useState<Episode | null>(null)
  useDocumentMeta({
    title: 'Binance Africa Street Interviews Case Study | Ndubuisi Marvellous',
    description:
      'Short-form street-interview content for Binance Africa that explained crypto simply, built for Instagram and TikTok.',
    image: '/case-studies/binance.jpg',
    ogType: 'article',
  })
  useCaseStudyJsonLd({
    path: '/binance-street-interviews',
    title: 'Turning complex crypto into shareable stories',
    description: summary,
    image: '/case-studies/binance.jpg',
    clientName: 'Binance',
  })

  return (
    <Layout>
      {/* HERO */}
      <section className="case-study-serif pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="pb-12 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Case study · Binance Africa</p>
            </div>
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance">
              Turning complex crypto into shareable stories
            </h1>
            <p className="custom-p mt-6 max-w-2xl text-ink/70">{summary}</p>
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
                <p className="custom-h4 custom-h4-bold mt-1">Content creator</p>
              </div>
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Region</p>
                <p className="custom-h4 custom-h4-bold mt-1">Nigeria, West Africa</p>
              </div>
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Channels</p>
                <p className="custom-h4 custom-h4-bold mt-1">Instagram, TikTok</p>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      {/* 01 THE CHALLENGE */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:pt-24 laptop:pb-12">
        <Grid className="gap-y-8 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-10 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">01. The challenge</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 max-w-4xl text-balance">{challengeLead}</h2>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-1 gap-8 border-t border-ink/15 pt-8 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-12 laptop:col-start-2">
            {challengePoints.map((point) => (
              <p key={point} className="custom-p text-ink/70">
                {point}
              </p>
            ))}
          </div>
        </Grid>
      </section>

      {/* 02 PROCESS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-12">
        <Grid className="gap-y-6 pb-12 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">02. Process</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">From question to feed</h2>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <ProcessTimeline steps={processSteps} />
          </div>
        </Grid>
      </section>

      {/* 03 RESULTS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:pt-12 laptop:pb-24">
        <Grid className="gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">03. Results</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">A few episodes</h2>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-2 gap-6 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-5 laptop:col-span-12 laptop:col-start-2">
            {episodes.map((episode, i) => (
              <div key={episode.title} className={i === 0 ? 'col-span-2 tablet:col-span-1' : ''}>
                <button
                  type="button"
                  onClick={() => setPlaying(episode)}
                  aria-label={`Play ${episode.title}`}
                  className={`relative flex aspect-[9/16] w-full cursor-pointer items-end overflow-hidden bg-graphite p-3 text-left outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-600 ${
                    i === 0 ? 'outline-2 -outline-offset-2 outline-red-600' : ''
                  }`}
                >
                  {episode.thumb && <img loading="lazy" decoding="async" src={episode.thumb} alt="" className="absolute inset-0 size-full object-cover" />}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center bg-red-600"
                  >
                    <span className="ml-1 border-y-[8px] border-l-[13px] border-y-transparent border-l-white" />
                  </span>
                  <span className="custom-p relative text-[13px] leading-tight font-bold uppercase" style={{ color: '#fff' }}>
                    {episode.title}
                  </span>
                </button>
                <p className="custom-h1 custom-h1-bold mt-4 text-[2rem]" style={{ color: RED }}>
                  {episode.views}
                </p>
                <p className="custom-p text-ink/60">Views</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      <LetsTalkPanel />
      <CaseStudyPager
        prev={{ href: baseCaseStudy.href, title: baseCaseStudy.title }}
        next={{ href: bitgetCaseStudy.href, title: bitgetCaseStudy.title }}
      />
      {playing && <VideoModal title={playing.title} sources={playing} onClose={() => setPlaying(null)} />}
    </Layout>
  )
}

export default BinanceCaseStudy
