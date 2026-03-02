import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import yotsLogoWhite from './assets/yotsLogoWhite.png';
import Hero from './components/Hero';
import SloganSection from './components/SloganSection';
import AboutSection from './components/AboutSection';
import BeliefsSection from './components/BeliefsSection';
import EventsSection from './components/EventsSection';
import SpotifySection from './components/SpotifySection';
import MediaSection from './components/MediaSection';
import PartnersSection from './components/PartnersSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import BecomePartnerPage from './components/BecomePartnerPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'partner'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="yots-container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={yotsLogoWhite} alt="YOTS Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
            <span className="text-white text-lg md:text-xl font-medium tracking-tight">YOTS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className="text-sm text-white/70 hover:text-white uppercase tracking-wider">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-white/70 hover:text-white uppercase tracking-wider">About</button>
            <button onClick={() => scrollToSection('beliefs')} className="text-sm text-white/70 hover:text-white uppercase tracking-wider">Beliefs</button>
            <button onClick={() => scrollToSection('events')} className="text-sm text-white/70 hover:text-white uppercase tracking-wider">Events</button>
            <button onClick={() => scrollToSection('team')} className="text-sm text-white/70 hover:text-white uppercase tracking-wider">Team</button>
            <button onClick={() => setCurrentPage('partner')} className="px-5 py-2 border border-white/30 text-white hover:bg-white hover:text-black rounded-sm text-sm uppercase tracking-wider">Partner</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center">
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <button onClick={() => setCurrentPage('home')} className="text-left text-white/70 hover:text-white uppercase tracking-wider text-sm py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-white/70 hover:text-white uppercase tracking-wider text-sm py-2">About</button>
              <button onClick={() => scrollToSection('beliefs')} className="text-left text-white/70 hover:text-white uppercase tracking-wider text-sm py-2">Beliefs</button>
              <button onClick={() => scrollToSection('events')} className="text-left text-white/70 hover:text-white uppercase tracking-wider text-sm py-2">Events</button>
              <button onClick={() => scrollToSection('team')} className="text-left text-white/70 hover:text-white uppercase tracking-wider text-sm py-2">Team</button>
              <button onClick={() => setCurrentPage('partner')} className="px-5 py-3 border border-white/30 text-white hover:bg-white hover:text-black rounded-sm text-sm uppercase tracking-wider text-center mt-2">Partner</button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <SloganSection />
            <AboutSection id="about" />
            <BeliefsSection id="beliefs" />
            <EventsSection id="events" />
            <MediaSection />
            <SpotifySection />
            <PartnersSection />
            <TeamSection id="team" />
            <Footer />
          </>
        ) : (
          <BecomePartnerPage />
        )}
      </main>
    </div>
  );
}
