
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import RoadsideAllyDemo from './components/RoadsideAllyDemo';
import Shop from './components/Shop';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrollY > 50} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="features" className="py-24">
          <Features />
        </section>

        <section id="shop" className="py-24 bg-slate-950">
          <Shop />
        </section>

        <section id="ai-demo" className="py-24 bg-gradient-to-b from-slate-950 to-orange-950/20">
          <RoadsideAllyDemo />
        </section>

        <section id="reviews" className="py-24">
          <Testimonials />
        </section>
      </main>

      <Footer />

      {/* Persistent CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-6">
        <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full shadow-2xl shadow-orange-600/20 flex items-center justify-center gap-2 transition-transform active:scale-95">
          Reserve Now <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
