import type { ReactNode } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { cn } from '../lib/utils'

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
  // Lines already on screen when the page opens just show; see useRevealOnScroll.
  const [ref, state] = useRevealOnScroll<HTMLSpanElement>({ threshold: 0.3 })
  const visible = state === 'shown'

  return (
    <span ref={ref} className={cn('block', className)}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn(
            'block',
            state !== 'static' && 'transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
            state === 'hidden' && 'opacity-0 translate-y-4',
            lineClassName,
          )}
          style={{ transitionDelay: visible ? `${i * staggerMs}ms` : '0ms' }}
        >
          {line}
        </span>
      ))}
    </span>
  )
}
