import { useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import {
  FaChurch,
  FaGraduationCap,
  FaHeartbeat,
  FaLeaf,
} from 'react-icons/fa'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { MdVolunteerActivism } from 'react-icons/md'
import { Container } from '@/components/common'
import { ROUTES } from '@/constants/routes'

const departments = [
  {
    id: 'mission-transformation',
    icon: FaChurch,
    color: 'amber',
    title: 'Mission & Transformation Department',
    mandate:
      'To raise transformational leaders and promote discipleship, mentorship and spiritual growth.',
    activities: [
      'Leadership training',
      'Discipleship programs',
      'Mentorship',
      'Outreach & evangelism',
      'Values & character formation',
    ],
    keyPrograms: [
      'Leadership Academy',
      'Youth Mentorship',
      'Community Outreach',
      'Spiritual Retreats',
    ],
  },
  {
    id: 'education-skills',
    icon: FaGraduationCap,
    color: 'green',
    title: 'Education & Skills Department',
    mandate:
      'To provide quality education and skills training for personal and societal transformation.',
    activities: [
      'Formal & informal education',
      'Scholarships & learning support',
      'Vocational & technical training',
      'Digital literacy',
      'Entrepreneurship development',
    ],
    keyPrograms: [
      'Education Support Program',
      'Skills Training Centers',
      'Youth Empowerment',
      'Innovation & Entrepreneurship',
    ],
  },
  {
    id: 'health',
    icon: FaHeartbeat,
    color: 'red',
    title: 'Health Department',
    mandate:
      'To promote healthy living and provide access to basic health care and support services.',
    activities: [
      'Health education & awareness',
      'Medical outreaches',
      'Maternal & child health',
      'Access to basic healthcare',
      'Referral & support services',
    ],
    keyPrograms: [
      'Medical Outreach',
      'Health Education',
      'Nutrition Support',
      'Health Assistance Fund',
    ],
  },
  {
    id: 'agriculture',
    icon: FaLeaf,
    color: 'orange',
    title: 'Agriculture Department',
    mandate:
      'To support smallholder farmers and promote sustainable agricultural development.',
    activities: [
      'Agricultural training & extension',
      'Improved inputs & tools',
      'Climate-smart farming',
      'Value chain & agribusiness development',
      'Market access support',
    ],
    keyPrograms: [
      'Farmer Training',
      'Input Support Program',
      'Agri-Business Support',
      'Cooperative Development',
    ],
  },
  {
    id: 'community-development',
    icon: MdVolunteerActivism,
    color: 'purple',
    title: 'Community Development Department',
    mandate:
      'To drive holistic community development and support vulnerable groups.',
    activities: [
      'Community needs assessment',
      'WASH & environment',
      'Social welfare & support',
      'Women, youth & children empowerment',
      'Disaster response & relief',
    ],
    keyPrograms: [
      'Community Projects',
      'WASH Initiatives',
      'Social Support Programs',
      'Empowerment Programs',
    ],
  },
]

const colorMap: Record<string, { bg: string; icon: string; badge: string; border: string }> = {
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', badge: 'bg-amber-500 text-white', border: 'border-amber-100' },
  green: { bg: 'bg-green-50', icon: 'text-green-600', badge: 'bg-green-600 text-white', border: 'border-green-100' },
  red: { bg: 'bg-red-50', icon: 'text-red-600', badge: 'bg-red-500 text-white', border: 'border-red-100' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', badge: 'bg-orange-500 text-white', border: 'border-orange-100' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', badge: 'bg-purple-600 text-white', border: 'border-purple-100' },
}

export const ProgramsPage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <div>
      {/* Page header */}
      <section className="bg-blue-900 py-20 text-center text-white">
        <Container>
          <span className="mb-4 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Our 5 Pillars
          </span>
          <h1 className="text-4xl font-bold">Departments &amp; Programs</h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-200">
            Five departments working together to demonstrate God's love through holistic
            transformation of individuals and communities.
          </p>
        </Container>
      </section>

      {/* Departments list */}
      <section className="bg-white py-20">
        <Container>
          <div className="space-y-20">
            {departments.map((dept, i) => {
              const c = colorMap[dept.color]
              return (
                <div
                  key={dept.id}
                  id={dept.id}
                  className={`scroll-mt-20 flex flex-col items-start gap-10 lg:flex-row ${
                    i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon card */}
                  <div className="w-full shrink-0 lg:w-72">
                    <div className={`flex flex-col items-center rounded-2xl border ${c.border} ${c.bg} px-8 py-10 text-center`}>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900">
                        <dept.icon className="text-3xl text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-blue-900">{dept.title}</h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${c.badge}`}>
                      Mandate
                    </div>
                    <p className="mb-6 leading-relaxed text-slate-600">{dept.mandate}</p>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-900">
                          Activities
                        </h4>
                        <ul className="space-y-2">
                          {dept.activities.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-slate-700">
                              <HiCheckCircle className={`mt-0.5 shrink-0 ${c.icon}`} />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-900">
                          Key Programs
                        </h4>
                        <ul className="space-y-2">
                          {dept.keyPrograms.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                              <HiArrowRight className={`mt-0.5 shrink-0 ${c.icon}`} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Department Collaboration */}
      <section className="bg-blue-900 py-20 text-white">
        <Container className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Department Collaboration</h2>
          <div className="mx-auto mb-10 h-1 w-16 rounded bg-amber-400" />
          <p className="mx-auto mb-10 max-w-2xl text-blue-200">
            Our departments work together in integrated ways to deliver holistic community impact.
          </p>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              { pair: 'Mission & Transformation + Education', desc: 'Values-based education, mentorship, character formation' },
              { pair: 'Education & Skills + Agriculture', desc: 'Agribusiness training, youth in agriculture, food security' },
              { pair: 'Health + Community Development', desc: 'Health outreaches, sanitation, community welfare' },
              { pair: 'Mission + Community Development', desc: 'Community transformation, volunteerism, social change' },
              { pair: 'Agriculture + Community Development', desc: 'Livelihood improvement, women & youth empowerment' },
              { pair: 'All Departments', desc: 'Integrated programs for holistic community impact' },
            ].map((item) => (
              <div key={item.pair} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
                <h3 className="mb-1 text-sm font-bold text-amber-300">{item.pair}</h3>
                <p className="text-sm text-blue-200">{item.desc}</p>
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
            Partner with us, volunteer, or refer someone who could benefit from our departments.
            Every connection matters.
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
}
