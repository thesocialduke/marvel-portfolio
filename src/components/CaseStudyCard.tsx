import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type Client = { href: string; title: string; shortName: string; category: string; image: string }

// A case study tile on the home page. The small arrow badge is always visible, so
// the tile reads as a link on a phone too. On a computer the tile reacts when you
// hover it. A phone has no hover, so there the same reaction plays when the tile
// scrolls through the middle of the screen: the photo slowly zooms, the badge turns
// red and the arrow nudges.
export function CaseStudyCard({ client, className }: { client: Client; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: none)').matches) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      // Only the horizontal band across the middle of the screen counts.
      rootMargin: '-35% 0px -35% 0px',
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link
      ref={ref}
      to={client.href}
      data-active={inView}
      aria-label={`View the ${client.shortName} case study`}
      className={`group relative block overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page ${className}`}
    >
      <img
        loading="lazy"
        decoding="async"
        src={client.image}
        alt={client.title}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105 group-data-[active=true]:scale-105 motion-reduce:transition-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />

      <span
        aria-hidden="true"
        className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-page/90 text-ink backdrop-blur-sm transition-colors duration-500 group-hover:bg-red-600 group-hover:text-page group-focus-visible:bg-red-600 group-focus-visible:text-page group-data-[active=true]:bg-red-600 group-data-[active=true]:text-page tablet:top-6 tablet:right-6 tablet:size-11"
      >
        <svg
          className="size-[1.15rem] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-data-[active=true]:translate-x-0.5 group-data-[active=true]:-translate-y-0.5 motion-reduce:transition-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </span>

      <h3 className="custom-h4 custom-h4-invert custom-h4-bold absolute bottom-6 left-6 inline-block bg-red-600 px-3 py-2 tablet:bottom-8 tablet:left-8">
        {client.shortName}
        <span style={{ color: 'rgba(255,255,255,0.7)' }}>, {client.category}</span>
      </h3>
    </Link>
  )
}

export default CaseStudyCard
