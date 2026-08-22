import { Link } from 'react-router-dom'
import { Accordion } from '../components/Accordion'
import { ButtonLink } from '../components/Button'
import { EventGallery } from '../components/EventGallery'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { StaggeredReveal } from '../components/StaggeredReveal'
import { StatCounter } from '../components/StatCounter'
import { avatar, clients, events, logos, services, site, stats } from '../data/site'

export function Home() {
  return (
    <Layout overlay>
      <section className="bg-hyacinth/10 pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="space-y-6 pt-6 pb-12 tablet:space-y-8 tablet:pt-8 tablet:pb-18 laptop:space-y-12 laptop:pt-8 laptop:pb-32">
          <div className="col-span-full">
            <div className="relative m-auto aspect-square w-32 rounded-full tablet:w-36 laptop:w-[172px]">
              <img src={avatar} alt="" className="size-full rounded-full object-cover" />
            </div>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-4">
            <div className="relative flex flex-col items-stretch space-y-8">
              <div className="space-y-text-block text-center">
                <h2 className="custom-h2 relative text-balance">
                  <StaggeredReveal
                    lines={["Hi, I'm Marvellous,", 'a Growth, Socials & Community Growth Manager.', 'I Make Global Brands Feel Local In Africa.']}
                  />
                </h2>
              </div>
              <div className="self-center">
                <ButtonLink to={site.linkedin} external>
                  Connect on Linkedin
                </ButtonLink>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      <section className="py-12 tablet:py-14 laptop:py-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <p className="custom-p custom-p-sm mb-6 text-center tracking-wide text-ink/60 uppercase">Trusted by</p>

            {/* Single row, auto-scrolling marquee at every breakpoint */}
            <div className="overflow-hidden">
              <div className="animate-marquee flex w-max items-center gap-10 tablet:gap-14 laptop:gap-16">
                {[...logos, ...logos, ...logos, ...logos].map((file, i) => (
                  <img
                    key={`${file}-${i}`}
                    src={file}
                    alt=""
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
