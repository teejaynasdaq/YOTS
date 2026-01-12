import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import jesusTourImg from '../assets/JesusTour.jpeg'; // fixed import

export default function EventsSection() {
  const featuredEvent = {
    title: "National Jesus Tour",
    date: "2026",
    time: "All year round",
    location: "South Africa",
    description: "Jesus To South Africa (J2SA) is a nationwide movement of young people committed to sharing the love of Christ across South Africa through music, dance, drama, and testimony. Join us as we travel to various cities, spreading hope and faith through powerful worship experiences and community outreach.",
    image: jesusTourImg
  };

  return (
    <section className="relative bg-black yots-section">
      <div className="yots-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Upcoming Events</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Join us as we gather, grow, and pursue Christ together
          </p>
        </div>

        {/* Featured Event */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-0 bg-[#1a1a1a] border border-white/10 overflow-hidden rounded-sm group hover:border-white/20 transition-all duration-300">
            {/* Image */}
            <div className="relative h-80 md:h-auto overflow-hidden">
              <ImageWithFallback
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded-sm border border-white/20">
                  Featured
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                {featuredEvent.title}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-white/70">
                  <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>{featuredEvent.time}</span>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>

              <p className="text-white/60 mb-8 leading-relaxed">
                {featuredEvent.description}
              </p>

              <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-sm self-start">
                RSVP Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
