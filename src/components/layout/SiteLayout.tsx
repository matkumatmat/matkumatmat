import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export default function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col bg-canvas text-fg">
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
