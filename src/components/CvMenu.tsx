import { useState } from 'react'
import { Popover } from 'radix-ui'
import { Button } from './Button'
import { cn } from '../lib/utils'
import { site } from '../data/site'

const itemClasses =
  'custom-p custom-p-sm flex items-center justify-between gap-6 px-4 py-3 whitespace-nowrap uppercase tracking-wide text-ink outline-none transition-colors duration-200 hover:bg-ink hover:text-page focus-visible:bg-ink focus-visible:text-page'

// One resume control that offers both ways to get it: read it online (opens the Google Doc
// viewer in a new tab) or download the PDF. Built on Radix Popover, which handles opening,
// Escape, outside clicks, focus and returning focus to the button.
export function CvMenu({
  variant,
  label,
  className,
}: {
  /** "button" is the full-size outlined button; "link" is the small uppercase footer link;
      "nav" is a top-bar link (styled by the caller through className). */
  variant: 'button' | 'link' | 'nav'
  label: string
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        {variant === 'button' ? (
          <Button fullWidth={false}>{label}</Button>
        ) : variant === 'nav' ? (
          <button type="button" className={cn('cursor-pointer', className)}>
            {label}
            <svg aria-hidden="true" className="ml-1 size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="custom-p custom-p-sm inline-flex min-h-10 cursor-pointer items-center tracking-wide uppercase outline-none transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-light/60"
            style={{ color: 'var(--color-light)' }}
          >
            {label}
          </button>
        )}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          // The footer link sits at the bottom of the page, so its menu opens upward.
          side={variant === 'link' ? 'top' : 'bottom'}
          align="start"
          sideOffset={variant === 'link' ? 12 : 8}
          // Tells analytics which resume menu a click came from (it renders outside the footer/navbar).
          data-area={variant === 'nav' ? 'navbar' : variant === 'link' ? 'footer' : 'page'}
          className="z-50 min-w-[12rem] bg-page ring-1 ring-ink outline-none"
        >
          <Popover.Close asChild>
            <a href={site.cvViewUrl} target="_blank" rel="noreferrer" className={itemClasses}>
              View online <span aria-hidden="true">↗</span>
            </a>
          </Popover.Close>
          <Popover.Close asChild>
            <a href={site.cvUrl} download className={cn(itemClasses, 'border-t border-ink/15')}>
              Download PDF <span aria-hidden="true">↓</span>
            </a>
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
