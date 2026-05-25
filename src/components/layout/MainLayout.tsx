import { Outlet } from 'react-router'
import { WhatsAppButton } from '@/components/common'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MainLayout = () => (
  <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
)
