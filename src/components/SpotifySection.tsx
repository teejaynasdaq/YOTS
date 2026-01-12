import { ExternalLink } from 'lucide-react';

export default function SpotifySection() {
  return (
    <section className="relative bg-[#0a0a0a] yots-section overflow-hidden">
      {/* Abstract Soundwave Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <path d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M0,200 Q150,150 300,200 T600,200 T900,200 T1200,200" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />
          <path d="M0,200 Q150,250 300,200 T600,200 T900,200 T1200,200" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />
        </svg>
      </div>

      <div className="yots-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/30 mb-6 mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            The Sound of the Movement
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Music that fuels our worship and shapes our culture
          </p>
        </div>

        {/* Spotify Embed */}
        <div className="max-w-3xl mx-auto relative">
          {/* Overlay behind iframe */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
              <path d="M0,200 Q150,120 300,200 T600,200 T900,200 T1200,200" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />
              <path d="M0,200 Q150,180 300,200 T600,200 T900,200 T1200,200" stroke="white" strokeWidth="1" fill="none" opacity="0.15" />
            </svg>
          </div>

          <div className="relative p-8 md:p-10 bg-[#1a1a1a] border border-white/10 rounded-sm z-10">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/4k1qzMm8ebGv1XgKmp5SGf"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>

        {/* Open in Spotify Button */}
        <div className="text-center mt-8">
          <a 
            href="https://open.spotify.com/playlist/4k1qzMm8ebGv1XgKmp5SGf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm group"
          >
            Open in Spotify
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Abstract Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
