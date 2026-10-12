import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialsSection } from './ui/testimonials-2'
import type { Testimonial } from '../data/site'
import { cn } from '../lib/utils'

// How long each review stays up before the next one appears.
const AUTO_ADVANCE_MS = 7000

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const [paused, setPaused] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const count = items.length

  // Only run the timer while the reviews are on screen.
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Move on by itself every few seconds, so visitors who never click still see every review.
  // The timer restarts whenever the review changes (including when someone clicks), stops
  // while the mouse is over the reviews or a control has keyboard focus, and doesn't run at
  // all for visitors who have "reduce motion" turned on.
  useEffect(() => {
    if (count < 2 || !inView || paused || reducedMotion) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), AUTO_ADVANCE_MS)
    return () => clearTimeout(timer)
  }, [index, count, inView, paused, reducedMotion])

  if (count === 0) return null

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count)

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* All slides share one grid cell, so the box is always as tall as the tallest
          review and switching never shifts the page. Mounting them all also preloads photos. */}
      <div className="grid">
        {items.map((t, i) => {
          const firstWord = t.quote.split(' ')[0]
          const active = i === index
          return (
            <div
              key={t.name + i}
              aria-hidden={!active}
              inert={!active}
              className={cn('col-start-1 row-start-1 transition-opacity duration-200', active ? 'opacity-100' : 'pointer-events-none opacity-0')}
            >
              <TestimonialsSection
                quote={
                  <>
                    <b className="font-bold">{firstWord}</b>
                    {t.quote.slice(firstWord.length)}
                  </>
                }
                name={t.name}
                role={t.role}
                avatarSrc={t.avatar}
                avatarAlt={t.name}
                avatarFallback={t.name.charAt(0)}
              />
            </div>
          )
        })}
      </div>
      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button type="button" aria-label="Previous review" onClick={() => go(-1)} className="cursor-pointer p-2">
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {items.map((item, i) => (
              <button
                key={item.name + i}
                type="button"
                aria-label={`Show review ${i + 1} of ${items.length}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn('size-2 cursor-pointer rounded-full', i === index ? 'bg-foreground' : 'bg-foreground/25')}
              />
            ))}
          </div>
          <button type="button" aria-label="Next review" onClick={() => go(1)} className="cursor-pointer p-2">
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}
