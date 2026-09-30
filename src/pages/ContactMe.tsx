import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { site } from '../data/site'

export function ContactMe() {
  useDocumentMeta({
    title: 'Contact — Ndubuisi Marvellous',
    description: 'Get in touch with Ndubuisi Marvellous for social media strategy, growth, and community work.',
  })

  return (
    <Layout>
      <section className="flex min-h-[70svh] items-center pt-18 tablet:pt-[5rem] laptop:pt-0">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Contact</p>
            <h1 className="custom-h1 custom-h1-bold mt-4 text-balance uppercase">Let’s work together</h1>
            <p className="custom-p mt-4 max-w-lg text-ink/70">
              If you have requests or questions, kindly do not hesitate to contact me. 😉
            </p>

            <div className="mt-8">
              <ButtonLink to={`mailto:${site.email}`} external tone="red" fullWidth={false}>
                {site.email}
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
              >
                LinkedIn
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
              >
                Instagram
              </a>
            </div>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}

export default ContactMe
