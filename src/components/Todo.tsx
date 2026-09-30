import type { ReactNode } from 'react'

const RED = 'rgb(220 38 38)'

// Visible placeholder for anything the real case-study data doesn't cover yet.
export function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="inline border border-dashed px-1.5 py-0.5" style={{ borderColor: RED, color: RED }}>
      TODO: {children}
    </span>
  )
}
