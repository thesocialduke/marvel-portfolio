import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Testimonial } from '../data/site'
import { cn } from '../lib/utils'
import { TestimonialCard } from './TestimonialCard'

// Reviews as a row of cards (see TestimonialCard). When the cards don't all fit (phones, or more than three reviews), the row scrolls sideways
// with the next card peeking in, and arrows plus a dash indicator appear to move through it.
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [overflows, setOverflows] = useState(false)
  const [index, setIndex] = useState(0)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setOverflows(track.scrollWidth > track.clientWidth + 1)
    // The card whose left edge is closest to the track's left edge is the current one.
    const cards = [...track.children] as HTMLElement[]
    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0
    let best = 0
    cards.forEach((card, i) => {
      if (Math.abs(card.offsetLeft - pad - track.scrollLeft) < Math.abs(cards[best].offsetLeft - pad - track.scrollLeft)) best = i
    })
    // At the end of the row the last card can't reach the left edge, so count it as current.
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) best = cards.length - 1
    setIndex(best)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    track.addEventListener('scroll', measure, { passive: true })
    return () => {
      observer.disconnect()
      track.removeEventListener('scroll', measure)
    }
  }, [measure])

  if (items.length === 0) return null

  const goTo = (i: number) => {
    const track = trackRef.current
    const card = track?.children[Math.max(0, Math.min(items.length - 1, i))] as HTMLElement | undefined
    if (track && card) track.scrollTo({ left: card.offsetLeft - (parseFloat(getComputedStyle(track).paddingLeft) || 0), behavior: 'smooth' })
  }
  const atStart = index === 0
  const atEnd = index === items.length - 1

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <h2 className="custom-h2 custom-h2-bold">Testimonials</h2>
        {overflows && (
          <div className="flex shrink-0 gap-2">
            <ArrowButton label="Previous review" disabled={atStart} onClick={() => goTo(index - 1)}>
              <ArrowLeft className="size-4" strokeWidth={2} />
            </ArrowButton>
            <ArrowButton label="Next review" disabled={atEnd} onClick={() => goTo(index + 1)}>
              <ArrowRight className="size-4" strokeWidth={2} />
            </ArrowButton>
          </div>
        )}
      </div>

      {/* Scrolls sideways only when the cards don't fit; snap keeps a card's edge aligned. On
          phones the row runs to the screen edges so the next card peeks in from the side. */}
      <div
        ref={trackRef}
        className="relative -mx-6 mt-8 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 tablet:mx-0 tablet:scroll-px-0 tablet:px-0 [scrollbar-width:none] laptop:mt-10 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <TestimonialCard
            key={t.name + i}
            t={t}
            className={cn(
              'shrink-0 basis-[88%] snap-start',
              items.length === 1 ? 'tablet:basis-full' : 'tablet:basis-[calc((100%-20px)/2)]',
              // Three across only once there's room for the role text beside the photo.
              items.length >= 3 && 'wide:basis-[calc((100%-40px)/3)]',
            )}
          />
        ))}
      </div>

      {/* Dash indicator: the long dark dash marks the current card. */}
      {overflows && (
        <div className="mt-6 flex justify-center gap-1.5">
          {items.map((t, i) => (
            <button
              key={t.name + i}
              type="button"
              aria-label={`Show review ${i + 1} of ${items.length}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className="grid h-6 cursor-pointer place-items-center outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1 transition-[width,background-color] duration-200',
                  i === index ? 'w-12 bg-ink' : 'w-7 bg-ink/20',
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ArrowButton({ label, disabled, onClick, children }: { label: string; disabled: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-11 cursor-pointer place-items-center rounded-full border border-ink/15 bg-card text-ink transition-[opacity,background-color,color] duration-150 hover:bg-ink hover:text-page active:scale-[0.96] disabled:cursor-default disabled:opacity-35 disabled:hover:bg-card disabled:hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      {children}
    </button>
  )
}
