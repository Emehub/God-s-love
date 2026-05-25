import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from '@/components/layout'
import { AboutPage, ContactPage, GalleryPage, HomePage, NotFoundPage, ProgramsPage } from '@/pages'
import { ROUTES } from '@/constants/routes'

const GlobalRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.PROGRAMS} element={<ProgramsPage />} />
        <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default GlobalRoute
