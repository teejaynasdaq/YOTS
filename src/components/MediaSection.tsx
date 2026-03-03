import { useEffect, useState } from 'react';
import { Youtube, MessageCircle, ExternalLink } from 'lucide-react';

const DEFAULT_YOUTUBE_VIDEO = 'https://youtu.be/J53gX3o9NHg';
const DEFAULT_YOUTUBE_CHANNEL = 'https://youtube.com/@yots.official?si=qvFJnKbdKPBwMMbS';
const DEFAULT_WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029Vb7AEz7J3jurrbZUrc3R';

export default function MediaSection() {
  const [youtubeVideo, setYoutubeVideo] = useState<string>(DEFAULT_YOUTUBE_VIDEO);
  const [youtubeChannel, setYoutubeChannel] = useState<string>(DEFAULT_YOUTUBE_CHANNEL);
  const [whatsappChannel, setWhatsappChannel] = useState<string>(DEFAULT_WHATSAPP_CHANNEL);

  useEffect(() => {
    try {
      const links = localStorage.getItem('yots_media_links');
      if (links) {
        const parsed = JSON.parse(links);
        if (parsed.youtubeVideo) setYoutubeVideo(parsed.youtubeVideo);
        if (parsed.youtubeChannel) setYoutubeChannel(parsed.youtubeChannel);
        if (parsed.whatsappChannel) setWhatsappChannel(parsed.whatsappChannel);
      }
    } catch {}
  }, []);

  const getEmbedUrl = () => {
    const idMatch = youtubeVideo.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{6,})/);
    const id = idMatch ? idMatch[1] : 'J53gX3o9NHg';
    return `https://www.youtube.com/embed/${id}?rel=0`;
  };
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
            <div className="mt-6 relative rounded-sm border border-white/10 bg-[#0e0e0e] overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl()}
                  title="YOTS Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
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

