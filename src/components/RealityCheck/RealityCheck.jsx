export default function RealityCheck() {
  return (
    <section className="py-20 relative overflow-hidden bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-red-500 font-bold tracking-widest uppercase text-xs mb-4">The Reality Check</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
              Stop Losing Sales to <br />
              <span className="text-zinc-600 italic">"DM Chaos."</span>
            </h2>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Instagram is great for attention, but <span className="text-white font-bold">horrible for business operations.</span>{' '}
              If you're still manually taking orders in DMs, you're leaving 70% of your potential revenue on the table.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-white/5 rounded-3xl group hover:border-red-500/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-2xl flex-shrink-0">📲</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Untraceable Payments</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">No more hunting for UPI screenshots. Automated tracking means zero errors.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-white/5 rounded-3xl group hover:border-red-500/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-2xl flex-shrink-0">📉</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Low Conversion Rate</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Customers drop off when they have to wait for your "price in DM" reply.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-500/10 blur-[100px] -z-10" />

            <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <div className="text-red-500 font-black text-[120px] absolute -top-10 -right-5 opacity-10 select-none">!</div>

              <h3 className="text-2xl font-black text-white mb-8">The "Manual" Cost</h3>

              <ul className="space-y-8">
                <li className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-400">Time spent in DMs daily</span>
                  <span className="text-red-400 font-bold">4-6 Hours</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-400">Order tracking errors</span>
                  <span className="text-red-400 font-bold">High Risk</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-400">Customer Trust Factor</span>
                  <span className="text-zinc-500 line-through decoration-red-500/50">Professional</span>
                </li>
              </ul>

              <div className="mt-12 p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                <p className="text-zinc-300 text-sm italic leading-relaxed">
                  "We were exhausted managing 50 orders a day in DMs. ShopsSetu automated everything, and now we handle 200+ orders with zero stress."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

