import { Heart, Users, BookOpen } from 'lucide-react';
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png';

export default function AboutSection() {
  const pillars = [
    {
      icon: Heart,
      title: 'Spirit-Led',
      description: 'Guided by the Holy Spirit in everything we do, from worship to fellowship.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building authentic relationships and supporting each other in faith.',
    },
    {
      icon: BookOpen,
      title: 'Biblical',
      description: 'Rooted in Scripture and committed to truth and discipleship.',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-black">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="yots-container">
        {/* Section Header with Logo */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
  
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight">About YOTS</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-xs mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are a student-led Christian movement passionate about encountering God, growing in faith, 
            and impacting our campus and beyond with the love of Christ.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white/80" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}