type AccordionItem = {
  q: string
  a: string
}

export function Accordion({
  items,
  size = 'default',
}: {
  items: AccordionItem[]
  size?: 'default' | 'lg'
}) {
  const questionClass = size === 'lg' ? 'custom-h2 custom-h2-sm' : 'custom-h3'

  return (
    <div className="divide-y divide-hyacinth/15">
      {items.map((item) => (
        <details key={item.q} className="group py-3 first:pt-0 last:pb-0">
          <summary
            className={`${questionClass} relative flex cursor-pointer list-none items-center justify-between gap-4 text-balance transition-colors group-open:text-hyacinth [&::-webkit-details-marker]:hidden`}
          >
            <span>{item.q}</span>
            <svg
              className="size-5 shrink-0 text-hyacinth transition-transform duration-200 group-open:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="custom-p relative mt-4 min-h-[1.5rem] text-ink/60">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
