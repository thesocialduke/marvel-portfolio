import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialsSection } from './ui/testimonials-2'
import type { Testimonial } from '../data/site'
import { cn } from '../lib/utils'

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  if (items.length === 0) return null

  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length)

  return (
    <div>
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
