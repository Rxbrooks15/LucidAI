import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">The Flagship</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Smart Sports Optics</h3>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          The ultimate companion for every drive. High-performance shield-lens optics 
          with integrated neural processing for a smarter, safer road experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-10 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1596703043810-6bc11327178a?auto=format&fit=crop&q=80&w=1200" 
            alt="LucidAI Sports Elite" 
            className="relative w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(249,115,22,0.3)] filter contrast-110"
          />
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
              <i className="fa-solid fa-microchip text-orange-500"></i>
              Neural Detection Engine
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Real-time analysis of traffic patterns and road hazards delivered directly to your field of vision.
            </p>
          </div>
          
          <div className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
              <i className="fa-solid fa-sun text-orange-500"></i>
              Adaptive Prism™ Lens
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Auto-tinting technology that adjusts to changing light conditions in milliseconds.
            </p>
          </div>

          <div className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
              <i className="fa-solid fa-wifi text-orange-500"></i>
              Cloud Sync HUD
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Seamless integration with your smartphone's navigation and messaging apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;