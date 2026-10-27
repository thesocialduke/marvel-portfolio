import { useState } from 'react'
import { site } from '../data/site'
import { cn } from '../lib/utils'

// The email address as one button that copies it: the address is the label, a "Copy" tag sits
// beside it, and both swap to "Copied" for a moment after a click. Used in the footer (dark)
// and on the contact page (light).
export function EmailCopyButton({ tone, compact = false }: { tone: 'dark' | 'light'; compact?: boolean }) {
  const dark = tone === 'dark'
  // compact: the same 56px height as the site's other buttons, for rows where it sits beside them.
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      // Clipboard API blocked or unavailable (older browsers, some in-app browsers):
      // fall back to copying from a hidden text field.
      const field = document.createElement('textarea')
      field.value = site.email
      field.setAttribute('readonly', '')
      field.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
      document.body.appendChild(field)
      field.select()
      const ok = document.execCommand('copy')
      field.remove()
      if (!ok) return
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  // The live region announces the copy to screen readers.
  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          'group flex w-full cursor-pointer items-center justify-between gap-3 border px-4 tablet:inline-flex tablet:w-auto tablet:justify-start tablet:gap-4 tablet:px-5 laptop:gap-5 outline-none transition-[background-color,border-color,color,scale] duration-150 ease-out hover:border-red-600 hover:bg-red-600 active:scale-[0.96] focus-visible:ring-2 tablet:px-7 laptop:px-8',
          compact ? 'h-14' : 'h-16 laptop:h-20',
          dark ? 'border-light/40 text-light focus-visible:ring-light/60' : 'border-ink text-ink hover:text-light focus-visible:ring-red-600',
        )}
      >
        <span className={cn('min-w-0 truncate font-poppins text-[clamp(0.85rem,4.1vw,1.25rem)] font-semibold tracking-tight', compact ? 'laptop:text-[1.15rem]' : 'laptop:text-[1.5rem]')}>
          {copied ? 'Copied to clipboard' : site.email}
        </span>
        <span className={cn('flex shrink-0 items-center gap-1.5 border-l pl-3 font-modernist tablet:pl-4 text-[11px] laptop:pl-5 laptop:text-xs font-semibold tracking-[0.1em] uppercase group-hover:border-light/50', dark ? 'border-light/30' : 'border-ink/30')}>
          {copied ? (
            <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="12" height="12" rx="0" />
              <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
            </svg>
          )}
          {copied ? 'Copied' : 'Copy'}
        </span>
        <span className="sr-only"> email address</span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied' : ''}
      </span>
    </>
  )
}

