import { Heart, Users, BookOpen } from 'lucide-react';

export default function AboutSection({ id = 'about' }: { id?: string }) {
  const pillars = [
    {
      icon: Heart,
      title: 'Sonship',
      description: 'Growing into Christlikeness and learning to live like Christ.',
    },
    {
      icon: Users,
      title: 'Sound doctrine',
      description: 'Established in Scripture, spiritual maturity and biblical truth.',
    },
    {
      icon: BookOpen,
      title: 'For Christ',
      description: 'Training believers so the Lordship of Jesus Christ is glorified.',
    },
  ];

  return (
    <section id={id} className="relative py-24 md:py-32 bg-black">
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
            Youth Of The Spirit (YOTS) is an apostolic Christian movement raised to empower young
            believers in their sonship in Christ.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 grid gap-5 md:grid-cols-3 text-white/65 leading-relaxed">
          <p className="md:col-span-2">Founded in 2019 by Thapelo Shabangu, mainly known as Sir Teejay (The Bondslave), in Bushbuckridge, Mpumalanga, South Africa, YOTS was formally established in 2021.</p>
          <p>Our purpose is the glorification of the Lordship of Jesus Christ.</p>
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
