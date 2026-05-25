import { useState } from 'react'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Container } from '@/components/common'

type Category = 'All' | 'Community' | 'Education' | 'Worship' | 'Health' | 'Training'

interface GalleryImage {
  id: number
  src: string
  caption: string
  category: Exclude<Category, 'All'>
  credit: string
}

const images: GalleryImage[] = [
  // Community
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    caption: 'Community Gathering',
    category: 'Community',
    credit: 'Vonecia Carswell',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1541802645635-11f2286a7482?auto=format&fit=crop&w=800&q=80',
    caption: 'Reaching Out With Love',
    category: 'Community',
    credit: 'Rémi Walle',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    caption: 'Serving the Community',
    category: 'Community',
    credit: 'Larm Rmah',
  },
  // Education
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    caption: 'Children Learning Together',
    category: 'Education',
    credit: 'Ben Mullins',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80',
    caption: 'Access to Formal Education',
    category: 'Education',
    credit: 'Mikael Kristenson',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    caption: 'A Brighter Future Through Learning',
    category: 'Education',
    credit: 'Jerry Wang',
  },
  // Worship
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1438232992991-995b671e4d06?auto=format&fit=crop&w=800&q=80',
    caption: 'Worship and Fellowship',
    category: 'Worship',
    credit: 'Edward Cisneros',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1510904287-d11dd18cedf3?auto=format&fit=crop&w=800&q=80',
    caption: 'Praise and Prayer',
    category: 'Worship',
    credit: 'Kiwihug',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1601625194568-f8e1d45c5bdd?auto=format&fit=crop&w=800&q=80',
    caption: 'Discipleship in Community',
    category: 'Worship',
    credit: 'Priscilla Du Preez',
  },
  // Health
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    caption: 'Community Health Outreach',
    category: 'Health',
    credit: 'Online Marketing',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
    caption: 'Health Awareness Campaign',
    category: 'Health',
    credit: 'National Cancer Institute',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    caption: 'Caring for Whole People',
    category: 'Health',
    credit: 'Hush Naidoo',
  },
  // Training
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    caption: 'Mentorship in Action',
    category: 'Training',
    credit: 'Brooke Cagle',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    caption: 'Leadership Development',
    category: 'Training',
    credit: 'Amy Hirschi',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    caption: 'Skill Building Workshop',
    category: 'Training',
    credit: 'Jason Goodman',
  },
]

const categories: Category[] = ['All', 'Community', 'Education', 'Worship', 'Health', 'Training']

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
            Glimpses of God's Love at work, in communities, classrooms, health outreaches, and
            worship gatherings across Ghana and beyond.
          </p>
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
                    <span className="rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-semibold text-white self-start mb-1">
                      {img.category}
                    </span>
                    <p className="text-sm font-semibold text-white">{img.caption}</p>
                    <p className="text-xs text-white/70">Photo: {img.credit}, Unsplash</p>
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
          {/* Close */}
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <HiX className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); prev() }}
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src.replace('w=800', 'w=1200')}
              alt={currentImage.caption}
              className="max-h-[75vh] w-full object-contain"
            />
            <div className="bg-blue-950 px-6 py-3 text-center">
              <p className="font-semibold text-white">{currentImage.caption}</p>
              <p className="mt-0.5 text-xs text-blue-300">
                {currentImage.category}, Photo by {currentImage.credit} on Unsplash
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); next() }}
            disabled={currentIndex === filtered.length - 1}
            aria-label="Next image"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            {currentIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </div>
  )
}
