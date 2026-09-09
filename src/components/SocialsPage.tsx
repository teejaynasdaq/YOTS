import { ExternalLink, MessageCircle, Music2, Youtube } from 'lucide-react'

const links = [
  ['YouTube', 'Watch YOTS teachings and media', 'https://youtube.com/@yots.official?si=qvFJnKbdKPBwMMbS', Youtube],
  ['TikTok', 'Follow the movement', 'https://www.tiktok.com/@youthofthespirit?_r=1&_t=ZS-930tXyAfNbU', Music2],
  ['WhatsApp Channel', 'Join the YOTS community', 'https://whatsapp.com/channel/0029Vb7AEz7J3jurrbZUrc3R', MessageCircle],
] as const

export default function SocialsPage() {
  return <section className="min-h-screen bg-[#0a0a0a] py-12">
    <div className="yots-container max-w-4xl">
      <p className="text-sm uppercase tracking-[0.3em] text-white/45 mb-4">Stay connected</p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Socials</h1>
      <p className="text-lg text-white/65 max-w-xl mb-12">Watch, follow and join YOTS wherever the movement is growing.</p>
      <div className="grid gap-4 md:grid-cols-3">{links.map(([title, description, href, Icon]) => <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/10 bg-[#141414] p-6 hover:border-white/30 transition-colors">
        <Icon className="w-7 h-7 mb-8 text-white/70" /><h2 className="text-xl font-semibold mb-2">{title}</h2><p className="text-sm text-white/55 mb-8">{description}</p><span className="inline-flex items-center gap-2 text-sm">Open platform <ExternalLink className="w-4 h-4" /></span>
      </a>)}</div>
    </div>
  </section>
}
