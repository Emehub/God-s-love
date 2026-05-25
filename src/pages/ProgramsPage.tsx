import { Link } from 'react-router'
import {
  FaChurch,
  FaGraduationCap,
  FaHeartbeat,
  FaTools,
  FaUsers,
} from 'react-icons/fa'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { MdLeaderboard } from 'react-icons/md'
import { Container } from '@/components/common'
import { ROUTES } from '@/constants/routes'

const programs = [
  {
    icon: FaChurch,
    title: 'Christlike Discipleship',
    tagline: 'Growing in Faith Together',
    desc: "Our discipleship program nurtures deep spiritual formation, helping individuals develop an authentic relationship with God through structured Bible study, mentored prayer, and community worship. We create safe spaces for seekers and believers alike to grow in Christlikeness.",
    outcomes: [
      'Structured Bible study sessions',
      'Small group fellowship',
      'One-on-one spiritual mentoring',
      'Prayer and worship training',
    ],
  },
  {
    icon: FaUsers,
    title: 'Mentorship',
    tagline: 'Walking Together Through Life',
    desc: "Our mentorship program pairs less privileged individuals with experienced mentors who guide them personally and professionally. We believe every person deserves a guide, someone who has walked further down the road and can help navigate life's challenges.",
    outcomes: [
      'Personalized mentor matching',
      'Regular check-ins and accountability',
      'Goal setting and life planning',
      'Career and educational guidance',
    ],
  },
  {
    icon: MdLeaderboard,
    title: 'Leadership Training',
    tagline: 'Raising Servant Leaders',
    desc: 'We equip the next generation of leaders with Biblical principles of servant leadership. Through workshops, seminars, and hands-on community projects, participants develop the character, competence, and courage to lead with integrity and lasting impact.',
    outcomes: [
      'Leadership workshops and seminars',
      'Hands-on community projects',
      'Character and values formation',
      'Public speaking and communication',
    ],
  },
  {
    icon: FaGraduationCap,
    title: 'Formal Education',
    tagline: 'Opening Doors to Brighter Futures',
    desc: 'Education is a powerful equalizer. We provide access to quality formal education for less privileged children and youth, including school enrollment support, supplies, tutoring, and scholarships. No child should be left behind.',
    outcomes: [
      'School enrollment support',
      'Educational materials and supplies',
      'Tutoring and academic support',
      'Scholarship opportunities',
    ],
  },
  {
    icon: FaTools,
    title: 'Skill Training',
    tagline: 'Empowering Economic Independence',
    desc: 'Practical vocational skills open the door to economic self-sufficiency. Our skill training program offers hands-on training in trades, crafts, and entrepreneurship for youth and adults, equipping them to earn a livelihood and contribute meaningfully to their communities.',
    outcomes: [
      'Vocational trade training',
      'Entrepreneurship development',
      'Business skills and financial literacy',
      'Apprenticeship placements',
    ],
  },
  {
    icon: FaHeartbeat,
    title: 'Health Promotion',
    tagline: 'Wholeness for Every Person',
    desc: "Holistic development includes physical and mental health. We conduct health awareness campaigns, free health screenings, nutrition education, and connect communities with healthcare resources, reflecting God's care for the whole person.",
    outcomes: [
      'Free health screenings',
      'Health awareness campaigns',
      'Nutrition and wellness education',
      'Community healthcare referrals',
    ],
  },
]

export const ProgramsPage = () => (
  <div>
    {/* Page header */}
    <section className="bg-blue-900 py-20 text-center text-white">
      <Container>
        <h1 className="text-4xl font-bold">Our Programs</h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-200">
          Six pillars of transformative ministry, each designed to carry God's Love into every
          dimension of human need.
        </p>
      </Container>
    </section>

    {/* Programs list */}
    <section className="bg-white py-20">
      <Container>
        <div className="space-y-20">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col items-start gap-10 lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon card */}
              <div className="w-full shrink-0 lg:w-72">
                <div className="flex flex-col items-center rounded-2xl border border-amber-100 bg-amber-50 px-8 py-10 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                    <p.icon className="text-3xl text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-blue-900">{p.title}</h2>
                  <p className="mt-1 text-sm font-medium text-amber-600">{p.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="mb-6 leading-relaxed text-slate-600">{p.desc}</p>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-900">
                  What this includes
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-slate-700">
                      <HiCheckCircle className="mt-0.5 shrink-0 text-amber-500" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* CTA */}
    <section className="bg-amber-50 py-20 text-center">
      <Container>
        <h2 className="text-3xl font-bold text-blue-900">Get Involved With Our Programs</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Partner with us, volunteer, or refer someone who could benefit from our programs. Every
          connection matters.
        </p>
        <Link
          to={ROUTES.CONTACT}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
        >
          Contact Us Today <HiArrowRight />
        </Link>
      </Container>
    </section>
  </div>
)
