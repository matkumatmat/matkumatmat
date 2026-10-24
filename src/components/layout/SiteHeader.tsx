import { NavLink } from 'react-router'
import ThemeToggle from '../ui/ThemeToggle'

const links = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex w-full items-center justify-between gap-4 px-4 py-4 md:px-6">
        <NavLink to="/gallery" className="text-subheading">
          Kaye
        </NavLink>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5 text-small">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-brand-text'
                    : 'text-fg-muted transition-colors hover:text-fg'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
