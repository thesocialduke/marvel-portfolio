import { Accordion } from '../components/Accordion'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { LetsTalkPanel } from '../components/LetsTalkPanel'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { JsonLd } from '../components/JsonLd'
import { faqs, services, site } from '../data/site'

const RED = 'rgb(220 38 38)'

// Taken from the "What does working together look like?" FAQ answer.
const howItWorks = [
  { title: 'Discovery call', body: 'A short call to understand your goals.' },
  { title: 'Strategy and plan', body: 'A strategy and content plan built around your channels and audience.' },
  { title: 'Execution', body: 'Content and community run across your social channels.' },
  { title: 'Regular updates', body: 'You always know what’s live and what’s performing.' },
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
      'Hire a Web3 and fintech social media and community manager: strategy, community building, content creation, creator/KOL partnerships and events.',
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
        description: service.body,
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
        <Grid className="pb-12 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Services</p>
            </div>
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance">I’m open to new projects.</h1>
            <p className="custom-p mt-6 max-w-2xl text-ink/70">See what I can do for you below.</p>
          </div>
        </Grid>
      </section>

      {/* WHAT I DO */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
        <Grid>
          <div className="col-span-full grid grid-cols-1 gap-5 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-12 laptop:col-start-2 laptop:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-hyacinth/5 p-6 tablet:p-8">
                <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
                <h3 className="custom-h4 custom-h4-bold mt-5 text-balance">{service.title}</h3>
                <p className="custom-p mt-3 text-ink/70">{service.body}</p>
              </div>
            ))}
            <div className="flex flex-col justify-between gap-8 p-6 tablet:p-8" style={{ background: RED }}>
              <div>
                <h3 className="custom-h4 custom-h4-bold text-balance" style={{ color: '#fff' }}>
                  Not sure what you need?
                </h3>
                <p className="custom-p mt-3" style={{ color: 'rgb(255 255 255 / 0.85)' }}>
                  Book a call and we’ll work it out together.
                </p>
              </div>
              <div className="flex">
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
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">01. How it works</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">What working together looks like</h2>
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
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">02. FAQs</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Questions people ask</h2>
          </div>
        </Grid>
        <Grid className="min-h-[248px]">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <Accordion items={faqs} />
          </div>
        </Grid>
      </section>

      <LetsTalkPanel />
    </Layout>
  )
}
