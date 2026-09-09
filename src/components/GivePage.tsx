import { ExternalLink, Heart } from 'lucide-react'

export default function GivePage() {
  return <section className="min-h-screen bg-[#0a0a0a] py-12">
    <div className="yots-container max-w-3xl">
      <div className="w-14 h-14 rounded-2xl border border-white/15 flex items-center justify-center mb-8"><Heart className="w-6 h-6" /></div>
      <p className="text-sm uppercase tracking-[0.3em] text-white/45 mb-4">Support the work</p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Give</h1>
      <p className="text-xl text-white/65 leading-relaxed mb-10">Your giving supports the work and ministry of YOTS as we raise and empower young believers in their sonship in Christ.</p>
      <a href="https://pay.yoco.com/youth-of-the-spirit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 bg-white text-black rounded-sm">Give through Yoco <ExternalLink className="w-4 h-4" /></a>
    </div>
  </section>
}
