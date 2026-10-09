import { useEffect, useId, useRef, useState } from 'react'
import { Button } from './Button'
import { cn } from '../lib/utils'
import { site } from '../data/site'

const itemClasses =
  'custom-p custom-p-sm flex items-center justify-between gap-6 px-4 py-3 whitespace-nowrap uppercase tracking-wide text-ink outline-none transition-colors hover:bg-ink hover:text-page focus-visible:bg-ink focus-visible:text-page'

// One "CV" control that offers both ways to get it: read it online (opens the Google Doc
// viewer in a new tab) or download the PDF. Closes on outside click, Escape, or choosing.
export function CvMenu({
  variant,
  label,
  className,
}: {
  /** "button" is the full-size outlined button; "link" is the small uppercase footer link. */
  variant: 'button' | 'link'
  label: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    function onPointerDown(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const toggleProps = {
    'aria-haspopup': 'menu' as const,
    'aria-expanded': open,
    'aria-controls': menuId,
    onClick: () => setOpen((value) => !value),
  }

  return (
    <span ref={wrapRef} className={cn('relative inline-flex items-center', className)}>
      {variant === 'button' ? (
        <Button fullWidth={false} {...toggleProps}>
          {label}
        </Button>
      ) : (
        <button
          type="button"
          {...toggleProps}
          className="custom-p custom-p-sm cursor-pointer tracking-wide uppercase outline-none transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-page)' }}
        >
          {label}
        </button>
      )}

      {open && (
        <div
          id={menuId}
          role="menu"
          className={cn(
            'absolute left-0 z-50 min-w-[12rem] bg-page ring-1 ring-ink',
            // The footer link sits at the bottom of the page, so its menu opens upward.
            variant === 'link' ? 'bottom-full mb-3' : 'top-full mt-2',
          )}
        >
          <a
            role="menuitem"
            href={site.cvViewUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className={itemClasses}
          >
            View online <span aria-hidden="true">↗</span>
          </a>
          <a
            role="menuitem"
            href={site.cvUrl}
            download
            onClick={() => setOpen(false)}
            className={cn(itemClasses, 'border-t border-ink/15')}
          >
            Download PDF <span aria-hidden="true">↓</span>
          </a>
        </div>
      )}
    </span>
  )
}
