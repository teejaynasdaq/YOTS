import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png';
import yotsBg from '../assets/yotsbg.png'; 
import { useRouter } from 'next/router';



export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder - Using Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
  <ImageWithFallback
  src={yotsBg}
  alt="YOTS Worship"
  className="w-full h-full object-cover"
/>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Subtle Abstract Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-block relative">
            {/* Subtle glow behind logo for visibility */}
            <div className="absolute inset-0 blur-3xl bg-white/5 scale-110"></div>
            <img 
              src={yotsLogoWhite} 
              alt="YOTS - Youth of the Spirit" 
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-6 font-medium tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          
        </h2>

        {/* Slogan */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 font-light tracking-wide animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          By Christ, In Christ, For Christ.
        </p>

        {/* CTA Buttons */}
        
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
    </section>
  );
}