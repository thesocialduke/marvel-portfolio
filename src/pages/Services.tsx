import { Accordion } from '../components/Accordion'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { faqs, services } from '../data/site'

export function Services() {
  return (
    <Layout>
      <section>
        <Grid className="pt-18 pb-8 tablet:pt-[5rem] laptop:pt-[8.5rem] laptop:pb-12">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h1 className="custom-h2 relative text-balance" style={{ color: 'rgb(220 38 38)' }}>
              I’m open for new projects. See what I can do for you below.
            </h1>
          </div>
        </Grid>
      </section>

      <div className="divide-y divide-ink/10">
        {services.map((service) => (
          <section key={service.title}>
            <Grid className="items-start space-y-6 py-12 laptop:space-y-0">
              <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2 laptop:row-start-1">
                <h3 className="custom-h2 custom-h2-bold relative text-balance">{service.title}</h3>
              </div>
              <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8 laptop:row-start-1">
                <p className="custom-p relative text-balance text-ink/70">{service.body}</p>
              </div>
            </Grid>
          </section>
        ))}
      </div>

      <section>
        <Grid className="pt-12 tablet:pt-18 laptop:pt-24">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h2 className="custom-h2 relative text-balance">FAQs</h2>
          </div>
        </Grid>
        <Grid className="min-h-[248px] pt-4 pb-12 tablet:pb-14 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <Accordion items={faqs} />
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="py-12">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <div className="self-start">
              <ButtonLink to="#contact">Get in touch today →</ButtonLink>
            </div>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}
