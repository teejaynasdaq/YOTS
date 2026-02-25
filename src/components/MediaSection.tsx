import { Youtube, MessageCircle, ExternalLink, Play } from 'lucide-react';

const youtubeChannel = 'https://youtube.com/@yots.official?si=qvFJnKbdKPBwMMbS';
const whatsappChannel = 'https://whatsapp.com/channel/0029Vb7AEz7J3jurrbZUrc3R';

export default function MediaSection() {
  return (
    <section id="media" className="relative yots-section bg-[#0a0a0a]">
      <div className="yots-container">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Youth of the Spirit Media</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent max-w-sm mx-auto my-4" />
          <p className="text-white/70 text-base md:text-lg">
            Stay connected through our YouTube teachings and WhatsApp community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="rounded-sm border border-white/10 bg-[#141414] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Watch Our Teachings</h3>
              </div>
              <a
                href={youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-3 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-black transition-all"
              >
                Watch Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 relative h-40 rounded-sm border border-white/10 bg-[#0e0e0e] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/80 text-base md:text-lg">Watch our latest teachings on YouTube</div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-[#141414] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Join Our WhatsApp Channel</h3>
              </div>
              <a
                href={whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-3 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-black transition-all"
              >
                Join Channel
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 relative h-40 rounded-sm border border-white/10 bg-[#0e0e0e] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black" />
              <div className="relative z-10 text-white/80 text-base md:text-lg">
                Connect with our community on WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

