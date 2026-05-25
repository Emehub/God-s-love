import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { Container } from '@/components/common'
import { APP } from '@/constants'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const inputClass =
  'w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20'

export const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    // Connect to an email service (e.g. EmailJS, Formspree) in production
    console.log('Contact form submission:', data)
    toast.success("Thank you for reaching out! We'll get back to you soon.")
    reset()
  }

  return (
    <div>
      {/* Page header */}
      <section className="bg-blue-900 py-20 text-center text-white">
        <Container>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-200">
            We'd love to hear from you. Reach out to partner with us, volunteer, or learn more
            about how you can make a difference.
          </p>
        </Container>
      </section>

      {/* Contact section */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-blue-900">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <FaMapMarkerAlt className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Location</h3>
                    <p className="mt-0.5 text-sm text-slate-600">
                      Zaare, Near Azimbe Clinic
                      <br />
                      Bolgatanga, Upper East
                      <br />
                      Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <FaEnvelope className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a
                      href={`mailto:${APP.EMAIL}`}
                      className="mt-0.5 text-sm text-amber-600 hover:underline"
                    >
                      {APP.EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <FaPhone className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <a
                      href={`tel:${APP.PHONE}`}
                      className="mt-0.5 text-sm text-amber-600 hover:underline"
                    >
                      {APP.PHONE}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-6">
                <h3 className="mb-3 font-bold text-blue-900">Ways to Get Involved</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {[
                    'Volunteer with our programs',
                    'Partner as a donor or organization',
                    'Refer someone who needs our help',
                    'Speak at our community events',
                    'Pray for our mission',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-blue-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input {...register('name')} placeholder="Your full name" className={inputClass} />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Subject</label>
                  <input
                    {...register('subject')}
                    placeholder="How can we help?"
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    placeholder="Tell us more about how you'd like to connect or get involved..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
