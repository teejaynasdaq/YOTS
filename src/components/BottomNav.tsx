import { Home, Users, Heart, HandHeart, ShoppingBag } from 'lucide-react'

type Page = 'home' | 'socials' | 'give' | 'partner' | 'shop' | 'admin'

export default function BottomNav({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  const items = [
    ['home', 'Home', Home],
    ['socials', 'Socials', Users],
    ['give', 'Give', Heart],
    ['partner', 'Partner', HandHeart],
    ['shop', 'Shop', ShoppingBag],
  ] as const
  return <nav className="yots-bottom-nav fixed bottom-0 left-0 right-0 z-50 px-3 md:px-6" aria-label="Primary navigation">
    <div className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-[#151515]/95 backdrop-blur-xl shadow-2xl">
      <div className="flex w-full flex-row">
        {items.map(([value, label, Icon]) => <button key={value} onClick={() => onNavigate(value)} className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 whitespace-nowrap px-1 py-3 text-[11px] leading-none transition-colors sm:px-2 sm:text-xs ${page === value ? 'text-white' : 'text-white/45 hover:text-white/80'}`} aria-current={page === value ? 'page' : undefined}>
          <Icon className="h-5 w-5 shrink-0" strokeWidth={page === value ? 2 : 1.5} /><span className="max-w-full overflow-hidden text-ellipsis">{label}</span>
        </button>)}
      </div>
    </div>
  </nav>
}
