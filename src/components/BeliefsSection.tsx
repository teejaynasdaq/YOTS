import { Check } from 'lucide-react';
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png';

export default function BeliefsSection() {
  const beliefs = [
    'The Bible is the inspired and authoritative Word of God',
    'There is one God, eternally existent in three persons: Father, Son, and Holy Spirit',
    'Jesus Christ is fully God and fully man, born of a virgin',
    'Salvation is by grace through faith in Jesus Christ alone',
    'The Holy Spirit empowers believers for Christian living and service',
    'The Church is the body of Christ, called to worship, fellowship, and mission',
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="yots-container">
        {/* Section Header with Logo */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
 
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight">What We Believe</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-xs mx-auto mb-8"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our faith is built on the foundation of biblical truth
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beliefs.map((belief, index) => {
            return (
              <div 
                key={index}
                className="group p-8 bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-sm"
              >
                {/* Icon */}
                <div className="mb-5">
                  <Check className="w-8 h-8 text-white/70" strokeWidth={1.5} />
                </div>
                
                {/* Statement */}
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  {belief}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-white/50">
              Anchored in Truth
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-3"></div>
          </div>
        </div>
      </div>

      {/* Bottom Abstract Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}