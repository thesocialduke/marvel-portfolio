import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { TestimonialsSection } from '../components/ui/testimonials-2'
import { ZoomParallax } from '../components/ui/zoom-parallax'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from '../data/site'

const RED = 'rgb(220 38 38)'

const [dogsPhoto, piPhoto, bitquestPhoto, stocksPhoto] = bitgetCaseStudy.proofSections![0].photos
const [okxNewsPhoto, okxTopAppPhoto] = bitgetCaseStudy.proofSections![1].photos
const [youtubeLivePhoto, twitterSpacePhoto] = bitgetCaseStudy.proofSections![2].photos

// ZoomParallax's first image (index 0) is the only one with no offset
// override, so it lands centered in the middle of the collage. The P2P
// Kenya photo is pinned there; later gallery additions fill the other
// slots in order instead of displacing it.
const CENTER_PHOTO_SRC = '/events/p2p-merchant-meetup-kenya.jpg'
const parallaxGallery = bitgetCaseStudy.gallery!
const centerPhotoIndex = parallaxGallery.findIndex((photo) => photo.image === CENTER_PHOTO_SRC)
const parallaxPhotos =
  centerPhotoIndex >= 0
    ? [parallaxGallery[centerPhotoIndex], ...parallaxGallery.filter((_, i) => i !== centerPhotoIndex)]
    : parallaxGallery

const campaigns = [
  {
    photo: dogsPhoto,
    stat: '2M+',
    title: '$DOGS listing',
  },
  {
    photo: piPhoto,
    stat: '1M+',
    title: '$PI listing',
  },
  {
    photo: bitquestPhoto,
    stat: '11.9M+',
    title: '#BitQuest',
    description: 'Total reach for a 7-day gamified campaign that simplified key crypto concepts.',
  },
  {
    photo: stocksPhoto,
    title: 'Stocks vs Crypto Showdown',
  },
]

const communityStats = [
  { value: '1M+', label: 'Views on AMAs, Spaces and YouTube Lives' },
  { value: '0 → 10K', label: 'Followers on a street UGC channel I scripted and edited' },
  { value: '20K', label: 'Users from the ambassador program' },
  { value: '3,500', label: 'Followers gained in one day' },
]

const offlineStats = [
  { value: '84.35%', label: 'CSAT across offline events' },
  { value: '100+', label: 'New users per event, on average' },
]

