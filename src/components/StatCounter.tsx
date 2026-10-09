import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

// Counts up from 0 once the number scrolls into view. The first render (and the
// pre-rendered HTML that crawlers read) shows the real final value; the 0 start is
// applied before the first paint, so people still see the count-up but nothing that
// reads the page without running the animation ever sees "0M+".
function useCountUp(target: number, active: boolean, enabled: boolean, duration = 1500) {
  const [value, setValue] = useState(target)

  useLayoutEffect(() => {
    if (enabled) setValue(0)
  }, [enabled])

  useEffect(() => {
    if (!active || !enabled) return

    let start: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.round(progress * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, enabled, target, duration])

  return value
}

// Splits "+5 years", "40M+", "5" into a leading non-numeric prefix, the
// number to animate, and a trailing non-numeric suffix.
const VALUE_PATTERN = /^(\D*)(\d+)(\D*)$/

export function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [active, setActive] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const match = value.match(VALUE_PATTERN)
  const target = match ? parseInt(match[2], 10) : 0
  const count = useCountUp(target, active, !reducedMotion && !!match)

  if (!match) {
    return (
      <span ref={ref} className="tabular-nums">
        {value}
      </span>
    )
  }

  // aria-label gives screen readers the final number instead of the counting digits.
  return (
    <span ref={ref} role="img" aria-label={value} className="tabular-nums">
      {match[1]}
      {count}
      {match[3]}
    </span>
  )
}
