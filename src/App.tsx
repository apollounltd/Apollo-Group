import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ConsultPage from './pages/ConsultPage'
import FarmsPage from './pages/FarmsPage'
import TechPage from './pages/TechPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/farms" element={<FarmsPage />} />
          <Route path="/technology" element={<TechPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App
