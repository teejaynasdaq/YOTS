import { ExternalLink, Heart, ArrowRight } from 'lucide-react'
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png'

const GIVE_URL = 'https://pay.yoco.com/youth-of-the-spirit'

const WAYS_TO_GIVE = [
  {
    title: 'One-Time Gift',
    description:
      'Make a single, meaningful contribution. Every amount helps us host events, create resources, and reach more students with the Gospel.',
    cta: 'Give Once',
  },
  {
    title: 'Regular Giving',
    description:
      'Commit to monthly giving and become a steady stream of Kingdom support. Consistent giving allows us to plan with faith and purpose.',
    cta: 'Give Monthly',
  },
  {
    title: 'Partner with YOTS',
    description:
      'Become a full partner—co-labouring with us through prayer, financial commitment, and community. Partners receive exclusive updates.',
    cta: 'Become a Partner',
    isPartner: true,
  },
]

export default function GivePage({
  onNavigate,
}: {
  onNavigate?: (page: 'partner') => void
}) {
  return (
    <div className="yots-page min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Subtle top rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="yots-container max-w-4xl">
          <div className="flex justify-center mb-8">
            <img
              src={yotsLogoWhite}
              alt="YOTS"
              className="w-14 h-14 object-contain opacity-70"
            />
          </div>

          <div className="w-14 h-14 rounded-2xl border border-white/15 flex items-center justify-center mb-8 mx-auto">
            <Heart className="w-6 h-6 text-white/70" strokeWidth={1.5} />
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-white/45 mb-4 text-center">
            Support the work
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center">
            Give
          </h1>
          <p className="text-xl text-white/65 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
            Your giving supports the work and ministry of YOTS as we raise and
            empower young believers in their sonship in Christ. Every seed sown
            is an investment in eternity.
          </p>

          {/* Primary CTA */}
          <div className="flex justify-center">
            <a
              href={GIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-white/90 transition-colors"
              aria-label="Give through Yoco — opens in a new tab"
            >
              Give through Yoco
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section className="relative py-20 bg-black">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="yots-container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Ways to Give
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {WAYS_TO_GIVE.map(({ title, description, cta, isPartner }) => (
              <div
                key={title}
                className="bg-[#141414] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-8">
                  {description}
                </p>
                {isPartner ? (
                  <button
                    onClick={() => onNavigate?.('partner')}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    {cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                ) : (
                  <a
                    href={GIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
                    aria-label={`${cta} — opens Yoco giving page`}
                  >
                    {cta}
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="yots-container max-w-2xl">
          <div className="border-l-2 border-white/20 pl-6 text-white/60 italic text-lg leading-relaxed">
            "Each one must give as he has decided in his heart, not reluctantly
            or under compulsion, for God loves a cheerful giver."
            <span className="block not-italic text-white/35 text-sm mt-3">
              — 2 Corinthians 9:7
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
