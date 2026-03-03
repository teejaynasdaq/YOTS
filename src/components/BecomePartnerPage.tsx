import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';
import partnerMerchImage from 'figma:asset/e7312696bfb78d9e5cebcb310121e00603a25bef.png';
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png';

export default function BecomePartnerPage() {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const sizes = ['S', 'M', 'L', 'XL'];

const handleSendSize = () => {
  if (!selectedSize) {
    alert('Please select a size first');
    return;
  }
  
  const message = `Hi! I'd like to become a YOTS Partner. My shirt size is: ${selectedSize}`;
  // Updated WhatsApp number
  const whatsappUrl = `https://wa.me/27658114250?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="yots-container">
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={yotsLogoWhite} 
                alt="YOTS Logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-90"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Become a Partner
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-sm mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Join us in building this movement and spreading the Gospel on campus
            </p>
          </div>
        </div>
      </section>

      {/* What Partnership Means */}
      <section className="relative bg-[#0a0a0a] py-20 md:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="yots-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center">
              What Partnership Means
            </h2>
            
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                Being a YOTS Partner means you're not just giving—you're joining a movement. 
                You're standing with us in prayer, in faith, and in financial commitment to see 
                students transformed by the Gospel.
              </p>
              <p>
                Partners commit to monthly giving, creating sustainable support that allows us to 
                plan, grow, and reach more students with intentionality and excellence.
              </p>
              <p>
                As a partner, you become part of an exclusive community that receives updates, 
                prayer requests, and sees firsthand the fruit of your investment in Kingdom work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Become a Partner */}
      <section className="relative bg-black py-20 md:py-24">
        <div className="yots-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center">
              How to Become a Partner
            </h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start p-8 bg-[#1a1a1a] border border-white/10 rounded-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                    Sow a Seed
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Make your monthly contribution to the designated YOTS account. 
                    Every seed you sow is stewarded with integrity and used to advance the mission.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start p-8 bg-[#1a1a1a] border border-white/10 rounded-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                    Use Your Name as Reference
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    When making your contribution, include your full name as the reference. 
                    This helps us track and acknowledge your partnership faithfully.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start p-8 bg-[#1a1a1a] border border-white/10 rounded-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                    Keep Proof of Payment
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Save your payment confirmation. This serves as your record and helps us 
                    maintain transparency and accountability in all financial matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Merch Section */}
      <section className="relative bg-[#0a0a0a] py-20 md:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="yots-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-center">
              Partner Merch
            </h2>
            <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
              As a token of appreciation, partners receive exclusive YOTS merch that 
              identifies you as part of the movement.
            </p>

            {/* Product Card */}
            <div className="grid md:grid-cols-2 gap-0 bg-[#1a1a1a] border border-white/10 overflow-hidden rounded-sm max-w-4xl mx-auto">
              {/* Product Image */}
              <div className="relative aspect-square bg-black flex items-center justify-center">
                <img 
                  src={partnerMerchImage} 
                  alt="YOTS Partners Merch" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-white/5 border border-white/20 text-white/70 text-xs uppercase tracking-wider rounded-sm mb-4">
                    Partners Exclusive
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                    YOTS Partners Shirt
                  </h3>
                  <p className="text-white/50 text-sm">
                    Premium quality, limited edition
                  </p>
                </div>

                <p className="text-white/60 mb-8 leading-relaxed">
                  Wear your commitment. This exclusive shirt is only available to YOTS Partners 
                  and represents your dedication to the movement.
                </p>

                {/* Size Selection */}
                <div className="mb-8">
                  <label className="block text-sm text-white/70 mb-3 uppercase tracking-wider">
                    Select Size
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 border rounded-sm transition-all duration-300 ${
                          selectedSize === size
                            ? 'border-white bg-white text-black'
                            : 'border-white/30 text-white hover:border-white/50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Send Size Button */}
                <button
                  onClick={handleSendSize}
                  className="w-full group flex items-center justify-center gap-2 px-6 py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-sm"
                >
                  Send Size
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-white/40 mt-4 text-center">
                  Redirects to WhatsApp with your size selection
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>

      {/* Closing Section */}
      <section className="relative bg-black py-20 md:py-24">
        <div className="yots-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-white/20 mx-auto" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Your partnership makes eternal impact. Together, we're raising a generation 
              that lives radically for Christ.
            </p>
            <button className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-sm">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}