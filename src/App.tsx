import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png';
import Hero from './components/Hero';
import SloganSection from './components/SloganSection';
import AboutSection from './components/AboutSection';
import BeliefsSection from './components/BeliefsSection';
import EventsSection from './components/EventsSection';
import SpotifySection from './components/SpotifySection';
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
    
    // Wait for page to render if switching from partner page
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const goToPartnerPage = () => {
    setCurrentPage('partner');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="yots-container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={yotsLogoWhite} 
                alt="YOTS Logo" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <span className="text-white text-lg md:text-xl font-medium tracking-tight">YOTS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={goToHome}
                className="text-sm text-white/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm text-white/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('beliefs')}
                className="text-sm text-white/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Beliefs
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-sm text-white/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-sm text-white/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Team
              </button>
              <button 
                onClick={goToPartnerPage}
                className="px-5 py-2 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm text-sm uppercase tracking-wider"
              >
                Partner
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={goToHome}
                  className="text-left text-white/70 hover:text-white transition-colors uppercase tracking-wider text-sm py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-white/70 hover:text-white transition-colors uppercase tracking-wider text-sm py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('beliefs')}
                  className="text-left text-white/70 hover:text-white transition-colors uppercase tracking-wider text-sm py-2"
                >
                  Beliefs
                </button>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-left text-white/70 hover:text-white transition-colors uppercase tracking-wider text-sm py-2"
                >
                  Events
                </button>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-left text-white/70 hover:text-white transition-colors uppercase tracking-wider text-sm py-2"
                >
                  Team
                </button>
                <button 
                  onClick={goToPartnerPage}
                  className="px-5 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm text-sm uppercase tracking-wider text-center mt-2"
                >
                  Partner
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <SloganSection />
            <div id="about">
              <AboutSection />
            </div>
            <div id="beliefs">
              <BeliefsSection />
            </div>
            <div id="events">
              <EventsSection />
            </div>
            <SpotifySection />
            <PartnersSection />
            <div id="team">
              <TeamSection />
            </div>
            <Footer />
          </>
        ) : (
          <>
            <BecomePartnerPage />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}