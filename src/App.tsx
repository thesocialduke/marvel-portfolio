import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

// Every page loads as its own file, so a visitor only downloads the page they open (each
// built page also tells the browser to fetch its file straight away; see
// scripts/prerender.mjs). Once the page has loaded and the browser is idle, the other pages
// are fetched in the background too, so opening one never shows a blank screen.
const loaders = {
  home: () => import('./pages/Home'),
  services: () => import('./pages/Services'),
  contact: () => import('./pages/ContactMe'),
  bitget: () => import('./pages/BitgetCaseStudy'),
  base: () => import('./pages/BaseCaseStudy'),
  binance: () => import('./pages/BinanceCaseStudy'),
  notFound: () => import('./pages/NotFound'),
}

const Home = lazy(() => loaders.home().then((m) => ({ default: m.Home })))
const Services = lazy(() => loaders.services().then((m) => ({ default: m.Services })))
const ContactMe = lazy(() => loaders.contact().then((m) => ({ default: m.ContactMe })))
const BitgetCaseStudy = lazy(() => loaders.bitget().then((m) => ({ default: m.BitgetCaseStudy })))
const BaseCaseStudy = lazy(() => loaders.base().then((m) => ({ default: m.BaseCaseStudy })))
const BinanceCaseStudy = lazy(() => loaders.binance().then((m) => ({ default: m.BinanceCaseStudy })))
const NotFound = lazy(() => loaders.notFound().then((m) => ({ default: m.NotFound })))

export default function App() {
  useEffect(() => {
    const preload = () => Object.values(loaders).forEach((load) => void load())
    let cancel = () => {}
    const schedule = () => {
      if ('requestIdleCallback' in window) {
        const id = window.requestIdleCallback(preload, { timeout: 4000 })
        cancel = () => window.cancelIdleCallback(id)
      } else {
        // Safari has no requestIdleCallback.
        const id = setTimeout(preload, 2000)
        cancel = () => clearTimeout(id)
      }
    }
    // Wait for the page's own images and fonts first, so the background fetches never
    // compete with them.
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })
    return () => {
      window.removeEventListener('load', schedule)
      cancel()
    }
  }, [])

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/bitget" element={<BitgetCaseStudy />} />
        <Route path="/base-southern-africa" element={<BaseCaseStudy />} />
        <Route path="/binance-africa" element={<BinanceCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
