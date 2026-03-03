import { useEffect, useState } from 'react';
import yaweh from '../assets/yaweh.jpeg';
import { ExternalLink, X } from 'lucide-react';

type MerchItem = {
  id: string;
  title: string;
  image: string;
  link?: string;
};

const DEFAULT_ITEMS: MerchItem[] = [
  {
    id: 'yots-merch-1',
    title: 'YOTS Yaweh Shirt',
    image: yotsLogoWhite,
    link: undefined,
  },
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const;

export default function MerchSection() {
  const [items, setItems] = useState<MerchItem[]>(DEFAULT_ITEMS);
  const [selectedSize, setSelectedSize] = useState<typeof SIZES[number]>('M');
  const [open, setOpen] = useState(false);
  const paymentLink = 'https://pay.yoco.com/r/2Dnw1x';

  useEffect(() => {
    try {
      const raw = localStorage.getItem('yots_merch_items');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {}
  }, []);

  return (
    <section className="relative yots-section bg-[#0a0a0a]">
      <div className="yots-container">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Shop</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent max-w-sm mx-auto my-4" />
          <p className="text-white/70 text-base md:text-lg">
            Support the movement with official YOTS merch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 bg-[#1a1a1a] border border-white/10 overflow-hidden rounded-sm max-w-4xl mx-auto">
          <div className="relative aspect-square bg-black flex items-center justify-center">
            <img
              src={(items[0]?.image || yotsLogoWhite) as string}
              alt={items[0]?.title || 'YOTS Merch'}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/20 text-white/70 text-xs uppercase tracking-wider rounded-sm mb-4">
                Official Merch
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {items[0]?.title || 'YOTS Shirt'}
              </h3>
              <p className="text-white/50 text-sm">Premium quality</p>
            </div>

            <p className="text-white/60 mb-8 leading-relaxed">
              Wear the movement. Select your size and proceed to secure checkout.
            </p>

            <div className="mb-8">
              <label className="block text-sm text-white/70 mb-3 uppercase tracking-wider">
                Select Size
              </label>
              <div className="grid grid-cols-5 gap-3">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-sm ${
                      selectedSize === size
                        ? 'bg-white text-black border-white'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-sm self-start"
            >
              Buy Now
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-[#141414] border border-white/10 rounded-sm overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-sm border border-white/20 hover:bg-white hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-4">Checkout</h4>
              <div className="flex gap-4 items-center mb-6">
                <div className="w-20 h-20 border border-white/20 rounded-sm overflow-hidden bg-black">
                  <img
                    src={(items[0]?.image || yotsLogoWhite) as string}
                    alt={items[0]?.title || 'YOTS Merch'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">{items[0]?.title || 'YOTS Shirt'}</div>
                  <div className="text-white/70 text-sm">Size: {selectedSize}</div>
                  <div className="text-white/70 text-sm">Amount: R360.00</div>
                </div>
              </div>
              <a
                href={(items[0]?.link || paymentLink) + `?item=${encodeURIComponent(items[0]?.title || 'YOTS Shirt')}&size=${encodeURIComponent(selectedSize)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-sm"
              >
                Pay Securely
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
