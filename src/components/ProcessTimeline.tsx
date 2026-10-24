import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'

export type ProcessStep = { title: string; body: string }

const STEP_SECONDS = 1.1

// A timeline that plays once when scrolled into view: a red line draws across
// (down the side on phones and tablets, where four columns would be too narrow) and each step lights up and fades in as it arrives.
export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLOListElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const total = steps.length * STEP_SECONDS
  const columns = ({ 3: 'laptop:grid-cols-3', 4: 'laptop:grid-cols-4' } as Record<number, string>)[steps.length] ?? 'laptop:grid-cols-5'

  return (
    <ol ref={ref} className={cn('relative grid grid-cols-1 gap-0 laptop:gap-6', columns)}>
      {/* Track and red progress line: horizontal on tablet and up, vertical on phones */}
      <span aria-hidden="true" className="absolute top-1.5 bottom-6 left-1.5 w-px bg-ink/15 laptop:inset-x-0 laptop:top-1.5 laptop:bottom-auto laptop:left-0 laptop:h-px laptop:w-auto" />
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-1.5 bottom-6 left-1.5 w-px origin-top bg-red-600 transition-transform ease-linear motion-reduce:transition-none laptop:inset-x-0 laptop:bottom-auto laptop:left-0 laptop:h-px laptop:w-auto laptop:origin-left',
          playing ? 'scale-y-100 laptop:scale-x-100' : 'scale-y-0 laptop:scale-x-0 laptop:scale-y-100',
        )}
        style={{ transitionDuration: `${total}s` }}
      />

      {steps.map((step, i) => {
        const delay = `${i * STEP_SECONDS}s`
        return (
          <li key={step.title} className="relative pb-10 pl-10 laptop:pt-10 laptop:pr-2 laptop:pb-0 laptop:pl-0">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 size-[13px] border border-ink bg-page transition-colors duration-700 motion-reduce:transition-none"
              style={{
                transitionDelay: delay,
                backgroundColor: playing ? 'var(--color-red-600)' : undefined,
                borderColor: playing ? 'var(--color-red-600)' : undefined,
              }}
            />
            <div
              className="transition-[opacity,transform] duration-[900ms] ease-out motion-reduce:transition-none"
              style={{
                transitionDelay: `${i * STEP_SECONDS + 0.15}s`,
                opacity: playing ? 1 : 0,
                transform: playing ? 'translateY(0)' : 'translateY(14px)',
              }}
            >
              <span className="custom-h4 custom-h4-bold" style={{ color: 'var(--color-accent-text)' }}>
                0{i + 1}
              </span>
              <h3 className="custom-h4 custom-h4-bold mt-2 text-balance">{step.title}</h3>
              <p className="custom-p mt-2 text-pretty text-ink/60">{step.body}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default ProcessTimeline
