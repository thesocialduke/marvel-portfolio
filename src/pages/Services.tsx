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
            <h1 className="custom-h2 relative text-balance">
              I’m open for new projects — see what I can do for you below.
            </h1>
          </div>
        </Grid>
      </section>

      {services.map((service) => (
        <section key={service.title}>
          <Grid className="items-start space-y-12 py-12 laptop:space-y-0">
            <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2 laptop:row-start-1">
              <h3 className="custom-h3 relative text-balance">{service.title}</h3>
            </div>
            <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8 laptop:row-start-1">
              <h2 className="custom-h2 relative text-balance">{service.body}</h2>
            </div>
          </Grid>
        </section>
      ))}

      <section>
        <Grid className="pt-12 pb-8 tablet:pt-18 laptop:pt-24 laptop:pb-12">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h2 className="custom-h2 relative text-balance">
              Interested in a service but got questions? Don’t worry, I prepared a few answers.
            </h2>
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="min-h-[248px] py-12 tablet:py-14 laptop:py-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <Accordion items={faqs} />
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2 laptop:row-start-1">
            <div className="relative flex flex-col items-stretch space-y-8">
              <h2 className="custom-h2">
                Want to work together? Drop me a message and I’ll get back to you in no time.
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
