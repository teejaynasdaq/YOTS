import yotsLogoWhite from 'figma:asset/74a3a77e2cada444678c4f2ce9720c90450cd7ae.png';

export default function SloganSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="yots-container">
        <div className="max-w-5xl mx-auto text-center">
          {/* Small centered logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={yotsLogoWhite} 
              alt="YOTS" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-60"
            />
          </div>
          
          {/* Main Slogan */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 tracking-tight leading-tight">
            By Christ, In Christ, For Christ.
          </h2>
        </div>
      </div>
    </section>
  );
}