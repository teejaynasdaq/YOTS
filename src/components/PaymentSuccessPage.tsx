import { CheckCircle, MessageCircle, ArrowLeft, ExternalLink } from 'lucide-react'
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png'

const WHATSAPP_COMMUNITY_LINK =
  'https://chat.whatsapp.com/FuieifNsZfNHFrITBZsGTl?s=cl&p=i&mlu=4&ilr=4'

export default function PaymentSuccessPage({
  onNavigate,
}: {
  onNavigate: (page: 'home' | 'partner') => void
}) {
  return (
    <section className="yots-page min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Logo */}
      <img
        src={yotsLogoWhite}
        alt="YOTS"
        className="w-16 h-16 object-contain mb-10 opacity-80"
      />

      {/* Success icon */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl scale-150" />
        <CheckCircle
          className="relative w-20 h-20 text-white"
          strokeWidth={1.2}
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Payment Received
      </h1>
      <p className="text-white/60 text-lg max-w-md leading-relaxed mb-3">
        Thank you for partnering with YOTS. Your contribution supports the work
        of raising and equipping young believers.
      </p>
      <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-12">
        Keep your payment confirmation as proof of your partnership. You'll be
        welcomed into the YOTS Partner Community below.
      </p>

      {/* Divider */}
      <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-10" />

      {/* WhatsApp CTA */}
      <div className="w-full max-w-sm bg-[#141414] border border-white/10 rounded-2xl p-8 mb-8">
        <MessageCircle className="w-10 h-10 text-white/50 mx-auto mb-4" strokeWidth={1.5} />
        <h2 className="text-xl font-semibold mb-2">Join the Partner Community</h2>
        <p className="text-white/55 text-sm leading-relaxed mb-6">
          You're now part of the movement. Join the exclusive YOTS Partner
          WhatsApp group to stay connected, receive updates and prayer requests.
        </p>
        <a
          href={WHATSAPP_COMMUNITY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-black font-semibold rounded-sm hover:bg-white/90 transition-colors"
          aria-label="Join the YOTS Partner Community on WhatsApp"
        >
          Join WhatsApp Community
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      {/* Back buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <button
          onClick={() => onNavigate('home')}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-white/15 text-white/70 rounded-sm hover:border-white/30 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Return Home
        </button>
        <button
          onClick={() => onNavigate('partner')}
          className="flex-1 px-5 py-3 border border-white/15 text-white/70 rounded-sm hover:border-white/30 hover:text-white transition-colors text-sm"
        >
          Partner Page
        </button>
      </div>
    </section>
  )
}
