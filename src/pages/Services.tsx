import { Accordion } from '../components/Accordion'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { JsonLd } from '../components/JsonLd'
import { faqs, services, site } from '../data/site'
import { cn } from '../lib/utils'

const RED = 'var(--color-red-600)'

// Taken from the "What does working together look like?" FAQ answer.
const howItWorks = [
  { title: 'Understand the business', body: 'Your product, audience, challenges and goals, and what growth means for your team.' },
  { title: 'Build the strategy', body: 'A practical plan for positioning, content, community, partnerships, channels and success metrics.' },
  { title: 'Execute and collaborate', body: 'I work with your team to run campaigns, content and community programs, aligned with your goals.' },
  { title: 'Measure, learn, and improve', body: 'Track results against agreed goals, learn what works, and keep improving the strategy.' },
]

const arrow = (
  <svg aria-hidden="true" className="size-[1.1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export function Services() {
  useDocumentMeta({
    title: 'Social Media & Community Manager Services | Ndubuisi Marvellous',
    description:
      'Web3 and fintech social media and community manager, open to work: social media strategy, community-led growth, partnerships and ecosystem growth, and offline events.',
  })

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  const servicesLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services by Ndubuisi Marvellous',
    itemListElement: services.map((service, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: [service.tagline, service.body.replace(/\n\n/g, ' ')].filter(Boolean).join(' '),
        provider: { '@type': 'Person', name: 'Ndubuisi Marvellous', url: 'https://ndubuisimarvellous.com/' },
        areaServed: 'Africa',
      },
    })),
  }

  return (
    <Layout>
      <JsonLd data={faqLd} />
      <JsonLd data={servicesLd} />
      {/* HERO */}
      <section className="case-study-serif pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance">I’m open to work.</h1>
          </div>
        </Grid>
      </section>

      {/* WHAT I DO: sits close under the heading it answers */}
      <section className="case-study-serif pt-8 pb-12 tablet:pt-10 tablet:pb-14 laptop:pt-12 laptop:pb-18">
        <Grid>
          <div className="col-span-full grid grid-cols-1 gap-5 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-12 laptop:col-start-2 laptop:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-hyacinth/5 p-6 tablet:p-8">
                <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
                <h2 className="custom-h4 custom-h4-bold mt-5 text-balance">{service.title}</h2>
                {service.body.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="custom-p mt-3 text-pretty text-ink/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
            {/* Fills the leftover slot in the last row; when the rows are already full it
                spans a whole row instead (text left, button right on laptops), so it never
                sits alone next to empty space whatever the number of services. */}
            <div
              className={cn(
                'flex flex-col justify-between gap-8 p-6 tablet:p-8',
                services.length % 2 === 0 && 'tablet:col-span-2',
                services.length % 3 === 0 && 'laptop:col-span-3 laptop:flex-row laptop:items-center',
                services.length % 3 === 1 && 'laptop:col-span-2',
              )}
              style={{ background: RED }}
            >
              <div>
                <h2 className="custom-h4 custom-h4-bold text-balance" style={{ color: '#fff' }}>
                  Not sure what you need?
                </h2>
              </div>
              <div className="flex shrink-0">
                <ButtonLink to={site.bookingUrl} external fullWidth={false} className="bg-page text-ink ring-page hover:text-ink">
                  Book a call
                  {arrow}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      {/* HOW IT WORKS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
        <Grid className="pb-12">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <h2 className="custom-h2 custom-h2-bold text-balance">What working together looks like</h2>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <ProcessTimeline steps={howItWorks} />
          </div>
        </Grid>
      </section>

      {/* FAQS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
        <Grid className="pb-8">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <h2 className="custom-h2 custom-h2-bold text-balance">Questions people ask</h2>
          </div>
        </Grid>
        <Grid className="min-h-[248px]">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <Accordion items={faqs} />
          </div>
        </Grid>
      </section>

    </Layout>
  )
}
