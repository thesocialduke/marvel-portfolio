import { CaseStudyPager } from '../components/CaseStudyPager'
import { Grid } from '../components/Grid'
import { ImageStrip, type StripImage } from '../components/ImageStrip'
import { Layout } from '../components/Layout'
import { LetsTalkPanel } from '../components/LetsTalkPanel'
import { TestimonialsSection } from '../components/ui/testimonials-2'
import { FramerCarouselThumbnails } from '../components/ui/framer-thumbnails'
import { useCaseStudyJsonLd } from '../hooks/useCaseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from '../data/site'

const RED = 'rgb(220 38 38)'

const eventCarouselImages = bitgetCaseStudy.gallery!.map((photo, i) => ({
  id: i + 1,
  url: photo.image,
  title: photo.caption ?? '',
}))

const analyticsImages: StripImage[] = [
  {
    src: '/case-studies/bitget/account-overview.webp',
    alt: 'X account analytics for Bitget Africa from June 2024 to May 2025, showing 16.4M impressions and a peak of 3,500 new followers in one day',
    width: 1600,
    height: 1480,
    label: 'X analytics',
  },
  {
    src: '/case-studies/bitget/instagram-profile.webp',
    alt: 'Bitget Africa Instagram profile at 10.8K followers, grown from zero',
    width: 800,
    height: 1061,
    label: 'Instagram',
  },
  {
    src: '/case-studies/bitget/telegram-stats.webp',
    alt: 'Bitget Africa Telegram group statistics for 12 to 19 October 2025: 61.1K members and 1.1M messages',
    width: 819,
    height: 566,
    label: 'Telegram',
  },
  {
    src: '/case-studies/bitget/youtube-channel.webp',
    alt: 'Bitget Africa YouTube channel home page, with training sessions, videos and Shorts',
    width: 1000,
    height: 1239,
    label: 'YouTube',
  },
]

const corePrograms = [
  {
    stat: '20,000+',
    statLabel: 'New users from ambassadors',
    title: 'Ambassador program',
    body: 'I built the Bitget Africa ambassador program from scratch: recruiting, training and incentivizing advocates.',
  },
  {
    stat: '1M+',
    statLabel: 'Views on live programming',
    title: 'Education programming',
    body: 'AMAs, product LIVE sessions, audio spaces and quizzes that help new users activate. Hosted across X, YouTube Live & Telegram',
  },
  {
    stat: '60%+',
    statLabel: 'New-member retention',
    title: 'Gamified engagement',
    body: 'Challenges, mini-games and recurring programs that sustain 3 to 5% weekly community growth.',
  },
  {
    stat: '70+',
    statLabel: 'Creator and partner network',
    title: 'B2B relationships across Africa',
    body: 'Creators, KOLs, universities, grassroots communities, affiliates, P2P traders and community leaders, with clear paths to advocacy, UGC and cross-community growth.',
  },
  {
    stat: '#1',
    statLabel: 'Ranking on Google',
    title: 'SEO and educational content',
    body: 'Community-led articles ranking #1 on Google in Nigeria, Kenya, 1st page in Ethiopia on crypto-related user education.',
  },
  {
    stat: 'Loop',
    statLabel: 'Community to product and support',
    title: 'Product feedback loop',
    body: 'Recurring community feedback becomes structured insight for product and support teams, covering friction points and emerging trends.',
  },
]

const offlineStats = [
  { value: '84.35%', label: 'CSAT across offline events' },
]

