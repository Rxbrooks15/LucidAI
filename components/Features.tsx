
import React from 'react';

const featureList = [
  {
    title: "HUD Navigation",
    description: "Overlay GPS directions directly onto the glass. Never look down at your phone or car screen again.",
    icon: "fa-map-location-dot"
  },
  {
    title: "Hazard Detection",
    description: "AI scans the road for pedestrians, braking cars, and potholes, highlighting them in your vision.",
    icon: "fa-shield-halved"
  },
  {
    title: "Night Vision Pro",
    description: "Enhanced low-light visibility helps you see wildlife and road boundaries in pitch darkness.",
    icon: "fa-moon"
  },
  {
    title: "Voice Assistant",
    description: "Fully hands-free control. Adjust music, answer calls, or ask for the nearest gas station.",
    icon: "fa-microphone-lines"
  },
  {
    title: "Dashcam Mode",
    description: "Automatically records and stores critical incidents to the cloud for insurance and safety.",
    icon: "fa-video"
  },
  {
    title: "Social Connect",
    description: "Safely read and dictate messages without distracting your focus from the commute.",
    icon: "fa-comment-sms"
  }
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Core Technology</h2>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white max-w-xl leading-tight">
            Built for the safest journey of your life.
          </h3>
          <button className="px-6 py-3 border border-orange-600/30 rounded-xl text-white font-bold hover:bg-orange-600/10 transition-colors shrink-0">
            View Technical Specs
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map((feature, idx) => (
          <div 
            key={idx} 
            className="p-8 bg-slate-900/30 border border-white/5 rounded-3xl hover:border-orange-600/50 transition-all hover:-translate-y-2 group"
          >
            <div className="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
              <i className={`fa-solid ${feature.icon} text-orange-500 group-hover:text-white text-2xl`}></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
