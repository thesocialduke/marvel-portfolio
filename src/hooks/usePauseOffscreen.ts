import { useEffect, useRef } from 'react'

// Pauses a CSS animation while the element is scrolled out of view, so a looping
// marquee doesn't keep animating where nobody can see it.
export function usePauseOffscreen<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      el.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
