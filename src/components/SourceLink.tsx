import type { ReactNode } from 'react'

// Inline link to the public ranking behind a claim about a company (CoinGecko, DefiLlama),
// opened in a new tab so the reader keeps their place in the case study.
export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-150 hover:decoration-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default SourceLink
