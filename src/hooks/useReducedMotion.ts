import { useSyncExternalStore } from 'react'

// True when the visitor has "reduce motion" turned on. A tiny stand-in for motion's hook, so
// the animation library stays out of the bundle every page loads.
const query = '(prefers-reduced-motion: reduce)'

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(query)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
