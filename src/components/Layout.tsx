import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({
  overlay,
  children,
}: {
  overlay?: boolean
  children: ReactNode
}) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col bg-page">
      <div className="section-wrapper flex flex-1 flex-col">
        <Navbar overlay={overlay} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
