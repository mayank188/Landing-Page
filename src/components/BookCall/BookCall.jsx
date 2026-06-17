export default function BookCall() {
  return (
    <section id="book-call" className="py-16 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] -z-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-blue-500 font-bold tracking-widest uppercase text-[10px] mb-4">Free Consultation</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight text-white">
              Not sure which plan <br />
              is <span className="text-gradient">right for you?</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Speak with Gopal Kumar, Founder & Product Developer at ShopsSetu. Get expert guidance on launching your online store, managing orders, and growing your business online.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-lg">⚡</div>
                <div>
                  <h4 className="text-white font-bold mb-0.5 text-sm">Response within 2 hours</h4>
                  <a
                    href="https://wa.me/917319968619?text=Hello!%20I'm%20interested%20in%20starting%20my%20online%20store%20with%20ShopsSetu.%20Can%20we%20discuss?"
                    target="_blank"
                    className="text-zinc-500 text-[13px] hover:text-blue-400 transition-colors"
                  >
                    We reply fast on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center text-lg">🎯</div>
                <div>
                  <h4 className="text-white font-bold mb-0.5 text-sm">Tailored recommendation</h4>
                  <p className="text-zinc-500 text-[13px]">We'll suggest the perfect plan for you</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-6 md:p-10 glass relative overflow-hidden">
              <h3 className="text-2xl font-black text-white mb-1">Book Your Free Call</h3>
              <p className="text-zinc-500 mb-8 text-sm font-medium">Fill this in and we'll reach out within 2 hours.</p>

              <form action="https://formspree.io/f/mjglqvrz" method="POST" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Rahul Gupta"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-blue-500 focus:outline-none text-white placeholder:text-zinc-700 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Business Name *</label>
                    <input
                      type="text"
                      name="business_name"
                      placeholder="Rahul Electronics"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-blue-500 focus:outline-none text-white placeholder:text-zinc-700 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-blue-500 focus:outline-none text-white placeholder:text-zinc-700 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="rahul@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-blue-500 focus:outline-none text-white placeholder:text-zinc-700 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Which plan are you considering?</label>
                  <select
                    name="plan"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-blue-500 focus:outline-none text-zinc-400 transition-all appearance-none"
                    defaultValue=""
                  >
                    <option value="">— Select a plan —</option>
                    <option>Starter Plan (₹799)</option>
                    <option>Pro Plan (₹999)</option>
                    <option>Enterprise (Custom)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-1">Best time to reach you</label>
                  <select
                    name="time_slot"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-blue-500 focus:outline-none text-zinc-400 transition-all appearance-none"
                    defaultValue=""
                  >
                    <option value="">— Select a time slot —</option>
                    <option>Morning (10 AM - 12 PM)</option>
                    <option>Afternoon (1 PM - 4 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-1">Tell us about your business</label>
                  <textarea
                    name="business_description"
                    placeholder="What do you sell? How many products? Any specific requirements?"
                    rows={2}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-blue-500 focus:outline-none text-white placeholder:text-zinc-700 resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg rounded-xl shadow-xl shadow-indigo-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  🗓️ Book My Free Call →
                </button>

                <p className="text-center text-zinc-600 text-[9px] font-medium leading-relaxed px-4 mt-4">
                  By submitting, you agree to be contacted by ShopsSetu via WhatsApp or email. We never spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

