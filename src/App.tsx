import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

// Only the home page ships in the first download; every other page loads when
// someone opens it, which keeps the first visit (and Google's speed score) fast.
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })))
const ContactMe = lazy(() => import('./pages/ContactMe').then((m) => ({ default: m.ContactMe })))
const BitgetCaseStudy = lazy(() => import('./pages/BitgetCaseStudy').then((m) => ({ default: m.BitgetCaseStudy })))
const BaseCaseStudy = lazy(() => import('./pages/BaseCaseStudy').then((m) => ({ default: m.BaseCaseStudy })))
const BinanceCaseStudy = lazy(() => import('./pages/BinanceCaseStudy').then((m) => ({ default: m.BinanceCaseStudy })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

export default function App() {
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
