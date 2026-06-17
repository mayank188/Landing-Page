import { useMemo, useState } from 'react'
import { featureData } from '../../data/features.js'

function FeaturePanel({ index, activeFeature }) {
  return (
    <div className="feature-panel-card rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 lg:p-8 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.85)] backdrop-blur-xl">
      <div className="mb-6">
        <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">{activeFeature.title}</div>
        <p className="feature-panel-copy text-zinc-400 text-sm md:text-base leading-relaxed mt-4">{activeFeature.copy}</p>
      </div>
      <div className="grid gap-3" aria-label="module features">
        <ul className="grid gap-3">
          {activeFeature.items.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Features() {
  const tabs = useMemo(() => featureData, [])
  const [activeIndex, setActiveIndex] = useState(0)

  const tabIcons = ['🔐','📊','📦','📈','🚚','🏭','🧑‍🤝‍🧑','🎁','⚙️','🌐']
  const tabSubtitles = [
    'Admin, Manager, Staff',
    'Orders, Revenue, Status',
    'All, Pending, Shipped, Delivered',
    'Sales, Revenue, Traffic, Customers',
    'Carriers, Zones, Tracking',
    'Products, Stocks, Warehouses',
    'Segments, Reviews, Support',
    'Coupons, Flash Sales, Loyalty',
    'Payments, Tax, Currency',
    'Pages, SEO, Themes, Blog',
  ]
  const activeFeature = tabs[activeIndex] || tabs[0]

  return (
    <section
      id="features"
      className="py-14 border-t border-white/5 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_35%),linear-gradient(to_bottom,_#020617,_#090b14)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-5">
            <div className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm">Admin Panel — 10 Modules</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight max-w-2xl">Everything to run your business.</h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              Your admin panel is a complete business operating system — not just an order tracker. Every module is built
              for non-technical users.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-5 py-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.85)]">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-400 mb-2">Built for speed</div>
                <div className="text-lg font-bold text-white">Launch in 24 hours</div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-5 py-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.85)]">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-400 mb-2">Admin-ready</div>
                <div className="text-lg font-bold text-white">10 premium modules</div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-5 py-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.85)]">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-400 mb-2">Non-technical</div>
                <div className="text-lg font-bold text-white">Easy control</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-900/70 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-400">Modules</div>
                <div className="mt-3 text-3xl font-black text-white">10</div>
              </div>
              <div className="rounded-[1.5rem] bg-slate-900/70 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-400">Users</div>
                <div className="mt-3 text-3xl font-black text-white">Admin + Staff</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.15fr] xl:gap-8">
          <div className="feature-tabs-card rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.85)]">
            <div className="grid gap-3">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.title}
                  className={`feature-tab w-full text-left rounded-[1.5rem] border border-white/10 bg-slate-900/80 px-4 py-3 transition hover:border-blue-300/40 ${idx === activeIndex ? 'active-tab' : ''}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="flex items-start gap-4">
                    <span className="feature-tab-icon">{['🔐','📊','📦','📈','🚚','🏭','🧑‍🤝‍🧑','🎁','⚙️','🌐'][idx] ?? '✨'}</span>
                    <div>
                      <div className="font-semibold text-white">{tab.title}</div>
                      <div className="text-xs text-zinc-400 mt-1">
                        {[
                          'Admin, Manager, Staff',
                          'Orders, Revenue, Status',
                          'All, Pending, Shipped, Delivered',
                          'Sales, Revenue, Traffic, Customers',
                          'Carriers, Zones, Tracking',
                          'Products, Stocks, Warehouses',
                          'Segments, Reviews, Support',
                          'Coupons, Flash Sales, Loyalty',
                          'Payments, Tax, Currency',
                          'Pages, SEO, Themes, Blog',
                        ][idx]}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <FeaturePanel index={activeIndex} activeFeature={activeFeature} />
        </div>
      </div>
    </section>
  )
}

