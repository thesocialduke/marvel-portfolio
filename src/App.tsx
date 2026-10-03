import { Route, Routes } from 'react-router-dom'
import { BaseCaseStudy } from './pages/BaseCaseStudy'
import { BitgetCaseStudy } from './pages/BitgetCaseStudy'
import { BinanceCaseStudy } from './pages/BinanceCaseStudy'
import { ContactMe } from './pages/ContactMe'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import TestimonialsComponent26Page from './pages/TestimonialsComponent26'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/bitget" element={<BitgetCaseStudy />} />
      <Route path="/base-southern-africa" element={<BaseCaseStudy />} />
      <Route path="/binance-street-interviews" element={<BinanceCaseStudy />} />
      <Route path="/testimonials-component-26" element={<TestimonialsComponent26Page />} />
    </Routes>
  )
}
