import { Check } from 'lucide-react';

export default function BeliefsSection({ id = 'beliefs' }: { id?: string }) {
  const beliefs = [
    ['The Triune God', 'One true God eternally exists as Father, Son and Holy Spirit.'],
    ['Jesus Christ', 'Jesus Christ is the Son of God, Lord and Saviour, central to our faith and lives.'],
    ['Scripture', 'The Holy Scriptures are foundational and authoritative for faith, doctrine and living.'],
    ['Sonship', 'Believers are called to grow in sonship and become increasingly conformed to Christ.'],
    ['The Holy Spirit', 'We believe in the person, presence and active work of the Holy Spirit.'],
    ['Prayer & worship', 'Prayer and worship are a lifestyle of honouring God and seeking His will.'],
    ['Discipleship', 'Teaching, mentorship and obedience to Christ lead believers into spiritual maturity.'],
    ['Christian community', 'Believers are called to fellowship, encourage one another and grow together.'],
  ];

  return (
    <section id={id} className="relative py-24 md:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="yots-container">
        {/* Section Header with Logo */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
 
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight">What We Believe</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-xs mx-auto mb-8"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our faith is built on the foundation of biblical truth
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beliefs.map((belief, index) => {
            return (
              <div 
                key={index}
                className="group p-8 bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-sm"
              >
                {/* Icon */}
                <div className="mb-5">
                  <Check className="w-8 h-8 text-white/70" strokeWidth={1.5} />
                </div>
                
                {/* Statement */}
                <h3 className="text-lg font-semibold text-white mb-3">{belief[0]}</h3>
                <p className="text-base text-white/70 leading-relaxed">{belief[1]}</p>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-white/50">
              BY CHRIST. IN CHRIST. FOR CHRIST.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-3"></div>
          </div>
        </div>
      </div>

      {/* Bottom Abstract Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
