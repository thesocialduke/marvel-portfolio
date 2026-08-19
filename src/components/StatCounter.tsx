import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

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
  }, [active, target, duration])

  return value
}

// Splits "+5 years", "40M+", "5" into a leading non-numeric prefix, the
// number to animate, and a trailing non-numeric suffix.
const VALUE_PATTERN = /^(\D*)(\d+)(\D*)$/

export function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [active, setActive] = useState(false)

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
  const count = useCountUp(target, active)

  if (!match) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      {match[1]}
      {count}
      {match[3]}
    </span>
  )
}
