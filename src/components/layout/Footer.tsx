import { Link } from 'react-router'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { Container } from '@/components/common'
import { APP } from '@/constants'
import { ROUTES } from '@/constants/routes'

const quickLinks = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.ABOUT, label: 'About Us' },
  { to: ROUTES.PROGRAMS, label: 'Programs' },
  { to: ROUTES.GALLERY, label: 'Gallery' },
  { to: ROUTES.CONTACT, label: 'Contact' },
]

export const Footer = () => (
  <footer className="bg-blue-950 text-white">
    <Container className="py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-2.5">
            <img src="/logo.jpeg" alt="God's Love" className="h-10 w-10 rounded-full object-cover ring-2 ring-amber-400/40" />
            <span className="text-xl font-bold">{APP.NAME}</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-blue-200">
            A Movement of Christlike People carrying God's Love through discipleship, education, skill training, and community transformation in Ghana and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-amber-400">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-blue-200 transition-colors hover:text-amber-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-amber-400">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-blue-200">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-amber-400" />
              <span>Zaare, Near Azimbe Clinic, Bolgatanga, Upper East, Ghana</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <FaEnvelope className="shrink-0 text-amber-400" />
              <a href={`mailto:${APP.EMAIL}`} className="text-blue-200 transition-colors hover:text-amber-400">
                {APP.EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <FaPhone className="shrink-0 text-amber-400" />
              <a href={`tel:${APP.PHONE}`} className="text-blue-200 transition-colors hover:text-amber-400">
                {APP.PHONE}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>

    <div className="border-t border-blue-900">
      <Container className="flex flex-col items-center justify-between gap-2 py-4 text-xs text-blue-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {APP.FULL_NAME}. All rights reserved.</p>
        <p>Zaare, Bolgatanga, Upper East, Ghana</p>
      </Container>
    </div>
  </footer>
)