export function BitgetCaseStudy() {
  useDocumentMeta({
    title: 'Bitget Africa Community Growth Case Study | Ndubuisi Marvellous',
    description:
      'How I led social media and community for Bitget across Africa, driving 40M+ impressions and making Bitget Wallet Nigeria’s #1 downloaded crypto app.',
    image: '/case-studies/bitget.jpg',
    ogType: 'article',
  })
  useCaseStudyJsonLd({
    path: '/bitget',
    title: 'Growing Bitget’s community across Africa',
    description: bitgetCaseStudy.summary,
    image: '/case-studies/bitget.jpg',
    clientName: 'Bitget',
  })

  return (
    <Layout>
      {/* HERO */}
      <section className="case-study-serif pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="pb-12 laptop:pb-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Case study · Bitget Africa</p>
            </div>
            <h1 className="custom-h1 custom-h1-bold relative max-w-4xl text-balance">Growing Bitget’s community across Africa</h1>
            <p className="custom-p mt-6 max-w-2xl text-ink/70">{bitgetCaseStudy.summary}</p>

            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-ink/15 pt-8 tablet:grid-cols-3">
              <div>
                <p className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  40M+
                </p>
                <p className="custom-p mt-2 text-ink/60">Total impressions</p>
              </div>
              <div>
                <p className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  150K+
                </p>
                <p className="custom-p mt-2 text-ink/60">New followers gained</p>
              </div>
              <div>
                <p className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  #1
                </p>
                <p className="custom-p mt-2 text-ink/60">Downloaded crypto app in Nigeria (Bitget Wallet)</p>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      {/* SNAPSHOT */}
      <section className="case-study-serif">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="grid grid-cols-1 gap-6 bg-hyacinth/5 p-6 tablet:grid-cols-3 tablet:p-8">
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Role</p>
                <p className="custom-h4 custom-h4-bold mt-1">{bitgetCaseStudy.roleTitle}</p>
              </div>
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Region</p>
                <p className="custom-h4 custom-h4-bold mt-1">East, West and South Africa</p>
              </div>
              <div>
                <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/50 uppercase">Channels</p>
                <p className="custom-h4 custom-h4-bold mt-1">X, Telegram, Instagram, YouTube, UGC, IRL events</p>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      {/* ACCOUNT ANALYTICS */}
      <section className="case-study-serif pt-10 pb-12 tablet:pt-12 tablet:pb-14 laptop:pt-14 laptop:pb-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <ImageStrip images={analyticsImages} />
          </div>
        </Grid>
      </section>

      {/* FEATURED STORY (dark band) */}
      <section className="on-dark case-study-serif py-12 tablet:py-14 laptop:py-24" style={{ background: 'var(--color-graphite)' }}>
        <Grid className="items-center gap-y-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 shrink-0" style={{ background: RED }} />
              <p className="custom-p custom-p-sm tracking-[0.1em] uppercase" style={{ color: 'rgb(231 230 226 / 0.8)' }}>
                01. Featured story
              </p>
            </div>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance" style={{ color: 'var(--color-page)' }}>
              When OKX left Nigeria, Bitget took the top spot
            </h2>
            <div className="mt-8 border-t" style={{ borderColor: 'rgb(231 230 226 / 0.2)' }}>
              <div className="border-b py-5" style={{ borderColor: 'rgb(231 230 226 / 0.2)' }}>
                <p className="custom-p" style={{ color: 'var(--color-page)' }}>
                  OKX announced it was ending operations in Nigeria, leaving many users looking for a new home.
                </p>
              </div>
              <div className="border-b py-5" style={{ borderColor: 'rgb(231 230 226 / 0.2)' }}>
                <p className="custom-p custom-p-sm tracking-[0.1em] uppercase" style={{ color: 'rgb(231 230 226 / 0.6)' }}>
                  What I did
                </p>
                <p className="custom-p mt-2" style={{ color: 'var(--color-page)' }}>
                  I led social strategy through the exit and got Bitget Wallet trending while users chose where to go
                  next. The narrative centered on trust, safety and security.
                </p>
              </div>
              <div className="border-b py-5" style={{ borderColor: 'rgb(231 230 226 / 0.2)' }}>
                <p className="custom-p custom-p-sm tracking-[0.1em] uppercase" style={{ color: 'rgb(231 230 226 / 0.6)' }}>
                  The result
                </p>
                <p className="custom-p mt-2" style={{ color: 'var(--color-page)' }}>
                  Bitget Wallet became the most downloaded crypto app in Nigeria, and “Bitget” trended nationally.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full flex flex-col gap-5 tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            <img loading="lazy" decoding="async"
              src="/case-studies/bitget/okx-exit.webp"
              alt="Screenshots of the OKX Nigeria exit trending on X, Bitget Wallet ranked #1 in the Nigerian App Store's Top Charts, and the announcement that Bitget Wallet is Nigeria's #1 downloaded app"
              width={1400}
              height={1111}
              className="block h-auto w-full"
            />
          </div>
        </Grid>
      </section>

      {/* CORE PROGRAMS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-10 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">02. The programs</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Core programs</h2>
            <p className="custom-p mt-4 max-w-xl text-ink/60">Six programs sit behind the numbers at the top of this page.</p>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-1 gap-5 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-12 laptop:col-start-2 laptop:grid-cols-3">
            {corePrograms.map((program) => (
              <div key={program.title} className="flex flex-col bg-hyacinth/5 p-6 tablet:p-8">
                <p className="custom-h1 custom-h1-bold text-[2.75rem] normal-case" style={{ color: RED }}>
                  {program.stat}
                </p>
                <p className="custom-p custom-p-sm mt-3 tracking-[0.1em] uppercase">{program.statLabel}</p>
                <p className="custom-h4 custom-h4-bold mt-6">{program.title}</p>
                <p className="custom-p mt-2 text-ink/60">{program.body}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* EVENTS */}
      <section className="case-study-serif pt-12 tablet:pt-14 laptop:pt-24">
        <Grid className="pb-8 tablet:pb-10">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">03. Events</p>
            <div className="mt-4 flex items-end justify-between gap-4 tablet:justify-start tablet:gap-12">
              <h2 className="custom-h2 custom-h2-bold custom-h2-lg min-w-0 flex-1 text-balance tablet:max-w-sm tablet:flex-none">
                Offline events &amp; activations
              </h2>
              <div className="shrink-0 text-right tablet:pb-1 tablet:text-left">
                {offlineStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="custom-h1 custom-h1-bold text-[1.75rem] leading-none tablet:text-[2.25rem]" style={{ color: RED }}>
                      {stat.value}
                    </p>
                    <p className="custom-p custom-p-sm mt-2 max-w-[7.5rem] text-ink/60 tablet:max-w-[11rem]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </section>

      <section className="case-study-serif pb-12 tablet:pb-14 laptop:pb-18">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <FramerCarouselThumbnails images={eventCarouselImages} />
          </div>
        </Grid>
      </section>


      {/* TESTIMONIAL */}
      <section className="case-study-serif pt-2 pb-10 tablet:pt-4 tablet:pb-12 laptop:pt-6 laptop:pb-14">
        <Grid>
          <div className="col-span-full px-6 tablet:col-span-6 tablet:col-start-2 tablet:px-12 laptop:col-span-12 laptop:col-start-2">
            <TestimonialsSection
              quote={bitgetCaseStudy.testimonial!.quote}
              name={bitgetCaseStudy.testimonial!.name}
              role={bitgetCaseStudy.testimonial!.role}
              avatarSrc="/testimonials/aka-leung.jpg?v=2"
              avatarAlt={bitgetCaseStudy.testimonial!.name}
              avatarFallback={bitgetCaseStudy.testimonial!.name.charAt(0)}
            />
          </div>
        </Grid>
      </section>

      <LetsTalkPanel />


      <CaseStudyPager
        prev={{ href: binanceCaseStudy.href, title: binanceCaseStudy.title }}
        next={{ href: baseCaseStudy.href, title: baseCaseStudy.title }}
      />
    </Layout>
  )
}

export default BitgetCaseStudy