export function BitgetCaseStudy() {
  useDocumentMeta({
    title: 'Growing Bitget’s Community Across Africa — Case Study | Ndubuisi Marvellous',
    description: bitgetCaseStudy.summary,
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
                <h2 className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  30M+
                </h2>
                <p className="custom-p mt-2 text-ink/60">Total impressions</p>
              </div>
              <div>
                <h2 className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  150K+
                </h2>
                <p className="custom-p mt-2 text-ink/60">New followers gained</p>
              </div>
              <div>
                <h2 className="custom-h1 custom-h1-bold" style={{ color: RED }}>
                  #1
                </h2>
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
                <p className="custom-h4 custom-h4-bold mt-1">X, Telegram, YouTube, UGC, IRL events</p>
              </div>
            </div>
          </div>
        </Grid>
      </section>

      {/* FEATURED STORY */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-center gap-y-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">01. Featured story</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">When OKX left Nigeria, Bitget took the top spot</h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="custom-h4 custom-h4-bold tracking-[0.06em] uppercase">The moment</p>
                <p className="custom-p mt-2 text-ink/70">
                  OKX announced it was ending operations in Nigeria, leaving a large base of users looking for a new
                  home.
                </p>
              </div>
              <div>
                <p className="custom-h4 custom-h4-bold tracking-[0.06em] uppercase">What I did</p>
                <p className="custom-p mt-2 text-ink/70">
                  Spearheaded social media strategy during the OKX market exit from Nigeria, capitalizing on the
                  vacuum to trend Bitget Wallet and drive it to become the #1 most downloaded crypto app in Nigeria;
                  leaned into trust, safety, and security narrative themes to reduce adoption friction.
                </p>
              </div>
              <div>
                <p className="custom-h4 custom-h4-bold tracking-[0.06em] uppercase">The result</p>
                <p className="custom-p mt-2 text-ink/70">
                  Bitget Wallet became the #1 downloaded crypto app in Nigeria, and “Bitget” trended nationally.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full flex flex-col gap-5 tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            {[okxNewsPhoto, okxTopAppPhoto].map((photo) => (
              <div key={photo.image} className="relative aspect-[4/3] overflow-hidden">
                <img src={photo.image} alt={photo.caption ?? ''} className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                <p className="custom-p custom-h4-invert absolute inset-x-0 bottom-0 p-4">{photo.caption}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* CAMPAIGNS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-end gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">02. Campaigns</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Listings and challenges built to spread</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10">
            <p className="custom-p text-ink/60">
              Each campaign had one job: awareness and follower growth around a moment people already cared about.
            </p>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-2 gap-6 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-4 laptop:col-span-12 laptop:col-start-2">
            {campaigns.map((c) => (
              <div key={c.photo.image} className="flex flex-col gap-4">
                <div className="aspect-square overflow-hidden">
                  <img src={c.photo.image} alt={c.photo.caption ?? ''} className="size-full object-cover" />
                </div>
                {c.stat && <h3 className="custom-h1 custom-h1-bold text-[2rem]">{c.stat}</h3>}
                <div>
                  <p className="custom-h4 custom-h4-bold">{c.title}</p>
                  {c.description && <p className="custom-p mt-1 text-ink/60">{c.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* COMMUNITY & EDUCATION */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="gap-y-8 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-10 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">03. Community &amp; education</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 max-w-3xl text-balance">
              The fastest-growing Telegram community at Bitget Africa
            </h2>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-full grid grid-cols-2 gap-6 border-t border-ink/15 pt-8 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-4 laptop:col-span-12 laptop:col-start-2">
            {communityStats.map((stat, i) => (
              <div key={i}>
                <h3 className="custom-h1 custom-h1-bold text-[2.25rem]">{stat.value}</h3>
                <p className="custom-p mt-2 text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Grid>
        <Grid className="mt-10">
          <div className="col-span-full grid grid-cols-1 gap-5 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-2 laptop:col-span-12 laptop:col-start-2">
            {[youtubeLivePhoto, twitterSpacePhoto].map((photo) => (
              <div key={photo.image} className="relative aspect-[4/3] overflow-hidden">
                <img src={photo.image} alt={photo.caption ?? ''} className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                <p className="custom-p custom-h4-invert absolute inset-x-0 bottom-0 p-4">{photo.caption}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      {/* TESTIMONIAL */}
      <section className="case-study-serif py-2 tablet:py-4 laptop:py-6">
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

      {/* EVENTS */}
      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid className="items-end gap-y-6 pb-10 laptop:gap-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">04. Events</p>
            <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Offline events &amp; activations</h2>
          </div>
          <div className="col-span-full flex flex-wrap gap-8 tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10 laptop:justify-self-end">
            {offlineStats.map((stat, i) => (
              <div key={i}>
                <h3 className="custom-h1 custom-h1-bold text-[2rem]">{stat.value}</h3>
                <p className="custom-p mt-1 text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      <ZoomParallax images={parallaxPhotos.map((photo) => ({ src: photo.image, alt: photo.caption }))} />

      <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
        <Grid>
          <div className="col-span-full grid grid-cols-1 gap-x-6 gap-y-5 tablet:col-span-6 tablet:col-start-2 tablet:grid-cols-3 laptop:col-span-12 laptop:col-start-2">
            {bitgetCaseStudy.gallery!.map((photo) => {
              const [eventName, ...rest] = photo.caption!.split(', ')
              return (
                <div key={photo.image} className="flex flex-col gap-1 border-t border-ink/15 pt-4">
                  <p className="custom-h4 custom-h4-bold">{eventName}</p>
                  <p className="custom-p custom-p-sm tracking-wide text-ink/50 uppercase">{rest.join(' · ')}</p>
                </div>
              )
            })}
          </div>
        </Grid>
      </section>

      {/* NEXT / PREVIOUS / CTA */}
      <section className="case-study-serif border-t border-ink/15 py-12 tablet:py-14 laptop:py-18">
        <Grid className="items-center gap-y-8">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Previous case study</p>
            <Link
              to={binanceCaseStudy.href}
              className="custom-h2 relative mt-2 inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              ← {binanceCaseStudy.title}
            </Link>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-3 laptop:col-start-7">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Next case study</p>
            <Link
              to={baseCaseStudy.href}
              className="custom-h2 relative mt-2 inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              {baseCaseStudy.title} →
            </Link>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10 laptop:justify-self-end">
            <ButtonLink to="#contact">Work with me</ButtonLink>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}

export default BitgetCaseStudy
