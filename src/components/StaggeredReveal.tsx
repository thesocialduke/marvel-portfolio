import { useEffect, useRef, useState, type ReactNode } from 'react'

export function StaggeredReveal({
  lines,
  className = '',
  lineClassName = '',
  staggerMs = 140,
}: {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
  staggerMs?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={`block ${className}`}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`block transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${lineClassName}`}
          style={{ transitionDelay: visible ? `${i * staggerMs}ms` : '0ms' }}
        >
          {line}
        </span>
      ))}
    </span>
  )
}
