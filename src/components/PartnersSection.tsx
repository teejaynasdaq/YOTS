import { useEffect, useState } from 'react'
import yaweh from '../assets/yaweh.jpeg'
import { ExternalLink, X, ShoppingBag } from 'lucide-react'

type MerchItem = {
  id: string
  title: string
  image: string
  link?: string
}

const DEFAULT_ITEMS: MerchItem[] = [
  {
    id: 'yots-merch-1',
    title: 'YOTS Yaweh Shirt',
    image: yaweh,
  },
]

const SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const
type Size = typeof SIZES[number]

export default function MerchSection() {
  const [items, setItems] = useState<MerchItem[]>(DEFAULT_ITEMS)
  const [selectedSize, setSelectedSize] = useState<Size>('M')
  const [open, setOpen] = useState(false)

  const paymentLink = 'https://pay.yoco.com/r/2Dnw1x'
  const currentItem = items[0] || DEFAULT_ITEMS[0]

  useEffect(() => {
    try {
      const stored = localStorage.getItem('yots_merch_items')
      if (!stored) return
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed) && parsed.length > 0) {
        setItems(parsed)
      }
    } catch {}
  }, [])

  return (
    <section className="relative bg-[#141414] py-20 md:py-28">

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6">
            Official Merch
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Wear the movement. Represent the mission.
          </p>
        </div>

        {/* Card */}
        <div className="relative max-w-5xl mx-auto bg-[#1a1a1a] border border-white/10 rounded-sm overflow-hidden group hover:border-white/20 transition-all duration-500">

          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div className="relative aspect-[4/5] md:aspect-square bg-black overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Details */}
            <div className="p-6 md:p-10 flex flex-col justify-center">

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-white/60 text-xs md:text-sm uppercase tracking-wider mb-4">
                  <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                  Limited Release
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3 tracking-tight">
                  {currentItem.title}
                </h3>

                <p className="text-white/50 text-sm md:text-base">
                  Premium Cotton • R360.00
                </p>
              </div>

              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Minimal. Clean. Kingdom-focused.
              </p>

              {/* Size Dropdown */}
              <div className="mb-8">
                <label className="block text-xs md:text-sm text-white/70 mb-2 md:mb-3 uppercase tracking-wider">
                  Select Size
                </label>

                <div className="relative">
                  <select
                    value={selectedSize}
                    onChange={(e) =>
                      setSelectedSize(e.target.value as Size)
                    }
                    className="w-full px-4 py-3 md:py-3.5 bg-black border border-white/10 text-white rounded-sm focus:outline-none focus:border-white/40 transition appearance-none text-sm md:text-base"
                  >
                    {SIZES.map((size) => (
                      <option key={size} value={size} className="bg-black text-white">
                        {size}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">
                    ▼
                  </div>
                </div>
              </div>

              {/* Desktop Button */}
              <button
                onClick={() => setOpen(true)}
                className="hidden md:inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:-translate-y-1 w-fit"
              >
                Buy Now
                <ExternalLink className="w-4 h-4" />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[#141414] border-t border-white/10 p-4 z-40">
        <button
          onClick={() => setOpen(true)}
          className="w-full py-4 bg-white text-black font-semibold rounded-sm flex items-center justify-center gap-2"
        >
          Buy Now • R360
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end md:items-center justify-center">

          <div className="w-full md:max-w-lg bg-[#141414] border-t md:border border-white/10 rounded-t-lg md:rounded-sm p-6 md:p-8 animate-slideUp">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition"
            >
              <X className="w-4 h-4" />
            </button>

            <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Checkout
            </h4>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 border border-white/10 bg-black overflow-hidden">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-white font-medium">
                  {currentItem.title}
                </div>
                <div className="text-white/60 text-sm">
                  Size: {selectedSize}
                </div>
                <div className="text-white/60 text-sm">
                  Total: R360.00
                </div>
              </div>
            </div>

            <a
              href={
                (currentItem.link || paymentLink) +
                `?item=${encodeURIComponent(currentItem.title)}&size=${encodeURIComponent(selectedSize)}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-semibold rounded-sm hover:bg-white/90 transition"
            >
              Pay Securely
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
