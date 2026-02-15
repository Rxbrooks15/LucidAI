
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <i className="fa-solid fa-glasses text-white text-xl"></i>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">Lucid<span className="text-orange-600">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-orange-500 transition-colors">Features</a>
          <a href="#shop" className="hover:text-orange-500 transition-colors">Shop</a>
          <a href="#ai-demo" className="hover:text-orange-500 transition-colors">Roadside Ally</a>
          <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-slate-300 hover:text-white transition-colors px-4 py-2 font-semibold">Log In</button>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
            Reserve Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
