import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

const classes =
  'custom-button-label flex min-h-[3.5rem] min-w-[6rem] w-full items-center justify-center gap-3 rounded-none px-8 py-2 text-[1rem] uppercase ring-1 ring-inset ring-hyacinth transition-colors hover:bg-hyacinth hover:text-page tablet:w-auto outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page focus-visible:ring-hyacinth-hover'

export function Button({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button type="button" className={`${classes} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  external,
}: {
  to: string
  children: ReactNode
  external?: boolean
}) {
  // Same-page anchors (e.g. "#contact") scroll to a section that's already
  // rendered in the footer on every route — a plain anchor lets the
  // browser's native (CSS `scroll-behavior: smooth`) same-tab scroll
  // handle it, no client-side routing involved.
  if (to.startsWith('#')) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    )
  }

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
