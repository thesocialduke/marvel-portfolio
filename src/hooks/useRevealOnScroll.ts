import { useLayoutEffect, useRef, useState } from 'react'

// Shared by Reveal and StaggeredReveal. Content is visible in the page's HTML from the start,
// so what's on screen when the page opens shows straight away (no waiting for the script and
// a fade, which delayed the first paint on slow phones). Only blocks that start below the
// screen are hidden, just before the first paint, and fade in when scrolled to.
//   'static': on screen at load, or reduce motion is on: plain, no animation
//   'hidden': below the screen, waiting to be scrolled to
//   'shown':  scrolled to, fading in
export function useRevealOnScroll<T extends HTMLElement>(options: IntersectionObserverInit) {
  const ref = useRef<T>(null)
  const [state, setState] = useState<'static' | 'hidden' | 'shown'>('static')

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return
    setState('hidden')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState('shown')
        observer.disconnect()
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
    // The options are fixed per component, so they don't need to re-run this.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, state] as const
}
