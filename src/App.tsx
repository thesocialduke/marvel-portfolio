import { Route, Routes } from 'react-router-dom'
import { CaseStudy } from './pages/CaseStudy'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import TestimonialsComponent26Page from './pages/TestimonialsComponent26'
import { baseCaseStudy, binanceCaseStudy, bitgetCaseStudy } from './data/site'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/bitget" element={<CaseStudy data={bitgetCaseStudy} />} />
      <Route path="/base-southern-africa" element={<CaseStudy data={baseCaseStudy} />} />
      <Route path="/binance-street-interviews" element={<CaseStudy data={binanceCaseStudy} />} />
      <Route path="/testimonials-component-26" element={<TestimonialsComponent26Page />} />
    </Routes>
  )
}
