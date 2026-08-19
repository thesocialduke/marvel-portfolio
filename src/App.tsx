import { Route, Routes } from 'react-router-dom'
import { BetterSleep } from './pages/BetterSleep'
import { Contact } from './pages/Contact'
import { Gameloft } from './pages/Gameloft'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Zola } from './pages/Zola'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-me" element={<Contact />} />
      <Route path="/zola-growth-paid-social" element={<Zola />} />
      <Route path="/gameloft-social-ads" element={<Gameloft />} />
      <Route path="/better-sleep-growth-creative-strategy-and-production" element={<BetterSleep />} />
    </Routes>
  )
}
