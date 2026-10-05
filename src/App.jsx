import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import HomePage from './pages/Home'
import ReviewsPage from './pages/Reviews'
import { ServicePage, ServicesPage } from './pages/Services'
import { AboutPage, ContactPage, NotFound, WorkPage } from './pages/Other'

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/our-work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
