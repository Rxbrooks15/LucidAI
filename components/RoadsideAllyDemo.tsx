
import React, { useState } from 'react';
import { getRoadsideAdvice } from '../services/geminiService';

const RoadsideAllyDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const result = await getRoadsideAdvice(input);
    setAdvice(result || "Error connecting to Ally.");
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-slate-900/50 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-xl shadow-orange-600/20">
              <i className="fa-solid fa-headset text-3xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Talk to Ally</h2>
              <p className="text-slate-400">Experience our voice-integrated Roadside Ally. Ask about traffic, routes, or road safety.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative mb-10">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. 'How is the traffic on I-95 right now?'"
              className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 px-6 pr-16 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-slate-600"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-3 top-3 bottom-3 w-12 bg-orange-600 hover:bg-orange-500 disabled:bg-slate-800 text-white rounded-xl transition-colors flex items-center justify-center"
            >
              {loading ? (
                <i className="fa-solid fa-circle-notch animate-spin"></i>
              ) : (
                <i className="fa-solid fa-paper-plane"></i>
              )}
            </button>
          </form>

          <div className={`transition-all duration-500 ${advice ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
             <div className="bg-orange-600/5 border border-orange-600/20 rounded-2xl p-6 relative">
                <div className="absolute -top-3 left-6 px-2 bg-slate-900 text-[10px] font-bold text-orange-500 uppercase tracking-widest border border-white/5">
                  Ally Response
                </div>
                <div className="flex items-start gap-4">
                  <i className="fa-solid fa-quote-left text-orange-500/30 text-2xl mt-1"></i>
                  <p className="text-lg text-orange-100 italic font-medium leading-relaxed">
                    {advice}
                  </p>
                </div>
             </div>
          </div>

          {!advice && !loading && (
            <div className="flex flex-wrap gap-2">
              {['Is it raining ahead?', 'Fastest route to Downtown?', 'Find a nearby cafe'].map((suggestion, idx) => (
                <button 
                  key={idx}
                  onClick={() => setInput(suggestion)}
                  className="text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-400 py-2 px-4 rounded-full border border-white/5 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* HUD Elements Background Decoration */}
        <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-20">
          <div className="text-[10px] font-mono text-orange-500 space-y-1">
            <div>SCAN_RANGE: 500M</div>
            <div>NET_SPEED: 420MBPS</div>
            <div>LATENCY: 12MS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadsideAllyDemo;
