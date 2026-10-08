import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { site } from '../data/site'

const RED = 'rgb(220 38 38)'

const socials = [
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Instagram', href: site.instagram },
  { label: 'Telegram', href: site.telegram },
]

export function ContactMe() {
  useDocumentMeta({
    title: 'Contact | Ndubuisi Marvellous',
    description: 'Get in touch with Ndubuisi Marvellous for social media strategy, growth, and community work.',
  })

  return (
    <Layout>
      <section className="case-study-serif pt-18 pb-14 tablet:pt-[5rem] tablet:pb-18 laptop:pt-[8.5rem] laptop:pb-24">
        <Grid className="items-start gap-y-12 laptop:gap-y-0">
          {/* Details */}
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-5 laptop:col-start-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Contact</p>
            </div>
            <h1 className="custom-h1 custom-h1-bold text-balance">Let’s work together</h1>
            <p className="custom-p mt-6 max-w-md text-ink/70">
              Open to full-time and contract roles, and ready to relocate for the right opportunity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                to={`mailto:${site.email}`}
                external
                tone="red"
                className="min-w-0 px-3 text-[3.1vw] tracking-tight whitespace-nowrap tablet:px-6 tablet:text-[clamp(0.8rem,1.9vw,1rem)] laptop:text-[clamp(0.72rem,1.2vw,1rem)]"
              >
                {site.email}
              </ButtonLink>
              <ButtonLink to={site.cvUrl} download fullWidth={false}>
                Download CV ↓
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-ink/15 pt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="custom-p custom-p-sm tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Book a call</p>
            <iframe
              src={site.bookingEmbedUrl}
              title="Book a call with Ndubuisi Marvellous"
              loading="lazy"
              className="mt-4 h-[640px] w-full border border-ink/15 bg-white tablet:h-[700px]"
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
