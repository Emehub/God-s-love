import { useState } from 'react'
import { NavLink } from 'react-router'
import { HiMenu, HiX } from 'react-icons/hi'
import { Container } from '@/components/common'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/cn'

const links = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.ABOUT, label: 'About' },
  { to: ROUTES.PROGRAMS, label: 'Programs' },
  { to: ROUTES.GALLERY, label: 'Gallery' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-amber-100 bg-white/95 shadow-sm backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to={ROUTES.HOME} className="flex items-center gap-2.5">
          <img src="/logo.jpeg" alt="God's Love" className="h-10 w-10 rounded-full object-cover ring-2 ring-amber-200" />
          <span className="text-lg font-bold text-blue-900">God's Love</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTES.HOME}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-amber-600' : 'text-slate-600 hover:text-blue-900',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to={ROUTES.CONTACT}
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Get Involved
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="rounded-md p-2 text-slate-700 hover:bg-amber-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-amber-100 bg-white py-4 md:hidden">
          <Container className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === ROUTES.HOME}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive ? 'bg-amber-50 text-amber-600' : 'text-slate-700 hover:bg-slate-50',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to={ROUTES.CONTACT}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-amber-600"
            >
              Get Involved
            </NavLink>
          </Container>
        </div>
      )}
    </header>
  )
}
