import { Link } from 'react-router'
import {
  FaChurch,
  FaGraduationCap,
  FaHeartbeat,
  FaLeaf,
  FaUsers,
} from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { MdVolunteerActivism } from 'react-icons/md'
import { Container } from '@/components/common'
import { ROUTES } from '@/constants/routes'

const departments = [
  {
    icon: FaChurch,
    title: 'Mission & Transformation',
    desc: 'Raising transformational leaders and promoting discipleship, mentorship, and spiritual growth through outreach and evangelism.',
  },
  {
    icon: FaGraduationCap,
    title: 'Education & Skills',
    desc: 'Providing quality education and skills training — from scholarships and vocational training to digital literacy and entrepreneurship.',
  },
  {
    icon: FaHeartbeat,
    title: 'Health Department',
    desc: 'Promoting healthy living through medical outreaches, health education, maternal & child health, and access to basic healthcare.',
  },
  {
    icon: FaLeaf,
    title: 'Agriculture',
    desc: 'Supporting smallholder farmers with training, improved inputs, climate-smart farming, and agribusiness development.',
  },
  {
    icon: MdVolunteerActivism,
    title: 'Community Development',
    desc: 'Driving holistic community transformation through WASH, social welfare, women & youth empowerment, and disaster relief.',
  },
]

const coreValues = [
  { label: 'Love' },
  { label: 'Integrity' },
  { label: 'Compassion' },
  { label: 'Excellence' },
  { label: 'Service' },
  { label: 'Faith' },
  { label: 'Accountability' },
  { label: 'Unity' },
]

export const HomePage = () => (
  <div>
    {/* ── Hero ─────────────────────────────────────────────────────── */}
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Background photo */}
      <img
        src="/images/pic-18.jpeg"
        alt="GLV youth fellowship"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/80" />

      <Container className="relative z-10 py-24 text-center text-white">
        <span className="mb-5 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
          God's Love Vision · GLV
        </span>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Transforming Lives,{' '}
          <span className="text-amber-400">Building Communities</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
          Demonstrating God's love by empowering people through transformation, education, health,
          skills, agriculture and community development in Ghana and beyond.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to={ROUTES.PROGRAMS}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Our Departments <HiArrowRight />
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Get Involved
          </Link>
        </div>

        {/* quick stats */}
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {[
            { label: 'Departments', value: '5' },
            { label: 'Core Values', value: '8' },
            { label: 'Strategic Objectives', value: '5' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-amber-400">{s.value}</p>
              <p className="mt-1 text-xs text-blue-200">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* ── Vision & Mission ─────────────────────────────────────────── */}
    <section className="bg-amber-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Who We Are</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-500" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <FaUsers className="text-2xl text-amber-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-blue-900">Our Vision</h3>
            <p className="leading-relaxed text-slate-600">
              A transformed generation and empowered communities reflecting God's love, character
              and purpose.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <FaChurch className="text-2xl text-blue-700" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-blue-900">Our Mission</h3>
            <p className="leading-relaxed text-slate-600">
              To demonstrate God's love by empowering people through transformation, education,
              health, skills, agriculture and community development.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            to={ROUTES.ABOUT}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            Learn more about us <HiArrowRight />
          </Link>
        </div>
      </Container>
    </section>

    {/* ── Departments ──────────────────────────────────────────────── */}
    <section className="bg-white py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Our 5 Pillars</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Five departments working together for holistic community transformation.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <div
              key={d.title}
              className="group rounded-2xl border border-slate-100 p-6 transition-all hover:border-amber-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 transition-colors group-hover:bg-amber-100">
                <d.icon className="text-2xl text-amber-600" />
              </div>
              <h3 className="mb-2 font-bold text-blue-900">{d.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to={ROUTES.PROGRAMS}
            className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
          >
            View All Departments <HiArrowRight />
          </Link>
        </div>
      </Container>
    </section>

    {/* ── Core Values ──────────────────────────────────────────────── */}
    <section className="bg-blue-900 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-400" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {coreValues.map((v) => (
            <div
              key={v.label}
              className="rounded-full border border-amber-400/40 bg-white/10 px-6 py-3 font-semibold text-amber-300 backdrop-blur-sm"
            >
              {v.label}
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* ── Long-term Impact ─────────────────────────────────────────── */}
    <section className="bg-amber-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Our Desired Impact</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            The long-term change we are building towards — to the glory of God and for the good of
            humanity.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Transformed Lives', body: 'Individuals with stronger faith and renewed purpose, living out God\'s love in their communities.' },
            { title: 'Educated & Skilled People', body: 'Individuals with the knowledge and skills to contribute meaningfully to society.' },
            { title: 'Healthy Communities', body: 'Communities with improved well-being and access to quality health services.' },
            { title: 'Food Secure Farmers', body: 'Productive smallholder farmers achieving food security and sustainable livelihoods.' },
            { title: 'Resilient Communities', body: 'Empowered communities that are self-reliant and resilient in the face of challenges.' },
            { title: 'A Better Society', body: "A society reflecting God's love, justice, and compassion for all people." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 font-bold text-blue-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* ── Gallery Preview ──────────────────────────────────────────── */}
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Gallery</h2>
            <div className="mt-3 h-1 w-16 rounded bg-amber-500" />
            <p className="mt-3 text-slate-600">Moments of love, learning, and transformation.</p>
          </div>
          <Link
            to={ROUTES.GALLERY}
            className="hidden items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 sm:flex"
          >
            View Full Gallery <HiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { src: '/images/pic-22.jpeg', alt: 'Spiritual Retreat & Conference' },
            { src: '/images/pic-5.jpeg', alt: 'School Outreach — Sharing Resources' },
            { src: '/images/pic-6.jpeg', alt: 'Women & Children Empowerment' },
            { src: '/images/pic-12.jpeg', alt: 'Skills Training Workshop' },
            { src: '/images/pic-19.jpeg', alt: 'Tie-Dye Skills Training' },
            { src: '/images/pic-3.jpeg', alt: 'Community Assembly & Awareness' },
            { src: '/images/pic-1.jpeg', alt: 'Youth Worship & Fellowship' },
            { src: '/images/pic-14.jpeg', alt: "Children's Community Outreach", overlay: true },
          ].map((img, i) => (
            <Link
              key={i}
              to={ROUTES.GALLERY}
              className="group relative overflow-hidden rounded-xl aspect-square block"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {img.overlay ? (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900/70">
                  <span className="text-center text-sm font-bold text-white">
                    View All Photos <HiArrowRight className="mx-auto mt-1" />
                  </span>
                </div>
              ) : (
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              )}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            to={ROUTES.GALLERY}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600"
          >
            View Full Gallery <HiArrowRight />
          </Link>
        </div>
      </Container>
    </section>

    {/* ── CTA Banner ───────────────────────────────────────────────── */}
    <section className="bg-blue-900 py-20">
      <Container className="text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
        <p className="mx-auto mt-4 max-w-xl text-blue-200">
          Join GLV in demonstrating God's love to the people of Ghana and beyond. Through
          volunteering, partnering, or giving, every act counts.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Get In Touch <HiArrowRight />
          </Link>
          <Link
            to={ROUTES.ABOUT}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Learn More About GLV
          </Link>
        </div>
      </Container>
    </section>
  </div>
)
