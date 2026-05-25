import { FaEnvelope, FaHandHoldingHeart, FaMapMarkerAlt, FaPhone, FaUsers } from 'react-icons/fa'
import { Container } from '@/components/common'
import { APP } from '@/constants'

const coreValues = [
  {
    title: "God's Love for all Persons",
    body: "We acknowledge that the Love of God is Supreme and Unconditional through His Son and the Holy Spirit. Inspired by His love, we create a world where everyone can experience the profound and transformative power of divine Love.",
  },
  {
    title: 'Missions and Evangelism',
    body: "We believe that we are to make God's missions (Redemption) for man known to people through missions and evangelism in a manner that is faithful to the Gospel, compassionate, respectful, and impactful.",
  },
  {
    title: 'Discipline',
    body: 'We cultivate discipline in our lives, enabling us to achieve our full potential and lead purposeful, productive lives.',
  },
  {
    title: 'Stewardship',
    body: "We hold to the fundamental principle in the Bible, we believe that God owns everything and we own nothing, but we are just managers of His creations and resources.",
  },
  {
    title: 'Transformational Community-Based Development',
    body: 'It is Community-Based and Sustainable. Our focus is on the less privileged and vulnerable people of all ages. We partner with Churches, Organizations, Donors, and Individuals.',
  },
]

export const AboutPage = () => (
  <div>
    {/* Page header */}
    <section className="bg-blue-900 py-20 text-center text-white">
      <Container>
        <h1 className="text-4xl font-bold">About God's Love</h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-200">
          Learn about who we are, what drives us, and the values we stand for as we work to carry
          God's Love to all people in Ghana and beyond.
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
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <FaHandHoldingHeart className="text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Our Vision</h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600">
              A Movement of Christlike People, carrying God's Love through Christlike Discipleship,
              Mentorship and Leadership training, Formal Education, Skill training, and Health
              Promotion, transforming all-inclusive People and Communities in Ghana and beyond.
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <FaUsers className="text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600">
              Reach out to People with God's Love, Equip, and Connect the less privileged to
              potential providence partners, to be transformed and serve as agents of change in
              their communities in Ghana and beyond.
            </p>
          </div>
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
        <div className="mx-auto max-w-4xl space-y-5">
          {coreValues.map((v, i) => (
            <div
              key={v.title}
              className="flex gap-5 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-blue-900">{v.title}</h3>
                <p className="leading-relaxed text-slate-600">{v.body}</p>
              </div>
            </div>
          ))}
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
