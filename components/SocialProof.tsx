import React from 'react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      quote: "A testament that this stuff, whether we believe it or not, is real.",
      author: "John Vowels",
      role: "Acknowledgment",
      img: "1" // Placeholder, will use generic or need specific assets
    },
    {
      quote: "Learning truth wins and is never wrong.",
      author: "Mr. Hennesy",
      role: "Acknowledgment",
      img: "2"
    },
    {
      quote: "Resonates on the same truth this book comes from. Flows with powerful codes.",
      author: "Dr. Samuel Lee",
      role: "Medical Professional",
      img: "3"
    },
    {
      quote: "Living proof that prayers are answered.",
      author: "Chloe & Jordan",
      role: "The Living Proof",
      img: "4"
    },
    {
      quote: "Through the guidance of prayer... her crippling pain vanished.",
      author: "Adele Mercer",
      role: "The Author's Mother",
      img: "5"
    }
  ];

  return (
    <section className="py-24 px-6" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-20 gap-8 reveal-section">
          <div>
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-xs">Transmissions of Truth</span>
            <h2 className="text-4xl lg:text-6xl font-regal font-black mt-4 lg:mt-6 text-white tracking-tight">Voices of Connection</h2>
          </div>
          <div className="flex items-center gap-3 lg:gap-5 px-6 lg:px-10 py-3 lg:py-5 glass-card rounded-full border-2 border-white/20 shadow-2xl">
            <div className="flex text-brand-gold gap-1">
              {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-base lg:text-xl">star</span>)}
            </div>
            <span className="font-black text-[10px] lg:text-xs tracking-[0.2em] lg:tracking-[0.3em] uppercase text-white">4.9/5 FREQUENCY</span>
          </div>
        </div>
        
        <div className="masonry reveal-section">
          {testimonials.map((t, i) => (
            <div key={i} className="masonry-item glass-card p-10 rounded-[2.5rem] group hover:border-brand-gold/80 transition-all duration-500 shadow-2xl border-2 border-white/10">
              <div className="flex items-center gap-5 mb-8">
                <div className="size-16 rounded-full bg-cover border-2 border-brand-gold/40 shadow-xl" style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=${t.img}')` }}></div>
                <div>
                  <p className="font-regal text-xl font-black text-white tracking-tight">{t.author}</p>
                  <p className="text-[10px] text-brand-gold uppercase tracking-[0.4em] font-black mt-1">{t.role}</p>
                </div>
              </div>
              <p className="text-lg italic leading-relaxed text-white font-normal opacity-100">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;