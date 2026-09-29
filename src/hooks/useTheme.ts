import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    // Suppress every transition for one frame so the theme flip snaps
    // uniformly instead of some elements fading (only `body` declares a
    // color transition) while everything else changes instantly.
    const style = document.createElement('style')
    style.textContent = '*,*::before,*::after{transition:none!important}'
    document.head.appendChild(style)

    setTheme((current) => (current === 'light' ? 'dark' : 'light'))

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }

  return { theme, toggleTheme }
}
