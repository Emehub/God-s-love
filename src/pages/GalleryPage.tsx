import { useState } from 'react'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Container } from '@/components/common'

type Category = 'All' | 'Mission & Transformation' | 'Education & Skills' | 'Community Development'

interface GalleryImage {
  id: number
  src: string
  caption: string
  category: Exclude<Category, 'All'>
}

const images: GalleryImage[] = [
  // ── Mission & Transformation ─────────────────────────────────────
  {
    id: 1,
    src: '/images/pic-1.jpeg',
    caption: 'Youth Worship & Fellowship',
    category: 'Mission & Transformation',
  },
  {
    id: 8,
    src: '/images/pic-8.jpeg',
    caption: 'Youth Mentorship Group',
    category: 'Mission & Transformation',
  },
  {
    id: 9,
    src: '/images/pic-9.jpeg',
    caption: 'Discipleship Training',
    category: 'Mission & Transformation',
  },
  {
    id: 10,
    src: '/images/pic-10.jpeg',
    caption: 'Evening Community Outreach',
    category: 'Mission & Transformation',
  },
  {
    id: 11,
    src: '/images/pic-11.jpeg',
    caption: 'Night Evangelism Gathering',
    category: 'Mission & Transformation',
  },
  {
    id: 17,
    src: '/images/pic-17.jpeg',
    caption: 'Leadership Team',
    category: 'Mission & Transformation',
  },
  {
    id: 18,
    src: '/images/pic-18.jpeg',
    caption: 'Youth Fellowship Conference',
    category: 'Mission & Transformation',
  },
  {
    id: 20,
    src: '/images/pic-20.jpeg',
    caption: 'Youth Leaders Group',
    category: 'Mission & Transformation',
  },
  {
    id: 21,
    src: '/images/pic-21.jpeg',
    caption: 'Leadership Development Session',
    category: 'Mission & Transformation',
  },
  {
    id: 22,
    src: '/images/pic-22.jpeg',
    caption: 'Spiritual Retreat & Conference',
    category: 'Mission & Transformation',
  },

  // ── Education & Skills ───────────────────────────────────────────
  {
    id: 4,
    src: '/images/pic-4.jpeg',
    caption: 'Education Support — Student Mentoring',
    category: 'Education & Skills',
  },
  {
    id: 5,
    src: '/images/pic-5.jpeg',
    caption: 'School Outreach — Sharing Resources',
    category: 'Education & Skills',
  },
  {
    id: 7,
    src: '/images/pic-7.jpeg',
    caption: 'Youth Training Seminar',
    category: 'Education & Skills',
  },
  {
    id: 12,
    src: '/images/pic-12.jpeg',
    caption: 'Skills Training Workshop',
    category: 'Education & Skills',
  },
  {
    id: 13,
    src: '/images/pic-13.jpeg',
    caption: 'Digital Literacy Session',
    category: 'Education & Skills',
  },
  {
    id: 15,
    src: '/images/pic-15.jpeg',
    caption: 'Bible Literacy Class',
    category: 'Education & Skills',
  },
  {
    id: 16,
    src: '/images/pic-16.jpeg',
    caption: "Women's Vocational Training",
    category: 'Education & Skills',
  },
  {
    id: 19,
    src: '/images/pic-19.jpeg',
    caption: 'Tie-Dye Skills Training',
    category: 'Education & Skills',
  },
  {
    id: 24,
    src: '/images/pic-24.jpeg',
    caption: 'Classroom Education Support',
    category: 'Education & Skills',
  },
  {
    id: 25,
    src: '/images/pic-25.jpeg',
    caption: 'Youth Empowerment Workshop',
    category: 'Education & Skills',
  },
  {
    id: 26,
    src: '/images/pic-26.jpeg',
    caption: 'Health Education in Schools',
    category: 'Education & Skills',
  },
  {
    id: 27,
    src: '/images/pic-27.jpeg',
    caption: 'School Outreach Program',
    category: 'Education & Skills',
  },
  {
    id: 28,
    src: '/images/pic-28.jpeg',
    caption: 'Student Study Support',
    category: 'Education & Skills',
  },

  // ── Community Development ────────────────────────────────────────
  {
    id: 2,
    src: '/images/pic-2.jpeg',
    caption: 'Clothing Distribution Outreach',
    category: 'Community Development',
  },
  {
    id: 3,
    src: '/images/pic-3.jpeg',
    caption: 'Community Assembly & Awareness',
    category: 'Community Development',
  },
  {
    id: 6,
    src: '/images/pic-6.jpeg',
    caption: 'Women & Children Empowerment',
    category: 'Community Development',
  },
  {
    id: 14,
    src: '/images/pic-14.jpeg',
    caption: "Children's Community Outreach",
    category: 'Community Development',
  },
  {
    id: 23,
    src: '/images/pic-23.jpeg',
    caption: 'WASH — Community Clean-Up',
    category: 'Community Development',
  },
]

const categories: Category[] = [
  'All',
  'Mission & Transformation',
  'Education & Skills',
  'Community Development',
]

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  'Mission & Transformation': 'bg-amber-500',
  'Education & Skills': 'bg-green-600',
  'Community Development': 'bg-purple-600',
}

export const GalleryPage = () => {
  const [active, setActive] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'All' ? images : images.filter((img) => img.category === active)

  const currentIndex = lightbox !== null ? filtered.findIndex((img) => img.id === lightbox) : -1
  const currentImage = currentIndex !== -1 ? filtered[currentIndex] : null

  const prev = () => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].id)
  }
  const next = () => {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1].id)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') setLightbox(null)
  }

  return (
    <div>
      {/* Page header */}
      <section className="bg-blue-900 py-20 text-center text-white">
        <Container>
          <h1 className="text-4xl font-bold">Our Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-200">
            Glimpses of God's Love Vision at work — in communities, classrooms, outreaches, and
            fellowship gatherings across Ghana and beyond.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            {(['Mission & Transformation', 'Education & Skills', 'Community Development'] as const).map((cat) => (
              <span key={cat} className="flex items-center gap-1.5 text-blue-200">
                <span className={`h-2.5 w-2.5 rounded-full ${categoryColors[cat]}`} />
                {cat} ({images.filter((i) => i.category === cat).length})
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 z-30 border-b border-slate-100 bg-white/95 py-4 shadow-sm backdrop-blur">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({images.filter((i) => i.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Image grid */}
      <section className="bg-white py-14">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="group mb-4 cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
                onClick={() => setLightbox(img.id)}
              >
                <div className="relative">
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className={`mb-1 self-start rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${categoryColors[img.category]}`}>
                      {img.category}
                    </span>
                    <p className="text-sm font-semibold text-white">{img.caption}</p>
                    <p className="text-xs text-white/70">God's Love Vision · GLV</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-slate-400">No images in this category yet.</p>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      {lightbox !== null && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKey}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <HiX className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); prev() }}
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.caption}
              className="max-h-[75vh] w-full object-contain"
            />
            <div className="bg-blue-950 px-6 py-3 text-center">
              <p className="font-semibold text-white">{currentImage.caption}</p>
              <p className="mt-0.5 text-xs text-blue-300">
                {currentImage.category} · God's Love Vision (GLV)
              </p>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); next() }}
            disabled={currentIndex === filtered.length - 1}
            aria-label="Next image"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            {currentIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </div>
  )
}
