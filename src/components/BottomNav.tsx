import { Home, Users, Heart, HandHeart, ShoppingBag } from 'lucide-react'

type Page = 'home' | 'socials' | 'give' | 'partner' | 'shop' | 'admin' | 'payment-success'

const NAV_ITEMS = [
  { value: 'home',    label: 'Home',    Icon: Home },
  { value: 'socials', label: 'Socials', Icon: Users },
  { value: 'give',    label: 'Give',    Icon: Heart },
  { value: 'partner', label: 'Partner', Icon: HandHeart },
  { value: 'shop',    label: 'Shop',    Icon: ShoppingBag },
] as const

type NavItem = typeof NAV_ITEMS[number]

export default function BottomNav({
  page,
  onNavigate,
}: {
  page: Page
  onNavigate: (page: Page) => void
}) {
  return (
    <nav
      className="yots-bottom-nav"
      aria-label="Primary navigation"
      role="navigation"
    >
      <div className="yots-bottom-nav__inner">
        {NAV_ITEMS.map(({ value, label, Icon }: NavItem) => {
          const isActive = page === value
          return (
            <button
              key={value}
              onClick={() => onNavigate(value)}
              className={`yots-nav-btn${isActive ? ' yots-nav-btn--active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={label}
            >
              <span className="yots-nav-btn__icon">
                <Icon
                  strokeWidth={isActive ? 2.2 : 1.5}
                  aria-hidden="true"
                />
              </span>
              <span className="yots-nav-btn__label">{label}</span>
              {isActive && <span className="yots-nav-btn__dot" aria-hidden="true" />}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
