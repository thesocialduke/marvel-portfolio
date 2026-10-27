import type { Testimonial } from '../data/site'
import { cn } from '../lib/utils'

// One review card (after maple.finance's "Client Testimonials"): company logo on top, the quote
// large, and the reviewer's name, role and square photo at the bottom. Used in the home page
// row and on its own at the end of a case study.
export function TestimonialCard({ t, className }: { t: Testimonial; className?: string }) {
  return (
    <figure className={cn('flex flex-col border border-ink/15 bg-card p-5 tablet:p-8', className)}>
      {/* Logos keep their real colours. One whose colours would vanish on the dark-mode
          card has a second version (logoDark) that swaps in there. */}
      <div className="flex h-7 items-center tablet:h-9">
        {t.logo ? (
          <>
            <img
              src={t.logo}
              alt={t.company ?? ''}
              className={cn('h-5 w-auto tablet:h-7', t.logoClassName, t.logoDark && 'testimonial-logo-light')}
              loading="lazy"
              decoding="async"
            />
            {t.logoDark && (
              <img src={t.logoDark} alt={t.company ?? ''} className={cn('testimonial-logo-dark h-5 w-auto tablet:h-7', t.logoClassName)} loading="lazy" decoding="async" />
            )}
          </>
        ) : (
          t.company && <span className="font-modernist text-2xl font-bold tracking-tight text-ink">{t.company}</span>
        )}
      </div>

      {/* Phones: smaller text and the paragraph break dropped, so a long review stays a
          comfortable height to swipe through. */}
      <blockquote className="mt-4 flex-1 font-poppins text-base leading-[1.45] text-ink tablet:mt-6 tablet:text-xl tablet:leading-snug tablet:whitespace-pre-line">
        “{t.quote}”
      </blockquote>

      <figcaption className="mt-6 flex items-end justify-between gap-4 tablet:mt-10 tablet:gap-5">
        <div className="min-w-0">
          <cite className="block font-poppins text-[15px] font-semibold text-ink not-italic tablet:text-base">{t.name}</cite>
          <p className="mt-0.5 font-poppins text-[13px] leading-snug text-muted-foreground tablet:mt-1 tablet:text-sm">{t.role}</p>
        </div>
        {t.avatar && (
          <img
            src={t.avatar}
            alt={t.name}
            width={92}
            height={92}
            loading="lazy"
            decoding="async"
            className="size-14 shrink-0 object-cover grayscale outline outline-1 -outline-offset-1 outline-black/10 tablet:size-18 laptop:size-23"
          />
        )}
      </figcaption>
    </figure>
  )
}

export default TestimonialCard
