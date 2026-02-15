
import React from 'react';

const testimonials = [
  {
    quote: "LucidAI glasses feel invisible, yet make everything around me smarter and sharper. I don't think I can ever drive without them again.",
    author: "Sarah J.",
    role: "Daily Commuter",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The hazard detection saved me from a major collision on a foggy night. It's like having a co-pilot who never gets tired.",
    author: "Michael R.",
    role: "Long-haul Trucker",
    avatar: "https://picsum.photos/seed/mike/100/100"
  },
  {
    quote: "Finally, a heads-up display that actually works. The integration with Google Maps is seamless and perfectly positioned.",
    author: "Elena T.",
    role: "Tech Journalist",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Loved by Drivers</h2>
        <div className="flex items-center justify-center gap-1 text-orange-500 text-xl">
          {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
        </div>
        <p className="text-slate-400 mt-4">Based on 500+ Early Access Reviews</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 relative flex flex-col justify-between">
            <p className="text-lg text-slate-200 leading-relaxed italic mb-8">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-orange-600/30" />
              <div>
                <h4 className="text-white font-bold">{t.author}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
            <i className="fa-solid fa-quote-right absolute top-8 right-8 text-4xl text-white/5"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
