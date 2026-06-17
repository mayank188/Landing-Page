export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-grid">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent -z-10"
      />
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] -z-10 animate-pulse" />
      <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-5 py-2.5 text-sm font-semibold text-blue-300 mb-10 shadow-2xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Next-Gen E-commerce for India
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
            Launch Your
            <span className="block text-gradient">Online Store</span>
            in 1 hour
          </h1>

          <p className="mt-8 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg">
            Transform your small business into a <span className="text-white font-bold">global brand</span> with a stunning
            online store that works while you sleep.
          </p>

          <div className="mt-10 sm:mt-14 flex flex-wrap gap-4 sm:gap-6">
            <a href="#book-call" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto btn-gradient text-white px-8 sm:px-12 py-4 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black text-lg sm:text-xl hover:scale-105 transition-all shadow-blue-500/20 shadow-2xl">
                Book a Call Now →
              </button>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-black text-white">1hr</div>
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-1">Setup Time</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">0%</div>
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-1">Transaction Fee</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">24/7</div>
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-1">Expert Support</div>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[650px] flex items-center">
          <div className="absolute inset-0 bg-blue-600 blur-[180px] opacity-15" />

          <div className="relative w-full h-full bg-zinc-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_120px_-20px_rgba(59,130,246,0.3)] transition-all duration-1000 ease-in-out group">
            <img
              src="/src/assets/images/hero-image.png"
              alt="Hero"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="glass p-6 md:p-8 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-2xl max-w-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <h3 className="font-black text-xl md:text-2xl text-white">"Sales tripled in 30 days"</h3>
                    <p className="text-zinc-400 text-sm mt-2">Rahul G. • Fashion House</p>
                  </div>

                  <div className="bg-blue-600/20 text-blue-400 p-4 rounded-3xl hidden sm:block">
                    <span className="text-3xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

