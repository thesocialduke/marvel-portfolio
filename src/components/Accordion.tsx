import { useId, useState, type ReactNode } from 'react'
import { cn } from '../lib/utils'

type AccordionItem = {
  q: string
  a: ReactNode
}

// Expand/collapse list. Each header is a real button with aria-expanded. The panel opens
// with a CSS transition (grid rows 0fr -> 1fr plus a fade and a small slide), so it is
// smooth and can be reversed mid-way if clicked again. Closed panels stay in the HTML for
// search engines but are inert, so they can't be tabbed into or read out.
export function Accordion({
  items,
  size = 'default',
}: {
  items: AccordionItem[]
  size?: 'default' | 'lg'
}) {
  const [open, setOpen] = useState<Set<number>>(new Set())
  const baseId = useId()
  // Questions and answers both in the body font (Geist), so the FAQ reads as text, not headings.
  const questionClass = size === 'lg' ? 'custom-h2 custom-h2-sm font-poppins' : 'custom-h3 custom-h3-medium font-poppins'

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <div className="divide-y divide-hyacinth/15">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={item.q}>
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                // Inline so the heading-font rules in index.css can't override the body font.
                style={{ fontFamily: 'var(--font-poppins)' }}
                className={cn(
                  questionClass,
                  'relative flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left text-balance outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page',
                  isOpen && 'text-hyacinth',
                )}
              >
                <span>{item.q}</span>
                <svg
                  aria-hidden="true"
                  className={cn(
                    'size-5 shrink-0 text-hyacinth transition-[rotate] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none',
                    isOpen && 'rotate-45',
                  )}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-label={item.q}
              inert={!isOpen}
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={cn(
                    'pt-1 pb-3 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none',
                    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
                  )}
                >
                  {typeof item.a === 'string' ? <p className="custom-p font-poppins text-ink/60">{item.a}</p> : item.a}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
