import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

const classes =
  'custom-button-label flex min-h-[3.5rem] min-w-[6rem] w-full items-center justify-center gap-3 rounded-full px-8 py-2 text-[1rem] uppercase ring-1 ring-inset ring-hyacinth transition-colors hover:bg-hyacinth hover:text-page tablet:w-auto'

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
