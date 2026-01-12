import { Instagram, Facebook, MessageCircle, Music2 } from 'lucide-react';
import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="yots-container py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Slogan */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={yotsLogoWhite} 
                alt="YOTS Logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <div>
                <h3 className="text-xl font-medium text-white mb-1">YOTS</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  By Christ, In Christ,<br />For Christ
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-white/60 text-sm">
              <p>yots@gmail.com</p>
              <p>Mpumalanga</p>
              <p>South Africa</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white/70" strokeWidth={1.5} />
              </a>
              
              <a 
                href="https://wa.me/27658114250" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white/70" strokeWidth={1.5} />
              </a>

              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white/70" strokeWidth={1.5} />
              </a>

              <a 
                href="https://www.tiktok.com/@youthofthespirit?_r=1&_t=ZS-930tXyAfNbU" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4 text-white/70" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Abstract Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 YOTS. All rights reserved.</p>
          <p className="text-xs">
            A student-led Christian movement
          </p>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </footer>
  );
}