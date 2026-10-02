import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { site } from '../data/site'

export function ContactMe() {
  useDocumentMeta({
    title: 'Contact | Ndubuisi Marvellous',
    description: 'Get in touch with Ndubuisi Marvellous for social media strategy, growth, and community work.',
  })

  return (
    <Layout hideFooter>
      <section className="flex min-h-[60svh] items-center pt-18 tablet:pt-[5rem] laptop:pt-0">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Contact</p>
            <h1 className="custom-h1 custom-h1-bold mt-4 text-balance uppercase">Let’s work together</h1>
            <p className="custom-p mt-4 max-w-lg text-ink/70">
              Have a brand to grow, a team to join, or a project in mind? Tell me what you're working on and I'll get back to you.
            </p>
            <p className="custom-p mt-4 max-w-lg text-ink/70">
              Open to full-time and contract roles, and ready to relocate for the right opportunity.
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
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
              >
                Telegram
              </a>
            </div>
          </div>
        </Grid>
      </section>

      <section className="pb-18 tablet:pb-24 laptop:pb-32">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Book a call</p>
            <h2 className="custom-h2 custom-h2-bold mt-4 text-balance">Pick a time that works for you</h2>
            <iframe
              src={site.bookingEmbedUrl}
              title="Book a call with Ndubuisi Marvellous"
              loading="lazy"
              className="mt-6 h-[760px] w-full border border-ink/15 bg-white"
            />
            <p className="custom-p custom-p-sm mt-3 text-ink/60">
              Calendar not loading?{' '}
              <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="underline">
                Open it in a new tab
              </a>
              .
            </p>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}

export default ContactMe
