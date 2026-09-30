import { useEffect, useState } from 'react'
import { Accordion } from '../components/Accordion'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { StaggeredReveal } from '../components/StaggeredReveal'
import { StatCounter } from '../components/StatCounter'
import { TestimonialsSection } from '../components/ui/testimonials-2'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { Link } from 'react-router-dom'
import { avatar, bitgetCaseStudy, clients, logos, services, stats } from '../data/site'

const GRAIN_URL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"

export function Home() {
  const [underlineOn, setUnderlineOn] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setUnderlineOn(true), 300)
    return () => clearTimeout(t)
  }, [])

  useDocumentMeta({
    title: 'Ndubuisi Marvellous — Social & Community Growth for Fintech, Web3 and Tech Brands in Africa',
    description:
      'Ndubuisi Marvellous drives social media strategy, growth, and community for fintech, Web3, and tech brands entering or scaling across Africa. Case studies from Bitget, Binance, and Base.',
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
                  Social And Community-Led Growth Engines For Brands Entering
                </span>{' '}
                And Scaling Across Africa.
              </h1>
              <p className="mt-4 flex items-center gap-2 font-modernist text-xs font-semibold tracking-[0.15em] text-red-600 tablet:justify-end tablet:text-sm">
                <span className="text-red-600/50">—</span> FINTECH | WEB3/CRYPTO | TECH | SAAS | AI
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

        <div className="relative flex-1" />

        <Grid className="relative pb-8 tablet:pb-12 laptop:pb-16">
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
                <span className="text-ink/40">—</span> HI, I'M
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
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-2 laptop:col-start-2">
            <h2 className="custom-h1 custom-h1-bold uppercase">About</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-7 laptop:col-start-7">
            <StaggeredReveal
              lines={[
                <p key="lead" className="custom-h2 custom-h2-bold relative text-left text-balance uppercase">
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
            <div className="mt-12 grid grid-cols-2 items-start justify-items-center gap-x-2 gap-y-8 text-center tablet:mt-16 tablet:grid-cols-4 tablet:gap-6">
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
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <p className="mb-2 text-center text-[10px] font-medium tracking-wide text-ink/60 uppercase tablet:text-xs">
              Trusted by
            </p>
          </div>
        </Grid>

        {/* Full-bleed, edge to edge — deliberately breaks out of the Grid
            container so this row spans the whole viewport width. Vertical
            dividers run through every row (including the decorative empty
            top/bottom rows) and extend past the logo row's own top/bottom
            edges. The new horizontal lines are scoped to the logo row's
            cells only, so they stop at the row's edges instead of running
            all the way down to where the verticals end.

            Sizing is identical at every breakpoint (no mobile-only shrink),
            so mobile matches desktop exactly; below the tablet breakpoint
            the row scrolls horizontally instead of squeezing the logos. */}
        <div className="w-full overflow-x-auto tablet:overflow-visible">
          <div className="grid w-full min-w-[47rem] grid-cols-5 divide-x divide-ink/10 tablet:min-w-0">
            {logos.map((_, i) => (
              <div key={`top-${i}`} className="h-12 laptop:h-16" />
            ))}
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="flex h-28 items-center justify-center border-y border-ink/10 p-2 transition-colors hover:bg-ink/5 laptop:h-36"
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
            {logos.map((_, i) => (
              <div key={`bottom-${i}`} className="h-12 laptop:h-16" />
            ))}
          </div>
        </div>
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
            <Accordion items={services.map((service) => ({ q: service.title, a: service.body }))} />
          </div>
        </Grid>
        <Grid className="mt-8 tablet:hidden">
          <div className="col-span-full">
            <ButtonLink to="/services">See all services →</ButtonLink>
          </div>
        </Grid>
      </section>

      <section id="case-studies" className="scroll-mt-20 py-12 tablet:scroll-mt-24 tablet:py-14 laptop:py-18">
        <Grid>
          <div className="col-span-full col-start-1 pb-12 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h2 className="custom-h1 custom-h1-bold text-left uppercase">Selected Case Studies</h2>
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
                <h3 className="custom-h4 custom-h4-invert custom-h4-bold absolute inset-x-0 bottom-0 p-6 tablet:p-8">
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
                    <h3 className="custom-h4 custom-h4-invert custom-h4-bold absolute inset-x-0 bottom-0 p-6 tablet:p-8">
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

      {bitgetCaseStudy.testimonial && (
        <section className="py-12 tablet:py-14 laptop:py-18">
          <Grid>
            <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-4">
              <TestimonialsSection
                quote={
                  <>
                    <b className="font-bold">Marvellous</b>
                    {bitgetCaseStudy.testimonial.quote.slice('Marvellous'.length)}
                  </>
                }
                name={bitgetCaseStudy.testimonial.name}
                role={bitgetCaseStudy.testimonial.role}
                avatarSrc="/testimonials/aka-leung.jpg?v=2"
                avatarAlt={bitgetCaseStudy.testimonial.name}
                avatarFallback={bitgetCaseStudy.testimonial.name.charAt(0)}
              />
            </div>
          </Grid>
        </section>
      )}

    </Layout>
  )
}
