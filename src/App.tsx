import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

// Only the home page ships in the first download; every other page loads separately,
// which keeps the first visit (and Google's speed score) fast. Once the browser is
// idle the other pages are fetched in the background too, so opening one never shows a
// blank screen while it downloads.
const loaders = {
  services: () => import('./pages/Services'),
  contact: () => import('./pages/ContactMe'),
  bitget: () => import('./pages/BitgetCaseStudy'),
  base: () => import('./pages/BaseCaseStudy'),
  binance: () => import('./pages/BinanceCaseStudy'),
  notFound: () => import('./pages/NotFound'),
}

const Services = lazy(() => loaders.services().then((m) => ({ default: m.Services })))
const ContactMe = lazy(() => loaders.contact().then((m) => ({ default: m.ContactMe })))
const BitgetCaseStudy = lazy(() => loaders.bitget().then((m) => ({ default: m.BitgetCaseStudy })))
const BaseCaseStudy = lazy(() => loaders.base().then((m) => ({ default: m.BaseCaseStudy })))
const BinanceCaseStudy = lazy(() => loaders.binance().then((m) => ({ default: m.BinanceCaseStudy })))
const NotFound = lazy(() => loaders.notFound().then((m) => ({ default: m.NotFound })))

export default function App() {
  useEffect(() => {
    const preload = () => Object.values(loaders).forEach((load) => void load())
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(preload, { timeout: 4000 })
      return () => window.cancelIdleCallback(id)
    }
    // Safari has no requestIdleCallback.
    const id = setTimeout(preload, 2000)
    return () => clearTimeout(id)
  }, [])

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/bitget" element={<BitgetCaseStudy />} />
        <Route path="/base-southern-africa" element={<BaseCaseStudy />} />
        <Route path="/binance-street-interviews" element={<BinanceCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
