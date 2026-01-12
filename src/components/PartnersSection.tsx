import { Heart, Users } from 'lucide-react';

export default function PartnersSection() {
  return (
    <section className="relative bg-[#141414] yots-section">
      {/* Top Abstract Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="yots-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            YOTS Partners
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Join us in advancing the Kingdom. Whether through giving or becoming a partner, 
            your support helps us reach more students with the life-changing message of Christ.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Giving */}
          <div className="p-8 md:p-10 bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-sm group">
            <div className="mb-6">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Give
              </h3>
            </div>
            
            <p className="text-white/60 leading-relaxed mb-8">
              Make a one-time contribution to support YOTS. Every seed sown helps us 
              create spaces where students encounter the transforming power of Jesus Christ.
            </p>

            <div className="space-y-3 mb-8 text-sm text-white/50">
              <p>• Support student events and gatherings</p>
              <p>• Fund resources and materials</p>
              <p>• Enable community outreach</p>
            </div>

            {/* Give Now Button */}
            <a
              href="https://pay.yoco.com/youth-of-the-spirit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-black font-bold rounded-sm hover:bg-white/90 transition"
            >
              Give Now
            </a>
          </div>

          {/* Become a Partner */}
          <div className="p-8 md:p-10 bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-sm group">
            <div className="mb-6">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Become a Partner
              </h3>
            </div>
            
            <p className="text-white/60 leading-relaxed mb-8">
              Partnership is more than giving—it's a covenant relationship. Join a community 
              of committed believers who invest regularly in this movement.
            </p>

            <div className="space-y-3 mb-8 text-sm text-white/50">
              <p>• Monthly partnership commitment</p>
              <p>• Exclusive partner community</p>
              <p>• Partner merch and resources</p>
            </div>

            {/* Give Now Button */}
            <a
              href="https://pay.yoco.com/youth-of-the-spirit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-black font-bold rounded-sm hover:bg-white/90 transition"
            >
              Give Now
            </a>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p className="text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
            All contributions are handled with integrity and transparency. 
            We steward every gift as a sacred trust, ensuring maximum Kingdom impact.
          </p>
        </div>
      </div>

      {/* Bottom Abstract Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
