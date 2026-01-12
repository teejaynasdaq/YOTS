import { ImageWithFallback } from './figma/ImageWithFallback';
import thapeloImg from '../assets/teejay.jpeg';

export default function TeamSection() {
  const team = [
    {
      name: "Sir TeeJay",
      role: "Movement Leader",
      image: thapeloImg,
    },
  ];

  return (
    <section className="relative bg-black yots-section py-24">
      <div className="yots-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Partners
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Students leading students into deeper relationship with Christ
          </p>
        </div>

        {/* Team Grid (centered even with one member) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
{/* Image */}
<div className="relative w-25 h-25 overflow-hidden rounded-md bg-[#1a1a1a] mb-5">
  <ImageWithFallback
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
  />
  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-all duration-500"></div>
</div>



                {/* Info */}
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-20">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-white/50">
              Accountable • United • Committed
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-3"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
