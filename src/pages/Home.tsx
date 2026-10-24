import { useEffect, useState } from 'react'
import { usePauseOffscreen } from '../hooks/usePauseOffscreen'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { CaseStudyCard } from '../components/CaseStudyCard'
import { Layout } from '../components/Layout'
import { StaggeredReveal } from '../components/StaggeredReveal'
import { StatCounter } from '../components/StatCounter'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { clients, homeTestimonials, logos, services, stats } from '../data/site'
import { cn } from '../lib/utils'

// Intrinsic sizes of the trimmed logo files, so the browser reserves their space before they load.
const logoSize: Record<string, [number, number]> = {
  Binance: [225, 49],
  Bitget: [512, 155],
  Base: [1280, 324],
  Kyshi: [103, 42],
  Hyperbridge: [799, 200],
}

const GRAIN_URL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"

export function Home() {
  const [underlineOn, setUnderlineOn] = useState(false)
  const mobileTrackRef = usePauseOffscreen<HTMLDivElement>()
  const desktopTrackRef = usePauseOffscreen<HTMLDivElement>()
  useEffect(() => {
    const t = setTimeout(() => setUnderlineOn(true), 300)
    return () => clearTimeout(t)
  }, [])

  useDocumentMeta({
    title: 'Web3 & Fintech Social Media & Community Manager | Ndubuisi Marvellous',
    description:
      'Web3, crypto and fintech social media and community manager in Africa. I drive growth, strategy and community for Bitget, Binance and Coinbase (Base).',
    ogType: 'website',
  })

  return (
    <Layout>
      <section className="relative flex min-h-svh w-full flex-col overflow-hidden bg-page tablet:min-h-0">
        {/* Background texture bleeds full-width; only the content below is
            bounded by the same Grid container every other section uses, so
            the hero no longer runs the full width of ultra-wide screens. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{ backgroundImage: `url("${GRAIN_URL}")` }}
        />

        <Grid className="relative pt-16 tablet:pt-28 laptop:pt-32">
          {/* Laptop: the heading is sized to be exactly as tall as the photo beside it (top and
              bottom level with it). */}
          <div className="col-span-full flex flex-col gap-8 tablet:col-span-6 tablet:col-start-2 tablet:flex-row-reverse tablet:items-start tablet:justify-between laptop:col-span-12 laptop:col-start-2">
            <div className="tablet:max-w-[62%]">
              <h1 className="font-modernist text-[5.6vw] leading-[1.6] font-bold tracking-tight text-ink uppercase tablet:text-right tablet:text-[3.87vw] tablet:leading-[1.4] laptop:text-[min(calc((4.35vw-2.85px)*0.78),calc(3.74rem*0.78))] laptop:leading-[1.49] text-balance">
                Building{' '}
                {/* Drawn as a background so it can sweep in left to right
                    (text-decoration can't animate its length). */}
                <span
                  className="transition-[background-size] duration-[1400ms] ease-out motion-reduce:transition-none"
                  style={{
                    backgroundImage: 'linear-gradient(var(--color-red-600), var(--color-red-600))',
                    backgroundRepeat: 'no-repeat',
                    // Boldonse has a deep descender area, so the line sits 0.27em up from the
                    // bottom of the text box: just under the baseline instead of halfway to the
                    // next line. Thickness scales with the type.
                    backgroundPosition: '0 calc(100% - 0.27em)',
                    backgroundSize: underlineOn ? '100% max(2px, 0.07em)' : '0% max(2px, 0.07em)',
                  }}
                >
                  social &amp; community-led growth engines
                </span>{' '}
                for brands scaling across emerging markets
              </h1>
            </div>

            <div className="w-full shrink-0 tablet:w-[26%] laptop:w-[22%]">
              <img fetchPriority="high"
                width={600}
                height={600}
                src="/avatar.webp"
                alt="Ndubuisi Marvellous"
                className="aspect-[4/3.4] w-full object-cover object-top tablet:aspect-[3/4] tablet:object-center"
              />
            </div>
          </div>
        </Grid>

        {/* On mobile this spacer sits before the marquee (unchanged, liked
            as-is). On tablet+ it's reordered (see order-* below) to sit
            AFTER the desktop marquee instead, so the marquee stays close
            under the hero picture and the spacer absorbs the leftover
            space down to the "Hi, I'm" row. */}
        <div className="relative flex-1 tablet:order-3 tablet:h-10 tablet:flex-none laptop:h-14" />

        {/* Trusted-by marquee: an infinite right-to-left scroll, faded out
            at both edges via a mask, sitting right under the hero picture. */}

        {/* Mobile: compact row. Uses the trimmed copies in /logos/tight (the originals carry
            empty space inside the file, which made the gaps uneven, Binance especially), so
            every logo is separated by exactly the same gap (a right margin on each logo, not a
            flex gap, so every set is exactly the same width and the -25% loop lines up). Logos repeat 4x and the track
            loops at -25%; it starts with the second set offset in from the left edge so
            Binance and Bitget are already in view when the page opens. */}
        <div className="trusted-by-fade relative w-full overflow-hidden py-4 tablet:hidden">
          <p className="mb-3 text-center text-xs font-medium tracking-wide text-ink/60 uppercase">Trusted by</p>
          <div ref={mobileTrackRef} className="trusted-by-track flex w-max items-center">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <img
                key={`mobile-${logo.src}-${i}`}
                src={logo.src.replace('/logos/', '/logos/tight/')}
                width={logoSize[logo.name]?.[0]}
                height={logoSize[logo.name]?.[1]}
                alt={i < logos.length ? logo.name : ''}
                aria-hidden={i >= logos.length ? true : undefined}
                className={cn(
                  'mr-10 w-auto shrink-0 object-contain opacity-70',
                  // Per-logo heights balanced by eye: Kyshi's thin text and Hyperbridge's light
                  // wordmark need a little more size to read as strongly as the others.
                  { Binance: 'h-[22px]', Kyshi: 'h-[21px]', Hyperbridge: 'h-[22px]' }[logo.name] ?? 'h-4',
                )}
              />
            ))}
          </div>
        </div>

        {/* Tablet/laptop: the logos scroll in evenly spaced cells (no dividing lines).
            Logos repeat 4x (track loops at -25%) so the track is always
            wider than the viewport, and the loop never shows a gap before
            the next set arrives. Wrapped in the same Grid every other
            section uses, so its edges line up instead of bleeding full
            width; a little extra top margin gives it room to breathe. */}
        <div className="hidden tablet:order-2 tablet:block">
          <Grid className="relative mt-4">
            <div className="trusted-by-fade relative col-span-full overflow-hidden py-4 tablet:col-span-6 tablet:col-start-2 tablet:py-5 laptop:col-span-12 laptop:col-start-2">
              <p className="mb-4 text-center text-xs font-medium tracking-wide text-ink/60 uppercase">Trusted by</p>
              <div ref={desktopTrackRef} className="trusted-by-track-x4 flex w-max items-center">
                {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                  <div
                    key={`desktop-${logo.src}-${i}`}
                    className="flex h-12 w-40 shrink-0 items-center justify-center laptop:h-14 laptop:w-52"
                  >
                    {/* Trimmed artwork with a height per logo, balanced by eye: the bold Base
                        wordmark sits a little smaller, thin or detailed marks (Kyshi,
                        Hyperbridge) a little larger, so the row reads evenly. */}
                    <img
                      src={logo.src.replace('/logos/', '/logos/tight/')}
                      width={logoSize[logo.name]?.[0]}
                      height={logoSize[logo.name]?.[1]}
                      alt={i < logos.length ? logo.name : ''}
                      aria-hidden={i >= logos.length ? true : undefined}
                      className={cn(
                        'w-auto object-contain',
                        {
                          Bitget: 'h-6 laptop:h-[30px]',
                          Base: 'h-[21px] laptop:h-[26px]',
                          Kyshi: 'h-[29px] laptop:h-9',
                          Binance: 'h-6 laptop:h-[30px]',
                          Hyperbridge: 'h-[27px] laptop:h-[34px]',
                        }[logo.name] ?? 'h-6 laptop:h-[30px]',
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </div>

        <Grid className="relative pb-8 tablet:order-4 tablet:pb-12 laptop:pb-16">
          <div className="col-span-full flex items-end justify-between gap-4 tablet:col-span-6 tablet:col-start-2 tablet:flex-row-reverse laptop:col-span-12 laptop:col-start-2">
            <a
              href="#about"
              className="flex shrink-0 cursor-pointer flex-col items-center gap-2 text-ink/70 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-ink/40"
            >
              <span className="text-lg laptop:text-2xl">↓</span>
              <span className="font-modernist text-xs font-semibold tracking-[0.2em]">ABOUT ME</span>
            </a>

            <div className="min-w-0 max-w-[70%] text-right tablet:text-left">
              <h2 style={{ fontFamily: "'Boldonse', var(--font-modernist)", fontSynthesis: 'none' }} className="font-modernist text-[7vw] leading-[1.3] font-bold tracking-normal text-ink/60 tablet:text-[4.5vw] laptop:text-[clamp(2.25rem,3.4vw,3.1rem)]">
                NDUBUISI{' '}
                <br />
                MARVELLOUS
              </h2>
            </div>
          </div>
        </Grid>
      </section>

      <section id="about" className="scroll-mt-20 py-12 tablet:py-14 laptop:py-18">
        <Grid className="gap-y-8 tablet:gap-y-0">
          {/* Desktop: text and stats on the left, photo on the right spanning both rows, so the photo
              starts level with the text and ends level with the stats at every screen width. */}
          <div className="col-span-full tablet:col-span-2 tablet:col-start-6 tablet:row-start-1 laptop:col-span-4 laptop:col-start-10 laptop:row-span-2">
            <StaggeredReveal
              className="laptop:h-full"
              lineClassName="laptop:relative laptop:h-full"
              lines={[
                <img loading="lazy" decoding="async"
                  key="about-photo"
                  src="/ndubuisi-marvellous-speaker-abf-2026.webp"
                  srcSet="/ndubuisi-marvellous-speaker-abf-2026-480.webp 480w, /ndubuisi-marvellous-speaker-abf-2026.webp 800w"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 448px, 220px"
                  width={960}
                  height={1280}
                  alt="Ndubuisi Marvellous wearing a speaker badge at ABF 2026"
                  className="mx-auto block aspect-[4/5] w-full max-w-[220px] object-cover object-[center_25%] tablet:mx-0 tablet:aspect-[3/4] tablet:max-w-full tablet:object-center laptop:absolute laptop:inset-y-0 laptop:right-0 laptop:mx-0 laptop:h-full laptop:w-auto laptop:max-w-full"
                />,
              ]}
            />
          </div>
          <div className="col-span-full tablet:col-span-4 tablet:col-start-2 tablet:row-start-1 laptop:col-span-7 laptop:col-start-2">
            <StaggeredReveal
              lines={[
                <p key="lead" className="font-modernist text-[1.3rem] leading-snug font-medium tracking-tight text-pretty text-ink tablet:text-[1.45rem] laptop:text-[1.7rem]">
                  I drive growth and acquisition for brands, turning strategy
                  into an active user base and measurable results.
                </p>,
                <p key="brands" className="custom-p mt-4 text-left text-ink/70">
                  With 5+ years of experience across crypto, fintech, SaaS, and emerging tech, I’ve led growth,
                  content, and community initiatives for brands including{' '}
                  <a href="https://www.bitget.com" target="_blank" rel="noreferrer" className="underline">
                    Bitget
                  </a>
                  ,{' '}
                  <a href="https://www.binance.com" target="_blank" rel="noreferrer" className="underline">
                    Binance
                  </a>
                  , and{' '}
                  <a href="https://www.base.org" target="_blank" rel="noreferrer" className="underline">
                    Coinbase
                  </a>
                  .
                </p>,
                <p key="work" className="custom-p mt-2 text-left text-ink/70">
                  My work spans localized campaigns, creator/KOL partnerships, platform-native content, go-to-market and
                  data-driven growth. I also build B2B relationships with
                  communities, affiliates and partners that turn into lasting advocacy.
                </p>,
              ]}
            />
          </div>
          {/* Stats: their own grid item. Phones: under the text. Tablets: a full-width row of four
            under both the text and the photo. Laptop: under the text, with the photo beside both. */}
        <div className="col-span-full mt-4 grid grid-cols-2 items-start justify-items-start gap-x-6 gap-y-8 text-left tablet:col-span-6 tablet:col-start-2 tablet:row-start-2 tablet:mt-12 tablet:grid-cols-4 tablet:gap-x-8 laptop:col-span-7 laptop:col-start-2 laptop:flex laptop:justify-between laptop:gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="custom-h1 custom-h1-bold custom-h1-stat-mobile-lg laptop:!text-[calc(var(--h1-size)*0.82)]"
                  style={{ color: 'var(--color-accent-text)' }}
                >
                  <StatCounter value={stat.value} />
                </p>
                {/* Laptop: each label is capped at the same width, so every one wraps to two lines
                    at most and the row's spacing (justify-between) stays even. */}
                <p className="custom-p mt-2 leading-tight text-ink/60 laptop:max-w-[8.5rem]" style={{ fontSize: '0.75rem' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      <section className="py-12 tablet:py-14 laptop:py-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            {/* Numbered list in the style of blue2purple.com: small number, big title on the
                left, a short line on the right, thin rules between rows. */}
            <ol className="border-t border-ink/15">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="grid grid-cols-1 gap-y-2 border-b border-ink/15 py-6 laptop:grid-cols-[minmax(0,1fr)_17rem] laptop:items-center laptop:gap-x-8 laptop:py-7"
                >
                  <h3
                    className="text-balance text-ink uppercase"
                    style={{
                      fontFamily: "'Boldonse', var(--font-modernist)",
                      fontSynthesis: 'none',
                      fontSize: 'clamp(1.2rem, 2.1vw, 1.9rem)',
                      lineHeight: 1.35,
                    }}
                  >
                    {service.title}
                  </h3>
                  {/* Phones: sits under the title, lined up with it. Laptop: its own column. */}
                  <p className="custom-p text-pretty laptop:text-right" style={{ color: 'var(--color-ink)', opacity: 0.6 }}>
                    {service.shortBody}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Grid>
        {/* One "See all services" under the list on every screen size, with the same arrow as
            "View case study". */}
        <Grid className="mt-8">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2 tablet:flex tablet:justify-end">
            <ButtonLink to="/services" className="tablet:w-auto">
              See all services
              <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </ButtonLink>
          </div>
        </Grid>
      </section>

      <section id="case-studies" className="scroll-mt-20 py-12 tablet:scroll-mt-24 tablet:py-14 laptop:py-18">
        <Grid>
          <div className="col-span-full col-start-1 pb-12 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h2 className="custom-h1 custom-h1-bold text-left uppercase">Case Studies</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="flex flex-col gap-10 tablet:gap-6">
              {clients.map((client) => (
                <CaseStudyCard key={client.href} client={client} className="aspect-[4/3] tablet:aspect-[8/3] laptop:aspect-[7/2]" />
              ))}
            </div>
          </div>
        </Grid>
      </section>

      {homeTestimonials.length > 0 && (
        <section className="py-12 tablet:py-14 laptop:py-18">
          <Grid>
            <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-4">
              <TestimonialCarousel items={homeTestimonials} />
            </div>
          </Grid>
        </section>
      )}

    </Layout>
  )
}
