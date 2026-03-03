import { useEffect, useState } from 'react'
import yaweh from '../assets/yaweh.jpeg'
import { ShoppingBag, ExternalLink } from 'lucide-react'

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

  // Generate payment URL with item + size
  const buyNowLink = `${paymentLink}?item=${encodeURIComponent(currentItem.title)}&size=${encodeURIComponent(selectedSize)}`

  return (
    <section className="relative bg-[#141414] py-24">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Official Merch
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Wear the movement. Represent the mission boldly.
          </p>
        </div>

        {/* Merch Card */}
        <div className="max-w-5xl mx-auto bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-sm overflow-hidden group">
          <div className="grid md:grid-cols-2">

            {/* Image Side */}
            <div className="aspect-[4/5] md:aspect-square bg-black overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10 flex flex-col justify-center">

              <div className="mb-6">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-6">
                  <ShoppingBag className="w-6 h-6 text-white/80" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  {currentItem.title}
                </h3>

                <p className="text-white/50 text-sm md:text-base">
                  Premium Cotton • R360.00
                </p>
              </div>

              <p className="text-white/60 leading-relaxed mb-8">
                A statement piece crafted for those who carry the vision with boldness and excellence.
              </p>

              {/* Size Tiles */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {SIZES.map((size) => {
                  const active = selectedSize === size
                  return (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        cursor-pointer p-6 rounded-sm border transition-all duration-300 flex items-center justify-center text-lg font-semibold
                        ${active
                          ? 'bg-white text-black border-white shadow-lg'
                          : 'bg-[#141414] text-white border-white/10 hover:border-white/20 hover:bg-[#202020]'
                        }
                      `}
                    >
                      {size}
                    </div>
                  )
                })}
              </div>

              {/* Buy Now Button */}
              <a
                href={buyNowLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-white/90 transition w-fit"
              >
                Buy Now
                <ExternalLink className="w-4 h-4" />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
