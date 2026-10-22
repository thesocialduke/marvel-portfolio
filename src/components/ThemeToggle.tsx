import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

type Theme = 'light' | 'dark'

// Sun/moon switch. Light is the default; the choice is saved in this browser and applied
// by the inline script in index.html before the page paints.
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    // Switching flips colour on nearly every element at once; with their transitions running
    // the page smears instead of snapping. Turn transitions off for this one frame.
    const style = document.createElement('style')
    style.textContent = '*,*::before,*::after{transition:none !important}'
    document.head.appendChild(style)
    root.setAttribute('data-theme', next)
    void root.offsetHeight
    requestAnimationFrame(() => style.remove())
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage blocked: the switch still works for this visit.
    }
    setTheme(next)
  }

  const dark = theme === 'dark'
  const icon =
    'absolute inset-0 m-auto size-[18px] transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative inline-flex size-10 shrink-0 cursor-pointer items-center justify-center text-ink outline-none transition-[color,scale] duration-150 ease-out active:scale-[0.96] hover:text-accent-text focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page',
        className,
      )}
    >
      {/* Moon (shown in light mode: "go dark") */}
      <svg
        aria-hidden="true"
        className={cn(icon, dark ? 'scale-[0.25] opacity-0 blur-[4px]' : 'scale-100 opacity-100 blur-0')}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      {/* Sun (shown in dark mode: "go light") */}
      <svg
        aria-hidden="true"
        className={cn(icon, dark ? 'scale-100 opacity-100 blur-0' : 'scale-[0.25] opacity-0 blur-[4px]')}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  )
}

export default ThemeToggle
