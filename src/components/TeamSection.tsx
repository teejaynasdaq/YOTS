import { ImageWithFallback } from './figma/ImageWithFallback';
import thapeloImg from '../assets/teejay.jpeg';
import sirsbuImg from '../assets/sirsbu.jpeg';
import sirsisImg from '../assets/sirsis.jpeg';
import minlefaImg from '../assets/minlefa.jpeg';

export default function TeamSection() {
  const team = [
       {
      name: "Sir TeeJay",
      role: "President",
      image: thapeloImg,
    },
   {
      name: "Min Sambo",
      role: "VC President",
      image: sirsbuImg,
    },
    {
      name: "Min Mncwango",
      role: "HOD Media",
      image: sirsisImg,
    },
      {
      name: "Ms Makhubela",
      role: "HOD Admin",
      image: minlefaImg,
    },
  ];

  return (
    <section className="relative bg-black yots-section">
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

        {/* Team Row */}
        <div className="flex justify-center items-center gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Image */}
              <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-sm bg-[#1a1a1a]">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
              </div>

              {/* Info */}
              <h3 className="text-sm md:text-base font-semibold text-white mb-1 tracking-tight">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
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
