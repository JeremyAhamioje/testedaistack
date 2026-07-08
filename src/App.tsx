import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WorkWithUsProvider } from '@/components/WorkWithUsDialog'
import Home from '@/pages/Home'
import Methodology from '@/pages/Methodology'
// Scaffolded — routes kept but not yet linked from the customer-facing UI
// (placeholder content). Re-surface in the nav/footer once real content exists.
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Ratings from '@/pages/Ratings'

/** Scroll to top on route change (in-page anchors still work). */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <WorkWithUsProvider>
      <div className="min-h-screen bg-paper">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </WorkWithUsProvider>
  )
}
