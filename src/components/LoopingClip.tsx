import { useEffect, useRef, useState } from 'react'

// A short silent clip that plays like a GIF: autoplays muted and loops, but only while it is
// on screen (paused when scrolled away, so it costs nothing elsewhere on the page). With
// "reduce motion" turned on it stays on its still poster frame instead.
export function LoopingClip({
  src,
  poster,
  width,
  height,
  label,
  className,
}: {
  src: string
  poster: string
  width: number
  height: number
  label: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(media.matches)
    if (media.matches) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {})
      else el.pause()
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={reduced ? undefined : src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className={className}
    />
  )
}

export default LoopingClip
