import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { VideoGallery } from '../components/VideoGallery'
import { useCaseStudyJsonLd } from '../hooks/useCaseStudyJsonLd'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { baseCaseStudy, bitgetCaseStudy, site, type CaseStudyData } from '../data/site'

// Supports a light `**bold**` markup inside plain-text data strings.
function withBold(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <b key={i}>{part.slice(2, -2)}</b> : <span key={i}>{part}</span>,
  )
}

function ProofGrid({ photos }: { photos: { image: string; caption?: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 tablet:grid-cols-4">
      {photos.map((photo) => (
        <div key={photo.image} className="group relative aspect-square overflow-hidden">
          <img
            src={photo.image}
            alt={photo.caption ?? ''}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
          />
          {photo.caption && (
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-graphite/85 via-graphite/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="custom-p custom-h4-invert">{photo.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Meta descriptions should stay under ~160 characters; the on-page summary
// is written for reading, not for a search snippet, so it's trimmed at a
// word boundary rather than reused verbatim.
function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`
}

export function CaseStudy({
  data,
  image,
  clientName,
}: {
  data: CaseStudyData
  image?: string
  clientName?: string
}) {
  let section = 2

  useDocumentMeta({
    title: `${data.title} | Case Study | Ndubuisi Marvellous`,
    description: truncate(data.summary, 155),
    image,
  })
  useCaseStudyJsonLd({
    path: data.href,
    title: data.title,
    description: data.summary,
    image: image ?? '/avatar.jpg',
    clientName: clientName ?? data.title,
  })

  return (
    <Layout>
      <section className="case-study-serif relative w-full bg-hyacinth/5 pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="relative space-y-4 py-18">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <p className="custom-p custom-p-sm mb-4 tracking-wide text-ink/60 uppercase">{data.eyebrow}</p>
            <h1 className="custom-h1 relative text-balance">{data.title}</h1>
          </div>
        </Grid>
      </section>

      <section className="case-study-serif">
        <Grid className="items-start space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2 laptop:row-start-1">
            <h3 className="custom-h3 relative text-balance">01. Overview</h3>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8 laptop:row-start-1">
            <h3 className="custom-h3 relative text-balance">{data.summary}</h3>
          </div>
        </Grid>
      </section>

      <section className="case-study-serif">
        <Grid className="items-start space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2 laptop:row-start-1">
            <div className="space-y-text-block text-left">
              <h3 className="custom-h3 relative text-balance">02. My Role</h3>
              <h3 className="custom-h3 relative text-balance">{data.roleTitle}</h3>
            </div>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8 laptop:row-start-1">
            <div className="space-y-text-block text-left">
              {data.roleBullets.map((bullet) => (
                <h3 key={bullet} className="custom-h3 relative text-balance">
                  {withBold(bullet)}
                </h3>
              ))}
            </div>
          </div>
        </Grid>
      </section>

      {data.beforeAfter && (
        <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
          <Grid>
            <div className="col-span-full col-start-1 pb-12 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
              <h3 className="custom-h3 relative text-balance">0{++section}. Before → After</h3>
            </div>
          </Grid>

          {(data.beforeImages || data.afterImages) && (
            <Grid className="pb-12">
              <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
                <div className="grid grid-cols-1 gap-8 tablet:grid-cols-5 tablet:gap-6">
                  {data.beforeImages && (
                    <div className="tablet:col-span-2">
                      <p className="custom-p custom-p-sm mb-4 tracking-wide text-ink/60 uppercase">Before</p>
                      <div className="grid grid-cols-2 gap-3">
                        {data.beforeImages.map((img) => (
                          <div key={img.image} className="aspect-[9/16] overflow-hidden">
                            <img src={img.image} alt={img.caption ?? ''} className="size-full object-cover grayscale" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.afterImages && (
                    <div className="tablet:col-span-3">
                      <p className="custom-p custom-p-sm mb-4 tracking-wide text-hyacinth uppercase">After</p>
                      <div className="grid grid-cols-3 gap-3">
                        {data.afterImages.map((img) => (
                          <div key={img.image} className="group relative aspect-[9/16] overflow-hidden">
                            <img src={img.image} alt={img.caption ?? ''} className="size-full object-cover" />
                            {img.caption && (
                              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-graphite/85 via-graphite/10 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="custom-p custom-h4-invert">{img.caption}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
          )}

          <Grid>
            <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
              <div className="space-y-6">
                {data.beforeAfter.map((row) => (
                  <div key={row.before} className="flex flex-wrap items-center gap-3">
                    <span className="custom-p text-ink/60">{row.before}</span>
                    <span className="text-hyacinth" aria-hidden="true">
                      →
                    </span>
                    <span className="custom-h4 custom-h4-bold">{row.after}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </section>
      )}

      {data.videos && data.videos.length > 0 && (
        <VideoGallery title="AI Creative Direction" videos={data.videos} orientation="landscape" rounded={0} showDescriptions />
      )}

      {data.proofSections && data.proofSections.length > 0 && (
        <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
          <Grid>
            <div className="col-span-full col-start-1 pb-12 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
              <h3 className="custom-h3 relative text-balance">0{++section}. Proof</h3>
            </div>
          </Grid>
          <div className="space-y-10">
            {data.proofSections.map((proof) => (
              <Grid key={proof.title}>
                <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
                  <h4 className="custom-h4 custom-h4-bold mb-4">{proof.title}</h4>
                  <ProofGrid photos={proof.photos} />
                </div>
              </Grid>
            ))}
          </div>
        </section>
      )}

      {data.results && (
        <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
          <Grid>
            <div className="col-span-full col-start-1 pb-12 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
              <h3 className="custom-h3 relative text-balance">0{++section}. Results</h3>
            </div>
            <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 tablet:grid-cols-3">
                {data.results.map((stat) => (
                  <div key={stat.label}>
                    <h2 className="custom-h1 text-balance">{stat.value}</h2>
                    <p className="custom-p mt-2 text-ink/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </section>
      )}

      {data.keyMoment && (
        <section className="case-study-serif">
          <Grid className="py-12">
            <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
              <p className="custom-h2 custom-h2-sm relative text-balance">{data.keyMoment}</p>
            </div>
          </Grid>
        </section>
      )}

      {data.gallery && data.gallery.length > 0 && (
        <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
          <Grid>
            <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
              <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3">
                {data.gallery.map((photo) => (
                  <div key={photo.image} className="group relative aspect-square overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.caption ?? ''}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    {photo.caption && (
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-graphite/85 via-graphite/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="custom-p custom-h4-invert">{photo.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </section>
      )}

      {data.testimonial && (
        <section className="case-study-serif py-12 tablet:py-14 laptop:py-18">
          <Grid>
            <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-10 laptop:col-start-3">
              <blockquote className="relative space-y-8 bg-hyacinth/5 px-6 py-10 tablet:px-12 tablet:py-14">
                <svg className="size-10 text-hyacinth/25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.352 6C6.516 8.44 4.8 11.85 4.8 15.5c0 3.59 2.36 5.9 5.192 5.9 2.52 0 4.48-1.96 4.48-4.44 0-2.32-1.7-4.16-3.92-4.16-.26 0-.5.02-.76.08.34-1.78 1.46-3.4 3.06-4.65L9.352 6zm10.76 0c-2.836 2.44-4.552 5.85-4.552 9.5 0 3.59 2.36 5.9 5.192 5.9 2.52 0 4.48-1.96 4.48-4.44 0-2.32-1.7-4.16-3.92-4.16-.26 0-.5.02-.76.08.34-1.78 1.46-3.4 3.06-4.65L20.112 6z" />
                </svg>
                <p className="custom-h2 custom-h2-sm relative text-balance">{data.testimonial.quote}</p>
                <footer className="flex items-center gap-4">
                  <span className="custom-h4 flex size-12 shrink-0 items-center justify-center bg-hyacinth/10 text-hyacinth">
                    {data.testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <span className="custom-h4 block">{data.testimonial.name}</span>
                    <span className="custom-p block text-ink/60">{data.testimonial.role}</span>
                  </span>
                </footer>
              </blockquote>
            </div>
          </Grid>
        </section>
      )}

      <section className="case-study-serif">
        <Grid className="pt-12 pb-8 tablet:pt-18 laptop:pt-24 laptop:pb-12">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h3 className="custom-h3 relative text-balance">
              {data.closing.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  <b>{line}</b>
                </span>
              ))}
            </h3>
          </div>
        </Grid>
      </section>

      {/* NEXT / PREVIOUS / CTA */}
      <section className="case-study-serif border-t border-ink/15 py-12 tablet:py-14 laptop:py-18">
        <Grid className="items-center gap-y-8">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Previous case study</p>
            <Link
              to={baseCaseStudy.href}
              className="custom-h2 relative mt-2 inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              ← {baseCaseStudy.title}
            </Link>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-3 laptop:col-start-7">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">Next case study</p>
            <Link
              to={bitgetCaseStudy.href}
              className="custom-h2 relative mt-2 inline-block text-balance underline decoration-1 underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
            >
              {bitgetCaseStudy.title} →
            </Link>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10 laptop:justify-self-end">
            <ButtonLink to={site.bookingUrl} external beam>
              Book a call
              <svg aria-hidden="true" className="size-[1.1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </ButtonLink>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}
