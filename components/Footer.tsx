
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-glasses text-white"></i>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">Lucid<span className="text-orange-600">AI</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Empowering drivers through advanced augmented reality and intelligent road assistance. Your ultimate Roadside Ally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fa-brands fa-linkedin text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Product</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">App Download</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h5>
            <p className="text-slate-400 mb-6">Stay updated on our latest features and release dates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all"
              />
              <button className="bg-orange-600 hover:bg-orange-500 px-6 py-3 rounded-xl text-white font-bold transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2024 LucidAI Technologies Inc. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
