export default function Templates() {
  return (
    <section id="templates" className="hidden py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3">Masterpieces</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-2xl leading-tight">
              Designed to <br />
              <span className="text-gradient">Convert Visitors.</span>
            </h2>
          </div>

          <p className="text-zinc-400 max-w-lg text-lg leading-relaxed">
            Our templates aren't just pretty. They are precision-engineered to guide your customers from landing to
            checkout in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* CARD 1: STYLE-KART */}
          <a
            href="https://eskocart.shopssetu.shop/"
            target="_blank"
            className="group bg-zinc-900 border border-white/5 rounded-[1.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 glass block"
          >
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="w-full text-center py-3 bg-white text-black font-bold rounded-xl text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Preview Template
                </span>
              </div>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-white mb-1">Style-Kart</h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Apparel & Luxury</p>
            </div>
          </a>

          {/* CARD 2: BEAUTY */}
          <div className="group bg-zinc-900 border border-white/5 rounded-[1.5rem] overflow-hidden hover:border-indigo-500/30 transition-all duration-500 glass">
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <button className="w-full py-3 bg-white text-black font-bold rounded-xl text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Preview Template
                </button>
              </div>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-white mb-1">Beauty Brand</h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Cosmetics & Spa</p>
            </div>
          </div>

          {/* CARD 3: TECH STORE */}
          <a
            href="https://technova.shopssetu.shop"
            target="_blank"
            className="group bg-zinc-900 border border-white/5 rounded-[1.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500 glass block"
          >
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="w-full text-center py-3 bg-white text-black font-bold rounded-xl text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Preview Template
                </span>
              </div>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-white mb-1">Tech Store</h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Gadgets & Gear</p>
            </div>
          </a>

          {/* CARD 4: ORGANIC */}
          <div className="group bg-zinc-900 border border-white/5 rounded-[1.5rem] overflow-hidden hover:border-emerald-500/30 transition-all duration-500 glass">
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <button className="w-full py-3 bg-white text-black font-bold rounded-xl text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Preview Template
                </button>
              </div>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-white mb-1">Organic Market</h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Food & Grocery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

