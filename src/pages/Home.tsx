import { useEffect, useState } from 'react'
import { Accordion } from '../components/Accordion'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { StaggeredReveal } from '../components/StaggeredReveal'
import { StatCounter } from '../components/StatCounter'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { Link } from 'react-router-dom'
import { avatar, clients, homeTestimonials, logos, services, stats } from '../data/site'

const GRAIN_URL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"

export function Home() {
  const [underlineOn, setUnderlineOn] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setUnderlineOn(true), 300)
    return () => clearTimeout(t)
  }, [])

  useDocumentMeta({
    title: 'Ndubuisi Marvellous | Web3 & Fintech Social Media Manager and Community Manager',
    description:
      'Web3, crypto, and fintech social media manager and community manager based in Africa. I drive growth, strategy, and community for brands like Bitget, Binance, and Coinbase (Base).',
  })

  return (
    <Layout>
      <section className="relative flex min-h-svh w-full flex-col overflow-hidden bg-page">
        {/* Background texture bleeds full-width; only the content below is
            bounded by the same Grid container every other section uses, so
            the hero no longer runs the full width of ultra-wide screens. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{ backgroundImage: `url("${GRAIN_URL}")` }}
        />

        <Grid className="relative pt-16 tablet:pt-28 laptop:pt-32">
          <div className="col-span-full flex flex-col gap-8 tablet:col-span-6 tablet:col-start-2 tablet:flex-row-reverse tablet:items-start tablet:justify-between laptop:col-span-12 laptop:col-start-2">
            <div className="tablet:max-w-[62%]">
              <h1 className="font-modernist text-[7.5vw] leading-[1.1] font-bold tracking-tight text-ink uppercase tablet:text-right tablet:text-[4.8vw] laptop:text-[clamp(2.25rem,3.6vw,3.25rem)]">
                Building{' '}
                <span
                  className="underline decoration-[3px] underline-offset-[0.2em] transition-colors duration-[1200ms] ease-out"
                  style={{ textDecorationColor: underlineOn ? 'rgb(220 38 38)' : 'transparent' }}
                >
                  Social And Community-Led Growth Engines
                </span>{' '}
                For Brands Entering And Scaling Across Africa.
              </h1>
              <p className="mt-4 flex items-center gap-2 font-modernist text-xs font-semibold tracking-[0.15em] text-red-600 tablet:justify-end tablet:text-sm">
                <span aria-hidden="true" className="inline-block h-px w-4 bg-red-600/50" /> FINTECH | WEB3/CRYPTO | TECH | SAAS | AI
              </p>
            </div>

            <div className="w-full shrink-0 tablet:w-[26%] laptop:w-[22%]">
              <img
                src={avatar}
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
        <div className="relative flex-1 tablet:order-3" />

        {/* Trusted-by marquee: an infinite right-to-left scroll, faded out
            at both edges via a mask, sitting right under the hero picture. */}

        {/* Mobile: compact row, logos duplicated 2x, track loops at -50%. */}
        <div className="trusted-by-fade relative w-full overflow-hidden py-4 tablet:hidden">
          <p className="mb-3 text-center text-[10px] font-medium tracking-wide text-ink/60 uppercase">Trusted by</p>
          <div className="trusted-by-track flex w-max items-center gap-12">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={`mobile-${logo.src}-${i}`}
                src={logo.src}
                alt={logo.name}
                className={`shrink-0 object-contain opacity-70 ${
                  logo.name === 'Binance' || logo.name === 'Hyperbridge' ? 'h-7' : 'h-4'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet/laptop: the original bordered-cell design, now scrolling.
            Logos repeat 4x (track loops at -25%) so the track is always
            wider than the viewport, and the loop never shows a gap before
            the next set arrives. Wrapped in the same Grid every other
            section uses, so its edges line up instead of bleeding full
            width; a little extra top margin gives it room to breathe. */}
        <div className="hidden tablet:order-2 tablet:block">
          <Grid className="relative mt-4">
            <div className="trusted-by-fade relative col-span-full overflow-hidden py-4 tablet:col-span-6 tablet:col-start-2 tablet:py-6 laptop:col-span-12 laptop:col-start-2">
              <p className="mb-3 text-center text-xs font-medium tracking-wide text-ink/60 uppercase">Trusted by</p>
              <div className="trusted-by-track-x4 flex w-max items-center">
                {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                  <div
                    key={`desktop-${logo.src}-${i}`}
                    className="flex h-28 w-40 shrink-0 items-center justify-center border-y border-r border-ink/10 p-2 laptop:h-36 laptop:w-56"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`object-contain ${
                        logo.name === 'Binance' || logo.name === 'Hyperbridge'
                          ? 'h-20 w-36 laptop:h-28 laptop:w-48'
                          : 'h-11 w-28 laptop:h-14 laptop:w-32'
                      }`}
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
              <span className="font-modernist text-[10px] font-semibold tracking-[0.2em] laptop:text-xs">SCROLL</span>
            </a>

            <div className="min-w-0 max-w-[70%] text-right tablet:text-left">
              <p className="mb-1 flex items-center justify-end gap-2 font-modernist text-xs font-semibold tracking-[0.15em] text-ink/80 tablet:justify-start tablet:text-sm">
                <span aria-hidden="true" className="inline-block h-px w-4 bg-ink/40" /> HI, I'M
              </p>
              <h2 className="font-modernist text-[8vw] leading-[0.85] font-bold tracking-tight text-ink/60 tablet:text-[4.5vw] laptop:text-[clamp(2.25rem,3.4vw,3.1rem)]">
                NDUBUISI
                <br />
                MARVELLOUS
              </h2>
            </div>
          </div>
        </Grid>
      </section>

      <section id="about" className="scroll-mt-20 py-12 tablet:py-14 laptop:py-18">
        <Grid className="gap-y-8 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-2">
            <StaggeredReveal
              lines={[
                <img
                  key="about-photo"
                  src="/about-heat-culture.webp"
                  alt="Ndubuisi Marvellous"
                  className="mx-auto block aspect-[4/5] w-full max-w-[220px] object-cover object-[center_25%] tablet:aspect-[3/4] tablet:max-w-md tablet:object-center laptop:h-[26rem] laptop:w-auto laptop:max-w-none"
                />,
              ]}
            />
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-7 laptop:col-start-7">
            <StaggeredReveal
              lines={[
                <p key="lead" className="custom-h2 custom-h2-bold relative text-justify text-balance uppercase">
                  I drive growth and acquisition for brands entering or scaling across Africa, turning strategy
                  into audience growth, engagement, and measurable results.
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
                  My work spans localized campaigns, creator/KOL partnerships, platform-native content, GTM and
                  data-driven growth across African markets and beyond.
                </p>,
              ]}
            />
            <div className="mt-12 grid grid-cols-2 items-start justify-items-start gap-x-2 gap-y-8 text-left tablet:mt-16 tablet:grid-cols-4 tablet:gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h2
                    className="custom-h1 custom-h1-bold custom-h1-stat-mobile-lg"
                    style={{ color: 'rgb(220 38 38)' }}
                  >
                    <StatCounter value={stat.value} />
                  </h2>
                  <p className="custom-p mt-2 leading-tight text-ink/60" style={{ fontSize: '0.65rem' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </section>

      <section className="py-12 tablet:py-14 laptop:py-18">
        <Grid className="items-end gap-y-8 pb-12 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h2 className="custom-h1 custom-h1-bold text-left text-balance uppercase">What I do</h2>
          </div>
          <div className="col-span-full hidden tablet:col-span-6 tablet:col-start-2 tablet:block laptop:col-span-4 laptop:col-start-10 laptop:justify-self-end">
            <ButtonLink to="/services">See all services →</ButtonLink>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <Accordion items={services.map((service) => ({ q: service.title, a: service.shortBody }))} />
          </div>
        </Grid>
        <Grid className="mt-8 tablet:hidden">
          <div className="col-span-full">
            <ButtonLink to="/services">See all services →</ButtonLink>
          </div>
        </Grid>
      </section>

      <section id="proof-of-work" className="scroll-mt-20 py-12 tablet:scroll-mt-24 tablet:py-14 laptop:py-18">
        <Grid>
          <div className="col-span-full col-start-1 pb-12 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h2 className="custom-h1 custom-h1-bold text-left uppercase">Proof of Work</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="flex flex-col gap-4 tablet:gap-6">
              <Link
                to={clients[0].href}
                className="group relative block aspect-square overflow-hidden tablet:aspect-[21/9]"
              >
                <img
                  src={clients[0].image}
                  alt={clients[0].title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                <h3 className="custom-h4 custom-h4-invert custom-h4-bold absolute bottom-6 left-6 inline-block bg-red-600 px-3 py-2 tablet:bottom-8 tablet:left-8">
                  {clients[0].shortName}
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>, {clients[0].category}</span>
                </h3>
              </Link>

              <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-6">
                {clients.slice(1).map((client) => (
                  <Link
                    key={client.href}
                    to={client.href}
                    className="group relative block aspect-square overflow-hidden tablet:aspect-[4/5]"
                  >
                    <img
                      src={client.image}
                      alt={client.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                    <h3 className="custom-h4 custom-h4-invert custom-h4-bold absolute bottom-6 left-6 inline-block bg-red-600 px-3 py-2 tablet:bottom-8 tablet:left-8">
                      {client.shortName}
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>, {client.category}</span>
                    </h3>
                  </Link>
                ))}
              </div>
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
