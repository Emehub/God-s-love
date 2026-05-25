import { Link } from 'react-router'
import {
  FaChurch,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaTools,
  FaUsers,
} from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { MdLeaderboard } from 'react-icons/md'
import { Container } from '@/components/common'
import { ROUTES } from '@/constants/routes'

const programs = [
  {
    icon: FaChurch,
    title: 'Christlike Discipleship',
    desc: 'Nurturing spiritual growth and a deeper relationship with God through structured discipleship programs.',
  },
  {
    icon: FaUsers,
    title: 'Mentorship',
    desc: 'Connecting individuals with experienced mentors to guide personal and professional development.',
  },
  {
    icon: MdLeaderboard,
    title: 'Leadership Training',
    desc: 'Equipping the next generation of servant leaders with tools to make lasting impact in their communities.',
  },
  {
    icon: FaGraduationCap,
    title: 'Formal Education',
    desc: 'Providing access to quality education for the less privileged, opening doors to brighter futures.',
  },
  {
    icon: FaTools,
    title: 'Skill Training',
    desc: 'Empowering individuals with practical vocational skills to become economically self-sufficient.',
  },
  {
    icon: FaHeartbeat,
    title: 'Health Promotion',
    desc: 'Promoting holistic well-being through health awareness, screenings, and community health initiatives.',
  },
]

const values = [
  {
    num: '01',
    title: "God's Love for all Persons",
    desc: 'We acknowledge that the Love of God is Supreme and Unconditional. Inspired by His love, we create a world where everyone can experience the transformative power of divine Love.',
  },
  {
    num: '02',
    title: 'Missions and Evangelism',
    desc: "We make God's missions known through compassionate, respectful, and impactful evangelism faithful to the Gospel.",
  },
  {
    num: '03',
    title: 'Discipline',
    desc: 'We cultivate discipline in our lives, enabling us to achieve our full potential and lead purposeful, productive lives.',
  },
  {
    num: '04',
    title: 'Stewardship',
    desc: 'We believe God owns everything. We are managers of His creations and resources, held to His standard of faithful care.',
  },
  {
    num: '05',
    title: 'Transformational Community Development',
    desc: 'Community-based and sustainable, we focus on the less privileged of all ages, partnering with churches and organizations.',
  },
]

export const HomePage = () => (
  <div>
    {/* ── Hero ─────────────────────────────────────────────────────── */}
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-blue-900">
      {/* decorative gradient blobs */}
      <div className="absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-700/30 blur-3xl" />

      <Container className="relative z-10 py-24 text-center text-white">
        <span className="mb-5 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
          A Movement of Christlike People
        </span>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Carrying God's Love{' '}
          <span className="text-amber-400">to Ghana and Beyond</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
          Through discipleship, mentorship, leadership training, formal education, skill training,
          and health promotion, we transform lives and communities one person at a time.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to={ROUTES.PROGRAMS}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Our Programs <HiArrowRight />
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
            { label: 'Core Programs', value: '6' },
            { label: 'Community Focus', value: 'Ghana +' },
            { label: 'Core Values', value: '5' },
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
              <FaHandHoldingHeart className="text-2xl text-amber-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-blue-900">Our Vision</h3>
            <p className="leading-relaxed text-slate-600">
              A Movement of Christlike People, carrying God's Love through Christlike Discipleship,
              Mentorship and Leadership training, Formal Education, Skill training, and Health
              Promotion, transforming all-inclusive People and Communities in Ghana and beyond.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <FaUsers className="text-2xl text-blue-700" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-blue-900">Our Mission</h3>
            <p className="leading-relaxed text-slate-600">
              Reach out to People with God's Love, Equip, and Connect the less privileged to
              potential providence partners, to be transformed and serve as agents of change in
              their communities in Ghana and beyond.
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

    {/* ── Programs ─────────────────────────────────────────────────── */}
    <section className="bg-white py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">What We Do</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-amber-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Six pillars of transformative ministry serving individuals and communities across Ghana
            and beyond.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-slate-100 p-6 transition-all hover:border-amber-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 transition-colors group-hover:bg-amber-100">
                <p.icon className="text-2xl text-amber-600" />
              </div>
              <h3 className="mb-2 font-bold text-blue-900">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to={ROUTES.PROGRAMS}
            className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
          >
            View All Programs <HiArrowRight />
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="mb-3 block text-3xl font-extrabold text-amber-400/30">{v.num}</span>
              <h3 className="mb-2 font-bold text-amber-300">{v.title}</h3>
              <p className="text-sm leading-relaxed text-blue-100">{v.desc}</p>
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
            { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80', alt: 'Community Gathering' },
            { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80', alt: 'Children Learning' },
            { src: 'https://images.unsplash.com/photo-1438232992991-995b671e4d06?auto=format&fit=crop&w=600&q=80', alt: 'Worship & Fellowship' },
            { src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', alt: 'Health Outreach' },
            { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80', alt: 'Mentorship' },
            { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80', alt: 'Serving the Community' },
            { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80', alt: 'Leadership Training' },
            {
              src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
              alt: 'Skill Workshop',
              overlay: true,
            },
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
    <section className="bg-amber-50 py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-blue-900">Ready to Make a Difference?</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Join us in carrying God's Love to the people of Ghana and beyond. Whether through
          volunteering, partnering, or donating, every act of love counts.
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
            className="inline-flex items-center gap-2 rounded-full border-2 border-blue-900 px-8 py-3 font-semibold text-blue-900 transition-colors hover:bg-blue-900 hover:text-white"
          >
            Learn More About Us
          </Link>
        </div>
      </Container>
    </section>
  </div>
)
