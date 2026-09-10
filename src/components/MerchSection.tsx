import { ExternalLink } from 'lucide-react'
import emblemImg from '../assets/yots-emblem.jpg'
import shirtImg from '../assets/holy-spirit-shirt.jpg'

export type ProductItem = {
  id: string
  name: string
  image: string
  description?: string
  price?: number
  paymentUrl: string
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'yots-emblem',
    name: 'YOTS Emblem',
    image: emblemImg,
    description: 'A symbol of faith, identity, and purpose. Carry the vision with the official YOTS Emblem.',
    price: 360,
    paymentUrl: 'https://pay.yoco.com/r/Q66laN',
  },
  {
    id: 'holy-spirit-shirt',
    name: 'Holy Spirit Shirt',
    image: shirtImg,
    description: 'Premium cotton statement piece for those who carry the vision with boldness and excellence.',
    price: 360,
    paymentUrl: 'https://pay.yoco.com/r/OkkM5j',
  }
]

export default function MerchSection({ shopPage = false }: { shopPage?: boolean }) {
  const heading = shopPage ? 'Shop YOTS' : 'Shop the movement'

  return (
    <section
      id="shop"
      className={`relative ${shopPage ? 'yots-page min-h-screen pt-24' : ''} bg-black py-32`}
    >
      <div className="yots-container">
        <div className="text-center mb-24 max-w-3xl mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4 font-medium">Official merchandise</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">{heading}</h2>
          <p className="text-xl md:text-2xl text-white/70">YOTS STORE. Faith. Identity. Purpose. Explore official YOTS products.</p>
        </div>

        <div className="flex flex-col gap-32">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col items-center text-center animate-fade-in-up">
              <div className="w-full max-w-4xl aspect-[4/5] md:aspect-video mb-12 overflow-hidden bg-[#111] rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="max-w-2xl px-4 flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{product.name}</h3>
                <p className="text-lg md:text-xl text-white/60 mb-6 font-light leading-relaxed">
                  {product.description}
                </p>
                {product.price && (
                  <p className="text-2xl text-white mb-8 font-medium">
                    R{product.price.toFixed(2)}
                  </p>
                )}
                <a
                  href={product.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 hover:scale-105 transition-all font-semibold text-lg"
                  aria-label={`Buy the ${product.name} on Yoco`}
                >
                  Buy Now
                  <ExternalLink className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
