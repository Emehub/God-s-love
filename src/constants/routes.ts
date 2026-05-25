export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROGRAMS: '/programs',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  NOT_FOUND: '*',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
