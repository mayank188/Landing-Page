import { pricingPlans } from '../../constants/pricing.js'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-blue-400 font-semibold mb-4">Pricing</div>
          <h2 className="text-4xl font-bold tracking-tight">Affordable Plans for Every Business</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {pricingPlans.map((p) => {
            const cardClass =
              p.variant === 'recommended'
                ? 'rounded-[2.5rem] border-2 border-blue-600 bg-zinc-900 p-10 lg:scale-105 shadow-[0_0_80px_-20px_rgba(37,99,235,0.4)] relative overflow-hidden flex flex-col'
                : 'rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-10 card-hover relative overflow-hidden flex flex-col'

            return (
              <div key={p.index} className={cardClass}>
                <div
                  className={
                    p.variant === 'recommended'
                      ? 'absolute top-0 left-0 right-0 bg-blue-600 py-1.5 text-center text-[10px] font-black uppercase tracking-widest'
                      : 'absolute top-0 right-0 p-6 text-4xl opacity-10 font-black'
                  }
                >
                  {p.variant === 'recommended' ? 'Recommended' : p.index}
                </div>

                {p.variant === 'recommended' ? <div className="absolute top-0 right-0 p-6 text-4xl opacity-10 font-black">{p.index}</div> : null}

                <h3 className="text-2xl font-black text-white mb-6">{p.title}</h3>

                <div className="mb-8">
                  <div className="text-4xl font-black text-white">{p.price}</div>
                  <div className="text-zinc-500 text-[10px] font-bold mt-1 uppercase tracking-widest">{p.setupLabel}</div>
                </div>

                {p.title === 'Enterprise' ? (
                  <div className="mt-4">
                    <div className="text-2xl font-black text-white italic">Custom</div>
                    <div className="text-zinc-500 text-[10px] font-bold mt-1 uppercase tracking-widest">Maintenance</div>
                  </div>
                ) : null}

                <div className="space-y-4 mb-10">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-zinc-300 font-medium text-base">
                      <span className="text-green-500 font-bold">✓</span> {f}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  {p.variant === 'recommended' ? (
                    <a href="#book-call" className="w-full">
                      <button className="w-full btn-gradient text-white py-4 rounded-2xl font-bold transition-all shadow-xl">{p.buttonLabel}</button>
                    </a>
                  ) : (
                    <button className="w-full border border-white/10 hover:bg-white/5 py-4 rounded-2xl font-bold transition-all">{p.buttonLabel}</button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

