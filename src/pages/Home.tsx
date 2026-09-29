import { Link } from 'react-router-dom'
import { Accordion } from '../components/Accordion'
import { ButtonLink } from '../components/Button'
import { EventGallery } from '../components/EventGallery'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { StaggeredReveal } from '../components/StaggeredReveal'
import { StatCounter } from '../components/StatCounter'
import TestimonialsComponent from '../components/shadcn-studio/blocks/testimonials-component-26/testimonials-component-26'
import { avatar, clients, events, logos, services, stats } from '../data/site'

const GRAIN_URL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"

export function Home() {
  return (
    <Layout>
      <section className="relative flex min-h-svh w-full flex-col overflow-hidden bg-[#e7e6e2]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{ backgroundImage: `url("${GRAIN_URL}")` }}
        />

        <div className="relative flex flex-1 flex-col gap-8 px-8 pt-24 pb-8 tablet:px-12 tablet:pt-28 tablet:pb-12 laptop:px-16 laptop:pt-40 laptop:pb-16">
          {/* top row: headline + photo */}
          <div className="flex flex-col gap-8 tablet:flex-row-reverse tablet:items-start tablet:justify-between">
            <div className="tablet:max-w-[720px] tablet:text-right laptop:max-w-[880px]">
              <h1 className="font-modernist text-[9vw] leading-[1.05] font-bold tracking-tight text-black tablet:text-[5.8vw] laptop:text-[4.3vw]">
                Building Social And Community-Led Growth Engines For Brands Entering And Scaling
                Across Africa.
              </h1>
              <p className="mt-4 flex items-center gap-2 font-modernist text-xs font-semibold tracking-[0.15em] text-black/80 tablet:justify-end tablet:text-sm">
                <span className="text-black/40">—</span> FINTECH | WEB3/CRYPTO | TECH | AI
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

          {/* spacer */}
          <div className="flex-1" />

          {/* bottom row: scroll + name */}
          <div className="flex items-end justify-between gap-4 tablet:flex-row-reverse">
            <div className="flex shrink-0 flex-col items-center gap-2 text-black/70">
              <span className="text-lg">↓</span>
              <span className="font-modernist text-[10px] font-semibold tracking-[0.2em]">SCROLL</span>
            </div>

            <div className="min-w-0 max-w-[70%] text-right tablet:text-left">
              <p className="mb-1 flex items-center justify-end gap-2 font-modernist text-xs font-semibold tracking-[0.15em] text-black/80 tablet:justify-start tablet:text-sm">
                <span className="text-black/40">—</span> HI, I'M
              </p>
              <h2 className="font-modernist text-[8vw] leading-[0.85] font-bold tracking-tight text-black tablet:text-[4.5vw] laptop:text-[3.4vw]">
                NDUBUISI
                <br />
                MARVELLOUS
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 tablet:py-14 laptop:py-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <p className="custom-p custom-p-sm mb-6 text-center tracking-wide text-ink/60 uppercase">Trusted by</p>

            {/* Single row, auto-scrolling marquee at every breakpoint */}
            <div className="overflow-hidden">
              <div className="animate-marquee flex w-max items-center gap-10 tablet:gap-14 laptop:gap-16">
                {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                  <img
                    key={`${logo.src}-${i}`}
                    src={logo.src}
                    alt={logo.name}
                    className="h-6 w-20 shrink-0 object-scale-down grayscale transition-[filter] duration-300 hover:grayscale-0 tablet:h-8 tablet:w-28 laptop:h-10 laptop:w-36"
                  />
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </section>

      <section className="py-12 tablet:py-14 laptop:py-18">
        <Grid className="gap-y-8 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-2 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-wide text-ink/60 uppercase">About</p>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-10 laptop:col-start-4">
            <h2 className="custom-h2 custom-h2-sm relative text-left text-balance">
              <StaggeredReveal
                lines={[
                  <b key="lead">
                    I drive growth and acquisition for brands entering or scaling across Africa, turning strategy
                    into audience growth, engagement, and measurable results.
                  </b>,
                  'With 5+ years of experience across crypto, fintech, SaaS, and emerging tech, I’ve led growth, content, and community initiatives for brands including Bitget, Binance, and Coinbase.',
                  'My work spans localized campaigns, creator/KOL partnerships, platform-native content, GTM and data-driven growth across African markets and beyond.',
                ]}
              />
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 tablet:mt-16 tablet:grid-cols-3 tablet:gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h2 className="custom-h1">
                    <StatCounter value={stat.value} />
                  </h2>
                  <p className="custom-p mt-2 text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </section>

      <section className="py-12 tablet:py-14 laptop:py-18">
        <Grid className="items-end gap-y-8 pb-12 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-wide text-ink/60 uppercase">Services</p>
            <h2 className="custom-h1 mt-4 text-left text-balance">This is what I do</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10 laptop:justify-self-end">
            <ButtonLink to="/services">See all services →</ButtonLink>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <Accordion size="lg" items={services.map((service) => ({ q: service.title, a: service.body }))} />
          </div>
        </Grid>
      </section>

      <section className="py-12 tablet:py-14 laptop:py-18">
        <Grid>
          <div className="col-span-full col-start-1 pb-12 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h2 className="custom-h2 text-left">Selected Case Studies</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="flex flex-col gap-4 tablet:gap-6">
              <Link
                to={clients[0].href}
                className="group relative block aspect-square overflow-hidden tablet:aspect-[21/9]"
              >
                <img
                  src={clients[0].image}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                <p className="custom-h4 custom-h4-invert absolute inset-x-0 bottom-0 p-6 tablet:p-8">
                  <span className={clients[0].bold ? 'custom-h4-bold' : ''}>{clients[0].shortName}</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>, {clients[0].category}</span>
                </p>
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
                      alt=""
                      className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                    <p className="custom-h4 custom-h4-invert absolute inset-x-0 bottom-0 p-6 tablet:p-8">
                      <span className={client.bold ? 'custom-h4-bold' : ''}>{client.shortName}</span>
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>, {client.category}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </section>

      <EventGallery title="Event Gallery" photos={events} />

      <TestimonialsComponent />

      <section>
        <Grid className="space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2 laptop:row-start-1">
            <div className="flex flex-col space-y-8">
              <h2 className="custom-h2 text-left">
                Want to work together? Drop me a message and I’ll get back to you soon.
              </h2>
              <div className="self-start">
                <ButtonLink to="/contact-me">Get in touch today →</ButtonLink>
              </div>
            </div>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}
