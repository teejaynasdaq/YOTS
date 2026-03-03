import { useEffect, useState } from 'react'
import yaweh from '../assets/yaweh.jpeg'
import { ExternalLink, X } from 'lucide-react'

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
    } catch (error) {
      console.warn('Failed to load merch items')
    }
  }, [])

  return (
    <section className="relative bg-[#0a0a0a] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Shop
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-sm mx-auto my-5" />
          <p className="text-white/60 text-lg">
            Support the movement with official YOTS merch.
          </p>
        </div>

        {/* Product Card */}
        <div className="grid md:grid-cols-2 bg-[#141414] border border-white/10 rounded-sm overflow-hidden">

          {/* Image */}
          <div className="aspect-square bg-black">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-10 flex flex-col justify-center">

            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/70 mb-4">
                Official Merch
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {currentItem.title}
              </h3>

              <p className="text-white/50 text-sm">
                Premium quality • R360.00
              </p>
            </div>

            <p className="text-white/60 mb-8">
              Wear the movement. Select your size and proceed to secure checkout.
            </p>

            {/* Size Dropdown */}
            <div className="mb-8">
              <label className="block text-sm text-white/70 mb-3 uppercase tracking-wider">
                Select Size
              </label>

              <div className="relative">
                <select
                  value={selectedSize}
                  onChange={(e) =>
                    setSelectedSize(e.target.value as Size)
                  }
                  className="w-full px-4 py-3 bg-black border border-white/10 text-white rounded-sm focus:outline-none focus:border-white/40 transition appearance-none"
                >
                  {SIZES.map((size) => (
                    <option
                      key={size}
                      value={size}
                      className="bg-black text-white"
                    >
                      {size}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">
                  ▼
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition rounded-sm w-fit"
            >
              Buy Now
              <ExternalLink className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-sm p-6">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition"
            >
              <X className="w-4 h-4" />
            </button>

            <h4 className="text-xl font-semibold text-white mb-6">
              Checkout
            </h4>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 border border-white/10 bg-black overflow-hidden">
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
                  Amount: R360.00
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition rounded-sm"
            >
              Pay Securely
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>
        </div>
      )}
    </section>
  )
}
