import { FaWhatsapp } from 'react-icons/fa'
import { APP } from '@/constants'

// Ghana country code +233; strip the leading 0 from the local number
const phone = '233' + APP.PHONE.replace(/^0/, '')

const message = encodeURIComponent(
  "Hello God's Love Ministry! 👋 I will like to learn more about your programs and how I can get involved.",
)

const href = `https://wa.me/${phone}?text=${message}`

export const WhatsAppButton = () => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg ring-4 ring-[#25D366]/30 transition-all hover:px-5 hover:shadow-xl"
  >
    <FaWhatsapp className="h-6 w-6 shrink-0" />
    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">
      Chat with us
    </span>
  </a>
)
