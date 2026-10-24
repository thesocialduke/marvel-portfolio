import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type Client = { href: string; title: string; shortName: string; category: string; image: string; imagePosition?: string }

// A case study tile on the home page. An always-visible "View case study" label sits
// under the title, so the tile plainly reads as a link (photos with a caption on top
// otherwise look decorative, and phones have no hover to hint at it). On a computer the
// tile reacts on hover. A phone has no hover, so there the same reaction plays once most
// of the tile is on screen: the photo zooms, the label turns light and its arrow moves
// forward. Until then the arrow gently nudges on its own (only while on screen, never
// with reduced motion) to hint that the tile leads somewhere.
export function CaseStudyCard({ client, className }: { client: Client; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [inView, setInView] = useState(false)
  const [onScreen, setOnScreen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Any part on screen: lets the arrow's nudge loop run only while it can be seen.
    const visible = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting))
    visible.observe(el)
    // Touch screens have no hover, and the phone layout puts the button under the photo where
    // hover can't be relied on either (a narrow desktop window counts too): there the tile
    // reacts once most of it is on screen. Re-checked when the window crosses the breakpoint.
    const query = window.matchMedia('(hover: none), (max-width: 639px)')
    const active = new IntersectionObserver(([entry]) => setInView(query.matches && entry.isIntersecting), { threshold: 0.6 })
    active.observe(el)
    const onChange = () => {
      active.unobserve(el)
      active.observe(el)
    }
    query.addEventListener('change', onChange)
    return () => {
      visible.disconnect()
      active.disconnect()
      query.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <Link
      ref={ref}
      to={client.href}
      data-active={inView}
      data-onscreen={onScreen}
      // Starts with the visible label text so voice control ("click View case study") works.
      aria-label={`View case study: ${client.shortName}, ${client.category}`}
      className={cn(
        'group relative block outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page',
      )}
    >
      {/* Photo. Phones: the title and link sit under it, on the page background, where they
          read cleanly; tablets and up: they sit over the bottom of the photo as before. */}
      <div className={cn('relative overflow-hidden', className)}>
      <img
        loading="lazy"
        decoding="async"
        src={client.image}
        srcSet={`${client.image.replace(/\.webp$/, '-800.webp')} 800w, ${client.image} 1200w`}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt={client.title}
        width={1200}
        height={700}
        style={client.imagePosition ? { objectPosition: client.imagePosition } : undefined}
        className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105 group-data-[active=true]:scale-105 motion-reduce:transition-none"
      />
      <div className="absolute inset-0 hidden bg-gradient-to-t from-night/60 via-transparent to-transparent tablet:block" />
      </div>

      <div className="mt-4 flex flex-col items-start tablet:absolute tablet:inset-x-8 tablet:bottom-8 tablet:mt-0">
        <h3 className="case-card-title custom-h4 custom-h4-bold">
          <span className="tablet:bg-red-600 tablet:box-decoration-clone tablet:px-3 tablet:py-1">
            {client.shortName}
            <span className="case-card-category">, {client.category}</span>
          </span>
        </h3>
        {/* The shared .custom-p style sets its own text colour and would beat the colour
            and weight, so those live on the inner span and the outer one only swaps the
            background. */}
        <span
          aria-hidden="true"
          className="custom-p custom-p-sm mt-3 bg-ink tracking-wide uppercase transition-colors duration-200 group-hover:bg-page group-focus-visible:bg-page group-data-[active=true]:bg-red-600 tablet:mt-1.5"
        >
          <span className="inline-flex items-center gap-2 px-3 py-2 font-semibold text-page transition-colors duration-200 group-hover:text-ink group-focus-visible:text-ink group-data-[active=true]:text-light">
            View case study
            <svg
              className="size-4 animate-[arrow-nudge_1.8s_ease-in-out_infinite] transition-transform duration-200 [animation-play-state:paused] group-hover:translate-x-1 group-hover:animate-none group-focus-visible:animate-none group-data-[active=true]:translate-x-1 group-data-[active=true]:animate-none group-data-[onscreen=true]:[animation-play-state:running] motion-reduce:animate-none motion-reduce:transition-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
            >
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </span>
        </span>
      </div>
    </Link>
  )
}

export default CaseStudyCard
