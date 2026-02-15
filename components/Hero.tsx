import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-900/10 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/30 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
            </span>
            Next-Gen Driving Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Reimagining the way you <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">drive.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
            LucidAI glasses act as your "Roadside Ally", providing real-time HUD navigation and hazard alerts for a smarter commute.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold rounded-xl shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
              Reserve Now <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-all">
              Watch Video <i className="fa-solid fa-play text-orange-500"></i>
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 20}/64/64`} className="w-10 h-10 rounded-full border-2 border-slate-950" alt="User" />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              <span className="text-white font-bold">2,500+</span> drivers already reserved
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-400 opacity-20 blur-3xl rounded-full transition-opacity group-hover:opacity-30"></div>
          <div className="relative bg-slate-900/40 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-xl animate-float">
            <div className="aspect-square bg-slate-950 rounded-2xl overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800" 
                 alt="LucidAI Glasses" 
                 className="w-full h-full object-cover mix-blend-screen opacity-90 scale-110 group-hover:scale-100 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
               
               <div className="absolute top-6 left-6 right-6">
                 <div className="flex justify-between items-start">
                    <div className="bg-orange-600/90 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">HUD Active</div>
                    <div className="bg-slate-800/80 backdrop-blur px-2 py-1 rounded text-[10px] text-white flex items-center gap-1">
                      <i className="fa-solid fa-battery-three-quarters text-green-400"></i> 84%
                    </div>
                 </div>
               </div>

               <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                      <i className="fa-solid fa-location-arrow"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Turn Right in 200m</p>
                      <p className="text-sm text-white font-bold">Main Street Blvd</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;