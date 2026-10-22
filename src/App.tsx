import { Navigate, Route, Routes } from 'react-router'
import About from './about/main'
import SiteLayout from './components/layout/SiteLayout'
import Gallery from './gallery/main'
import NotFound from './not-found/main'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Navigate to="/gallery" replace />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
