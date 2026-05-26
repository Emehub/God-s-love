import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'
import { Container } from '@/components/common'
import { APP } from '@/constants'

const coreValues = [
  { label: 'Love', desc: "God's love is the foundation of everything we do — unconditional, transformative, and all-inclusive." },
  { label: 'Integrity', desc: 'We uphold honesty, transparency, and accountability in all our actions and relationships.' },
  { label: 'Compassion', desc: 'We respond to human need with empathy, care, and genuine concern for the wellbeing of others.' },
  { label: 'Excellence', desc: 'We pursue the highest standards in all our programs, services, and operations.' },
  { label: 'Service', desc: 'We are called to serve selflessly, placing the needs of others above our own interests.' },
  { label: 'Faith', desc: "We are rooted in faith in God, trusting His guidance in every step of our mission." },
  { label: 'Accountability', desc: 'We hold ourselves responsible to God, our beneficiaries, partners, and communities.' },
  { label: 'Unity', desc: 'We work together across departments and with partners, believing more is achieved in unity.' },
]

const strategicObjectives = [
  'Raise transformational leaders and disciples',
  'Promote quality education and skills for life',
  'Improve health and well-being of communities',
  'Empower smallholder farmers and promote food security',
  'Drive holistic community development and social transformation',
]

const governanceLevels = [
  {
    title: 'Board of Trustees',
    role: 'Provides overall guidance and policy direction',
  },
  {
    title: 'Executive Director',
    role: 'Overall leadership, management & implementation',
  },
  {
    title: 'Management Committee',
    role: 'Strategic planning, oversight & coordination',
  },
  {
    title: 'Department Heads',
    role: 'Departmental management & program delivery',
  },
  {
    title: 'Staff & Volunteers',
    role: 'Program implementation & community service',
  },
]

export const AboutPage = () => (
  <div>
    {/* Page header */}
    <section className="bg-blue-900 py-20 text-center text-white">
      <Container>
        <span className="mb-4 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
          God's Love Vision · GLV
        </span>
        <h1 className="text-4xl font-bold">About GLV</h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-200">
          Learn about who we are, what drives us, and the values we stand for as we demonstrate
          God's love through transformation, education, health, skills, agriculture and community
          development.
        </p>
      </Container>
    </section>

    {/* Vision & Mission */}
    <section className="bg-white py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Vision &amp; Mission</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-500" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="mb-3 text-2xl font-bold text-blue-900">Our Vision</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              A transformed generation and empowered communities reflecting God's love, character
              and purpose.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="mb-3 text-2xl font-bold text-blue-900">Our Mission</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              To demonstrate God's love by empowering people through transformation, education,
              health, skills, agriculture and community development.
            </p>
          </div>
        </div>
      </Container>
    </section>

    {/* Strategic Objectives */}
    <section className="bg-blue-900 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Strategic Objectives</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-400" />
          <p className="mx-auto mt-4 max-w-xl text-blue-200">What we seek to achieve.</p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {strategicObjectives.map((obj, i) => (
            <div
              key={obj}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="font-medium text-white">{obj}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Core Values */}
    <section className="bg-amber-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Our Core Values</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-500" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v) => (
            <div
              key={v.label}
              className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500">
                <HiCheckCircle className="text-xl text-white" />
              </div>
              <h3 className="mb-1 text-lg font-bold text-blue-900">{v.label}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Governance & Leadership */}
    <section className="bg-white py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Governance &amp; Leadership</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            A clear structure ensuring accountability, strategic oversight, and effective program
            delivery.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {governanceLevels.map((level, i) => (
              <div key={level.title} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < governanceLevels.length - 1 && (
                    <div className="h-8 w-0.5 bg-amber-300" />
                  )}
                </div>
                <div className={`pb-8 ${i === governanceLevels.length - 1 ? 'pb-0' : ''}`}>
                  <h3 className="font-bold text-blue-900">{level.title}</h3>
                  <p className="text-sm text-slate-600">{level.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>

    {/* Location / Contact */}
    <section className="bg-blue-900 py-20 text-white">
      <Container className="text-center">
        <h2 className="mb-10 text-3xl font-bold">Find Us</h2>
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/20">
              <FaMapMarkerAlt className="text-2xl text-amber-400" />
            </div>
            <h3 className="font-semibold text-amber-300">Location</h3>
            <p className="text-sm text-blue-200">
              Zaare, Near Azimbe Clinic
              <br />
              Bolgatanga, Upper East
              <br />
              Ghana
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/20">
              <FaEnvelope className="text-2xl text-amber-400" />
            </div>
            <h3 className="font-semibold text-amber-300">Email</h3>
            <a
              href={`mailto:${APP.EMAIL}`}
              className="text-sm text-blue-200 transition-colors hover:text-amber-400"
            >
              {APP.EMAIL}
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/20">
              <FaPhone className="text-2xl text-amber-400" />
            </div>
            <h3 className="font-semibold text-amber-300">Phone</h3>
            <a
              href={`tel:${APP.PHONE}`}
              className="text-sm text-blue-200 transition-colors hover:text-amber-400"
            >
              {APP.PHONE}
            </a>
          </div>
        </div>
      </Container>
    </section>
  </div>
)
