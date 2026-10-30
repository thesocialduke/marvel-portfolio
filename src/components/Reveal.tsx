import type { ReactNode } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { cn } from '../lib/utils'

// Fades a block up into place the first time it scrolls into view, then stays put (blocks
// already on screen when the page opens just show; see useRevealOnScroll). The delay
// staggers neighbouring blocks (about 100ms apart). Reduced motion shows it immediately.
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, state] = useRevealOnScroll<HTMLDivElement>({ rootMargin: '0px 0px -10% 0px' })
  const shown = state === 'shown'


  return (
    <div
      ref={ref}
      className={cn(
        state !== 'static' && 'transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none',
        state === 'hidden' && 'translate-y-3 opacity-0',
        className,
      )}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default Reveal
