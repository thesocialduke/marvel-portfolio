import { EmailCopyButton } from '../components/EmailCopyButton'
import { ButtonLink } from '../components/Button'
import { CvMenu } from '../components/CvMenu'
import { site } from '../data/site'
import { SocialLinks } from '../components/SocialLinks'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

// The kinds of roles on offer, listed on the page (keep in sync with the meta description,
// scripts/prerender.mjs and public/llms.txt).
const roles = [
  'Product marketing and growth',
  'Social media management and content creation',
  'Influencer, ambassador and KOL management',
  'Community growth',
]

export function ContactMe() {
  useDocumentMeta({
    title: 'Contact | Ndubuisi Marvellous',
    description:
      'Get in touch with Ndubuisi Marvellous, open to full-time and contract roles in product marketing, growth, social media, KOL and community in fintech, payments, AI, SaaS and Web3. Replies within 8 hours.',
  })

  return (
    <Layout>
      <section className="case-study-serif pt-18 pb-14 tablet:pt-[5rem] tablet:pb-18 laptop:pt-[8.5rem] laptop:pb-24">
        <Grid className="items-start gap-y-12 laptop:gap-y-0">
          {/* Details */}
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <h1 className="custom-h1 custom-h1-bold text-balance">Let’s work together</h1>
            <p className="custom-p mt-6 max-w-xl text-ink/70">Open to full-time and contract marketing roles in:</p>
            <ul className="mt-3 max-w-xl space-y-2">
              {roles.map((role) => (
                <li key={role} className="custom-p flex items-baseline gap-3 text-ink">
                  <span aria-hidden="true" className="inline-block size-1.5 shrink-0 translate-y-[-0.15em] bg-red-600" />
                  {role}
                </li>
              ))}
            </ul>
            <p className="custom-p mt-4 max-w-xl text-ink/70">Ready to relocate for the right opportunity.</p>
            <p className="custom-p mt-3 max-w-xl text-ink/70">
              Industries: fintech, payments and cross-border payments, AI, SaaS and Web3.
            </p>
            <p className="custom-p custom-p-sm mt-4 inline-flex items-center gap-2 text-ink">
              <span aria-hidden="true" className="inline-block size-2 bg-red-600" />I reply within 8 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <EmailCopyButton tone="light" compact />
              <ButtonLink to={site.linkedin} external fullWidth={false}>
                LinkedIn ↗
              </ButtonLink>
              <CvMenu variant="button" label="My Resume ▾" />
            </div>

            <div className="mt-8 max-w-3xl border-t border-ink/15 pt-4">
              <SocialLinks className="text-ink" />
            </div>
          </div>

        </Grid>
      </section>
    </Layout>
  )
}

export default ContactMe
