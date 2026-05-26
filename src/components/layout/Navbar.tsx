import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router'
import { HiChevronDown, HiChevronRight, HiMenu, HiX } from 'react-icons/hi'
import { Container } from '@/components/common'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/cn'

const deptNav = [
  {
    title: 'Mission & Transformation',
    slug: 'mission-transformation',
    programs: ['Leadership Academy', 'Youth Mentorship', 'Community Outreach', 'Spiritual Retreats'],
  },
  {
    title: 'Education & Skills',
    slug: 'education-skills',
    programs: ['Education Support Program', 'Skills Training Centers', 'Youth Empowerment', 'Innovation & Entrepreneurship'],
  },
  {
    title: 'Health',
    slug: 'health',
    programs: ['Medical Outreach', 'Health Education', 'Nutrition Support', 'Health Assistance Fund'],
  },
  {
    title: 'Agriculture',
    slug: 'agriculture',
    programs: ['Farmer Training', 'Input Support Program', 'Agri-Business Support', 'Cooperative Development'],
  },
  {
    title: 'Community Development',
    slug: 'community-development',
    programs: ['Community Projects', 'WASH Initiatives', 'Social Support Programs', 'Empowerment Programs'],
  },
]

const topLinks = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.ABOUT, label: 'About' },
  { to: ROUTES.GALLERY, label: 'Gallery' },
]

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [deptOpen, setDeptOpen] = useState(false)
  const [activeDept, setActiveDept] = useState<number | null>(null)
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false)
  const [mobileActiveDept, setMobileActiveDept] = useState<number | null>(null)

  const dropRef = useRef<HTMLDivElement>(null)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  const isDeptActive = location.pathname === ROUTES.PROGRAMS

  // Close everything on route change
  useEffect(() => {
    setDeptOpen(false)
    setActiveDept(null)
    setMobileOpen(false)
    setMobileDeptOpen(false)
    setMobileActiveDept(null)
  }, [location.pathname, location.hash])

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDeptOpen(false)
        setActiveDept(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const openDept = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    setDeptOpen(true)
  }

  const closeDept = () => {
    hideTimerRef.current = setTimeout(() => {
      setDeptOpen(false)
      setActiveDept(null)
    }, 120)
  }

  const showSub = (i: number) => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    setActiveDept(i)
  }

  const hideSub = () => {
    hideTimerRef.current = setTimeout(() => setActiveDept(null), 80)
  }

  const keepSub = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-amber-100 bg-white/95 shadow-sm backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink to={ROUTES.HOME} className="flex items-center gap-2.5">
          <img
            src="/logo.jpeg"
            alt="God's Love Vision"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-amber-200"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-blue-900">God's Love Vision</span>
            <span className="text-[10px] font-semibold tracking-widest text-amber-600 uppercase">
              Transforming Lives
            </span>
          </div>
        </NavLink>

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-6 md:flex">
          {topLinks.map((link) => (
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

          {/* Departments mega-dropdown */}
          <div
            ref={dropRef}
            className="relative"
            onMouseEnter={openDept}
            onMouseLeave={closeDept}
          >
            <button
              onClick={() => setDeptOpen((v) => !v)}
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors',
                isDeptActive || deptOpen
                  ? 'text-amber-600'
                  : 'text-slate-600 hover:text-blue-900',
              )}
            >
              Departments
              <HiChevronDown
                className={cn('h-4 w-4 transition-transform duration-200', deptOpen && 'rotate-180')}
              />
            </button>

            {deptOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-1 w-64 rounded-2xl border border-slate-100 bg-white py-2 shadow-2xl"
                onMouseEnter={keepSub}
              >
                {deptNav.map((dept, i) => (
                  <div
                    key={dept.slug}
                    className="relative"
                    onMouseEnter={() => showSub(i)}
                    onMouseLeave={hideSub}
                  >
                    <Link
                      to={`${ROUTES.PROGRAMS}#${dept.slug}`}
                      className={cn(
                        'flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors',
                        activeDept === i
                          ? 'bg-amber-50 text-amber-700'
                          : 'text-slate-700 hover:bg-amber-50 hover:text-amber-700',
                      )}
                    >
                      {dept.title}
                      <HiChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                    </Link>

                    {/* Sub-menu flyout */}
                    {activeDept === i && (
                      <div
                        className="absolute left-full top-0 z-50 ml-0.5 w-60 rounded-2xl border border-slate-100 bg-white py-2 shadow-2xl"
                        onMouseEnter={keepSub}
                        onMouseLeave={hideSub}
                      >
                        <p className="border-b border-slate-100 px-4 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                          Key Programs
                        </p>
                        {dept.programs.map((prog) => (
                          <Link
                            key={prog}
                            to={`${ROUTES.PROGRAMS}#${dept.slug}`}
                            className="block px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-amber-50 hover:text-amber-700"
                          >
                            {prog}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-1 border-t border-slate-100 pt-1">
                  <Link
                    to={ROUTES.PROGRAMS}
                    className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-amber-600 hover:text-amber-700"
                  >
                    View All Departments
                    <HiChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

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
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </Container>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="border-t border-amber-100 bg-white py-4 md:hidden">
          <Container className="flex flex-col gap-1">
            {topLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === ROUTES.HOME}
                onClick={() => setMobileOpen(false)}
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

            {/* Mobile Departments accordion */}
            <div>
              <button
                onClick={() => setMobileDeptOpen((v) => !v)}
                className={cn(
                  'flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isDeptActive
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-slate-700 hover:bg-slate-50',
                )}
              >
                Departments
                <HiChevronDown
                  className={cn('h-4 w-4 transition-transform duration-200', mobileDeptOpen && 'rotate-180')}
                />
              </button>

              {mobileDeptOpen && (
                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-amber-200 pl-3">
                  {deptNav.map((dept, i) => (
                    <div key={dept.slug}>
                      <button
                        onClick={() =>
                          setMobileActiveDept(mobileActiveDept === i ? null : i)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                      >
                        {dept.title}
                        <HiChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            mobileActiveDept === i && 'rotate-180',
                          )}
                        />
                      </button>

                      {mobileActiveDept === i && (
                        <div className="ml-3 space-y-0.5 border-l border-amber-100 pl-3 pb-1">
                          {dept.programs.map((prog) => (
                            <Link
                              key={prog}
                              to={`${ROUTES.PROGRAMS}#${dept.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded px-3 py-2 text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-700"
                            >
                              {prog}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <Link
                    to={ROUTES.PROGRAMS}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-amber-600"
                  >
                    View All Departments <HiChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to={ROUTES.CONTACT}
              onClick={() => setMobileOpen(false)}
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
