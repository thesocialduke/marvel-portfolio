import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView()
  }, [pathname, hash])

  return (
    <div className="flex min-h-svh flex-col bg-page">
      <div className="section-wrapper flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
