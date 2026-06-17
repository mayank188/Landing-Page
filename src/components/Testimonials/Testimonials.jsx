import { testimonials } from '../../data/testimonials.js'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.05)_0%,_transparent_50%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Trusted by 500+ Merchants</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Real Merchants. <br />
              <span className="text-gradient">Real Results.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-lg font-medium max-w-sm mb-2">
            Don't just take our word for it. Hear from the entrepreneurs building their dreams on ShopsSetu.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {testimonials.map((t) => {
            const cardClasses = t.highlight
              ? 'bg-zinc-900 border border-blue-500/20 rounded-[2.5rem] p-10 card-hover glass relative group lg:translate-y-10 shadow-2xl'
              : 'bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-10 card-hover glass relative group'

            const quoteHoverColor = t.highlight
              ? 'group-hover:text-indigo-500/10 transition-colors'
              : 'group-hover:text-blue-500/10 transition-colors'

            return (
              <div key={t.name} className={cardClasses}>
                <div className={`absolute top-8 right-10 text-8xl font-black text-white/[0.03] select-none ${t.highlight ? 'group-hover:text-indigo-500/10' : 'group-hover:text-blue-500/10'} transition-colors`}>“</div>

                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-zinc-300 text-lg leading-relaxed mb-12 relative z-10">
                  {t.quote.includes('zero tech knowledge') ? (
                    <>
                      "I had <span className="text-white font-bold">zero tech knowledge.</span> ShopsSetu set up my complete fashion store with admin panel in one day. I manage everything myself from my phone. My best business decision."
                    </>
                  ) : (
                    t.quote
                  )}
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-xl font-black text-white shadow-lg`}>
                    {t.avatarLetter}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{t.name}</h4>
                    <div className={`inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mt-1 ${t.highlight ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : ''} `}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

