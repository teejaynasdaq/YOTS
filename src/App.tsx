import { useEffect, useState } from 'react'
import { BookOpen, Heart, Users } from 'lucide-react'
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png'
import Hero from './components/Hero'
import SloganSection from './components/SloganSection'
import AboutSection from './components/AboutSection'
import BeliefsSection from './components/BeliefsSection'
import EventsSection from './components/EventsSection'
import SpotifySection from './components/SpotifySection'
import MediaSection from './components/MediaSection'
import MerchSection from './components/MerchSection'
import PartnersSection from './components/PartnersSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'
import BecomePartnerPage from './components/BecomePartnerPage'
import AdminAuth from './components/admin/AdminAuth'
import BottomNav from './components/BottomNav'
import SocialsPage from './components/SocialsPage'
import GivePage from './components/GivePage'
import PaymentSuccessPage from './components/PaymentSuccessPage'

export type Page = 'home' | 'socials' | 'give' | 'partner' | 'shop' | 'admin' | 'payment-success'

function FormationSection() {
  return <section className="bg-[#0a0a0a] py-24" id="sonship">
    <div className="yots-container max-w-6xl">
      <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] items-start">
        <div><p className="text-sm uppercase tracking-[0.3em] text-white/45 mb-4">At the heart of YOTS</p><h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Sonship</h2><p className="text-xl text-white/70 leading-relaxed mb-6">Sonship is not merely a title. It is learning to live like Christ through character, obedience, love, holiness, humility, faith and service.</p><p className="text-white/55 leading-relaxed">YOTS trains believers in their sonship so that Christ is increasingly reflected through their lives, for the glorification of the Lordship of Jesus Christ.</p></div>
        <div className="grid gap-4">{[['Our vision', 'To raise and empower young believers in their sonship in Christ, established in sound doctrine and prepared to live lives that glorify Jesus Christ.', Users], ['Our mission', 'To raise, train, disciple, mentor and empower young believers for Christian service and genuine community.', Heart], ['Prayer & formation', 'A lifestyle of prayer, intercession, worship, dependence upon God and seeking His will.', BookOpen]].map(([title, text, Icon]) => <div key={title as string} className="rounded-2xl border border-white/10 bg-[#141414] p-6"><Icon className="w-6 h-6 text-white/60 mb-5" /><h3 className="text-xl font-semibold mb-2">{title as string}</h3><p className="text-sm text-white/60 leading-relaxed">{text as string}</p></div>)}</div>
      </div>
      <div className="mt-12 border-l-2 border-white/30 pl-6 text-white/70 italic">"For as many as are led by the Spirit of God, they are the sons of God." <span className="not-italic text-white/45">— Romans 8:14</span></div>
    </div>
  </section>
}

function Home() {
  return <><Hero /><SloganSection /><AboutSection /><FormationSection /><BeliefsSection /><EventsSection /><MediaSection /><SpotifySection /><PartnersSection /><TeamSection /><Footer /></>
}

// Resolve page from URL hash
function pageFromHash(hash: string): Page {
  const slug = hash.replace('#', '').toLowerCase()
  const valid: Page[] = ['home', 'socials', 'give', 'partner', 'shop', 'admin', 'payment-success']
  return (valid.includes(slug as Page) ? slug : 'home') as Page
}

export default function App() {
  const [page, setPage] = useState<Page>(() => pageFromHash(window.location.hash))
  const [showSecondary, setShowSecondary] = useState(false)

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (next: Page) => {
    setPage(next)
    window.location.hash = next === 'home' ? '' : next
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Hide top header on success page (minimal chrome)
  const showHeader = page !== 'payment-success'

  return (
    <div className="yots-app-shell min-h-screen bg-black text-white">
      {showHeader && (
        <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
          <div className="yots-container py-4 flex items-center justify-between">
            <button
              onClick={() => navigate('home')}
              className="pointer-events-auto flex items-center gap-3"
              aria-label="Go to YOTS home"
            >
              <img src={yotsLogoWhite} alt="YOTS Logo" className="w-10 h-10 object-contain" />
              <span className="font-semibold tracking-tight">YOTS</span>
            </button>
            {page === 'home' && (
              <button
                onClick={() => setShowSecondary(!showSecondary)}
                className="pointer-events-auto rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm text-white/70"
              >
                {showSecondary ? 'Close' : 'Explore'}
              </button>
            )}
          </div>
          {showSecondary && (
            <div className="pointer-events-auto mx-4 mt-2 max-w-sm rounded-2xl border border-white/15 bg-[#151515]/95 p-4 md:ml-auto md:mr-8">
              <div className="grid gap-2 text-sm">
                {[
                  ['about', 'About YOTS'],
                  ['sonship', 'Sonship'],
                  ['beliefs', 'What We Believe'],
                  ['events', 'Events'],
                  ['media', 'Media'],
                  ['spotify', 'Spotify'],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => {
                      setShowSecondary(false)
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="rounded-lg px-3 py-2 text-left text-white/70 hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>
      )}

      <main className={page === 'home' ? 'pt-0 yots-main-content' : 'pt-20 yots-main-content'}>
        {page === 'home'           && <Home />}
        {page === 'socials'        && <SocialsPage />}
        {page === 'give'           && <GivePage onNavigate={navigate} />}
        {page === 'partner'        && <BecomePartnerPage onNavigate={navigate} />}
        {page === 'shop'           && <MerchSection shopPage />}
        {page === 'admin'          && <AdminAuth />}
        {page === 'payment-success' && (
          <PaymentSuccessPage onNavigate={navigate} />
        )}
      </main>

      {/* Bottom nav hidden on admin and success page */}
      {page !== 'admin' && (
        <BottomNav page={page} onNavigate={navigate} />
      )}
    </div>
  )
}
