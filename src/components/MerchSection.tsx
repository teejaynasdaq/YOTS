import { useEffect, useMemo, useState } from 'react'
import { Minus, Plus, ShoppingBag, Trash2, ExternalLink } from 'lucide-react'
import yaweh from '../assets/yaweh.jpeg'

export type MerchItem = {
  id: string
  title: string
  image: string
  link?: string
  description?: string
  price?: number
  sizes?: string[]
  available?: boolean
}

const DEFAULT_ITEMS: MerchItem[] = [{
  id: 'yots-merch-1',
  title: 'YOTS Yaweh Shirt',
  image: yaweh,
  description: 'A statement piece for those who carry the vision with boldness and excellence.',
  price: 360,
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  available: true,
}]

const PAYMENT_LINK = 'https://pay.yoco.com/r/2Dnw1x'

export default function MerchSection({ shopPage = false }: { shopPage?: boolean }) {
  const [items, setItems] = useState<MerchItem[]>(DEFAULT_ITEMS)
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [cartOpen, setCartOpen] = useState(false)
  const [inCart, setInCart] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('yots_merch_items')
    if (!stored) return
    try {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed) && parsed.length) {
        setItems(parsed.map((item) => ({ ...DEFAULT_ITEMS[0], ...item })))
      }
    } catch {
      // Keep the built-in product if saved CMS data is malformed.
    }
  }, [])

  const item = items.find((product) => product.available !== false) ?? DEFAULT_ITEMS[0]
  const cartTotal = inCart ? (item.price ?? 360) * quantity : 0
  const buyNowLink = item.link || PAYMENT_LINK
  const heading = shopPage ? 'Shop YOTS' : 'Shop the movement'
  const cartLabel = useMemo(() => `${quantity} ${quantity === 1 ? 'item' : 'items'}`, [quantity])

  return (
    <section
      id="shop"
      className={`relative ${shopPage ? 'yots-page min-h-screen pt-12' : ''} bg-[#141414] py-24`}
    >
      <div className="yots-container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/45 mb-4">Official merchandise</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">{heading}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Wear the movement. Represent the mission boldly.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-[#1a1a1a] border border-white/10 rounded-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/5] md:aspect-square bg-black overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 text-white/70">
                <ShoppingBag className="w-6 h-6" aria-hidden="true" />
                <span>YOTS collection</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 mb-6">Premium cotton · R{(item.price ?? 360).toFixed(2)}</p>
              <p className="text-white/65 leading-relaxed mb-8">{item.description}</p>

              <label className="text-sm uppercase tracking-widest text-white/50 mb-3 block">
                Select size
              </label>
              <div className="grid grid-cols-5 gap-2 mb-8">
                {(item.sizes ?? DEFAULT_ITEMS[0].sizes!).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded-sm ${
                      selectedSize === size
                        ? 'bg-white text-black border-white'
                        : 'border-white/15 text-white hover:border-white/40'
                    }`}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-white/50">Quantity</span>
                <div className="flex items-center border border-white/15 rounded-sm" role="group" aria-label="Quantity">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3"
                  >
                    <Minus className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span className="w-10 text-center" aria-live="polite">{quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3"
                  >
                    <Plus className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => { setInCart(true); setCartOpen(true) }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 border border-white/25 text-white rounded-sm hover:bg-white/10"
                >
                  Add to cart
                  <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={buyNowLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 bg-white text-black rounded-sm hover:bg-white/90"
                  aria-label="Buy the YOTS Yaweh Shirt on Yoco"
                >
                  Buy Now
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 flex items-end md:items-center justify-center p-4"
          onClick={() => setCartOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
        >
          <div
            className="w-full max-w-lg bg-[#1a1a1a] border border-white/15 rounded-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Your cart</h3>
              <button onClick={() => setCartOpen(false)} className="text-white/60 hover:text-white transition-colors">
                Close
              </button>
            </div>
            {inCart ? (
              <>
                <div className="flex gap-4 items-center border-b border-white/10 pb-5">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-sm" />
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-white/50 text-sm">Size {selectedSize} · {cartLabel}</p>
                  </div>
                  <button onClick={() => setInCart(false)} aria-label="Remove item from cart">
                    <Trash2 className="w-4 h-4 text-white/60" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex justify-between py-5 text-lg">
                  <span>Total</span>
                  <span>R{cartTotal.toFixed(2)}</span>
                </div>
                <a
                  href={buyNowLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-5 py-4 bg-white text-black rounded-sm hover:bg-white/90 transition-colors font-semibold"
                  aria-label="Proceed to payment on Yoco"
                >
                  Proceed to payment
                </a>
              </>
            ) : (
              <p className="py-8 text-center text-white/55">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
