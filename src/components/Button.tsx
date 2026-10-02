import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

const baseClasses =
  'custom-button-label flex min-h-[3.5rem] min-w-[6rem] items-center justify-center gap-3 rounded-none px-8 py-2 text-[1rem] uppercase ring-1 ring-inset ring-hyacinth transition-colors tablet:w-auto outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page'

const toneClasses = {
  // Default fill is an instant color swap; the red tone instead uses the
  // .tone-red-fill class (index.css) so the fill visibly rises bottom-to-top.
  default: 'hover:bg-hyacinth hover:text-page focus-visible:ring-hyacinth-hover',
  red: 'tone-red-fill hover:text-page hover:ring-red-600 focus-visible:ring-red-600',
} as const

type Tone = keyof typeof toneClasses

export function Button({
  children,
  className = '',
  tone = 'default',
  fullWidth = true,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; tone?: Tone; fullWidth?: boolean }) {
  return (
    <button
      type="button"
      className={cn(baseClasses, fullWidth ? 'w-full' : 'w-auto', toneClasses[tone], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  external,
  tone = 'default',
  fullWidth = true,
  beam = false,
  className = '',
}: {
  to: string
  children: ReactNode
  external?: boolean
  tone?: Tone
  fullWidth?: boolean
  /** Solid red with a pulsing glow and light sweep, for the main call to action. */
  beam?: boolean
  className?: string
}) {
  const classes = cn(baseClasses, fullWidth ? 'w-full' : 'w-auto', toneClasses[tone], beam && 'btn-beam', className)

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
    // mailto:/tel: links hand off to another app, not a browser tab — no
    // reason to open (and briefly flash) a blank new tab for those.
    const opensNewTab = !to.startsWith('mailto:') && !to.startsWith('tel:')
    return (
      <a href={to} {...(opensNewTab && { target: '_blank', rel: 'noreferrer' })} className={classes}>
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
