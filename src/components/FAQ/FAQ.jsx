import { faqItems } from '../../data/faq.js'

export default function FAQ() {
  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Transparent & Honest
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
            Every question. <br />
            <span className="text-gradient">Answered honestly.</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto mt-4 text-base">
            We believe in building business relationships on trust. No hidden fees, no fine print, just straight talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            {faqItems.slice(0, 4).map((it) => (
              <details
                key={it.q}
                className="group bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden glass transition-all duration-500 hover:border-blue-500/30"
              >
                <summary className="list-none cursor-pointer px-7 py-5 flex items-center justify-between text-left group-hover:bg-white/[0.02] transition-all">
                  <span className="text-lg font-bold text-zinc-100 pr-8">{it.q}</span>
                  <span className="faq-icon text-2xl text-zinc-600 group-hover:text-blue-400 transition-all duration-500 font-light">+</span>
                </summary>
                <div className="px-7 pb-6 text-zinc-400 leading-relaxed text-base animate-fadeIn">{it.a}</div>
              </details>
            ))}
          </div>

          <div className="space-y-3">
            {faqItems.slice(4).map((it) => (
              <details
                key={it.q}
                className="group bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden glass transition-all duration-500 hover:border-blue-500/30"
              >
                <summary className="list-none cursor-pointer px-7 py-5 flex items-center justify-between text-left group-hover:bg-white/[0.02] transition-all">
                  <span className="text-lg font-bold text-zinc-100 pr-8">{it.q}</span>
                  <span className="faq-icon text-2xl text-zinc-600 group-hover:text-blue-400 transition-all duration-500 font-light">+</span>
                </summary>
                <div className="px-7 pb-6 text-zinc-400 leading-relaxed text-base animate-fadeIn">{it.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

