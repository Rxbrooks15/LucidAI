import React from 'react';

const products = [
  {
    id: 3,
    name: "Oakley Meta HSTN Transitions® | Meta",
    brand: "Oakley",
    originalPrice: 479.00,
    price: 407.15,
    discount: "-15%",
    badge: "AI Glasses",
    isNew: true,
    colors: "2 colors"
  },
  {
    id: 4,
    name: "RB5445",
    brand: "Ray-Ban",
    originalPrice: 186.00,
    price: 130.20,
    discount: "-30%",
    badge: "New arrival",
    colors: "3 colors"
  }
];

const Shop: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-white/20 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              Presidents’ Day Sale
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Up to 50% off <br/>Frames & Lenses</h2>
            <p className="text-orange-50 font-medium mb-8 max-w-md">
              Get 15% off Oakley Meta HSTN, plus up to 50% off lenses and an extra 10% off AI Glasses lenses—applied automatically.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Shop the Sale
            </button>
          </div>
          <div className="hidden md:flex justify-end">
             <i className="fa-solid fa-glasses text-[12rem] text-white/20 -rotate-12 group-hover:rotate-0 transition-transform duration-700"></i>
          </div>
        </div>
      </div>

      {/* Product Grid - Centered 2 items without images */}
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-slate-900/40 border border-white/5 rounded-3xl p-8 transition-all hover:border-orange-600/30 w-full md:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)] xl:w-[calc(30%-1rem)] min-h-[220px] flex flex-col justify-center">
            {/* Badges */}
            <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
              <span className={`text-[10px] font-black px-2 py-1 rounded-md text-white uppercase ${
                product.badge === 'AI Glasses' ? 'bg-orange-600' : 
                product.badge === 'New arrival' ? 'bg-green-600' : 'bg-slate-800'
              }`}>
                {product.badge}
              </span>
            </div>

            <div className="absolute top-6 right-6 z-10">
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                {product.discount}
              </span>
            </div>

            {/* Info */}
            <div className="space-y-3 mt-4">
              <div className="flex justify-between items-start">
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest">{product.brand}</p>
                <p className="text-xs text-slate-500">{product.colors}</p>
              </div>
              <h4 className="text-xl font-bold text-white pr-4 group-hover:text-orange-400 transition-colors">
                {product.name}
              </h4>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-2xl font-black text-white">${product.price.toFixed(2)}</span>
                <span className="text-sm text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-slate-600 font-medium pt-1 italic">including premium AI lenses</p>
            </div>

            <div className="mt-8">
              <button className="w-full py-3 bg-white/5 hover:bg-orange-600 text-white font-bold rounded-xl border border-white/10 hover:border-orange-600 transition-all">
                Select Options
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-10 py-4 bg-transparent border border-orange-600/30 text-white font-bold rounded-xl hover:bg-orange-600/10 transition-colors">
          View All Eyewear
        </button>
      </div>
    </div>
  );
};

export default Shop;