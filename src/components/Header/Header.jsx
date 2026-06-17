import { useEffect, useMemo, useState } from 'react'
import logoTransparent from '../../assets/images/logo-transparent.png'
import { NAV_DESKTOP_LINKS, NAV_MOBILE_LINKS, SOCIAL_LINKS } from '../../constants/nav.js'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const mobileLinks = useMemo(() => NAV_MOBILE_LINKS, [])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="site-header-bar max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <div className="brand-logo-wrap brand-logo-wrap--nav">
            <img src={logoTransparent} alt="ShopsSetu Logo" className="h-10 w-10 object-contain" />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight text-gradient truncate">
            ShopsSetu
          </h3>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-zinc-400">
          {NAV_DESKTOP_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-blue-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <a
            href="mailto:hello@shopssetu.shop"
            className="hidden lg:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-lg backdrop-blur-md"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            hello@shopssetu.shop
          </a>

          <a href="#book-call" className="hidden sm:block">
            <button className="btn-gradient text-white px-6 md:px-8 py-3 rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest hover:scale-105 transition shadow-lg">
              Book a Call
            </button>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] bg-black/90 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-500 md:hidden flex flex-col ${
          isOpen ? 'opacity-100 pointer-events-auto' : ''
        }`}
      >
        <div
          id="menu-container"
          className={`menu-panel w-full border-b border-white/10 p-8 sm:p-10 pt-20 sm:pt-24 -translate-y-full transition-transform duration-500 ease-out shadow-2xl ${
            isOpen ? 'translate-y-0' : ''
          }`}
        >
          <button
            id="menu-close"
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-8 p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-10 text-xl font-black uppercase tracking-[0.2em] text-white">
            {mobileLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="mobile-link hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </a>
            ))}

            <a
              href="mailto:hello@shopssetu.shop"
              className="mobile-link text-zinc-300 text-sm hover:text-blue-400 transition-all bg-white/5 border border-white/10 px-6 py-2.5 rounded-full lowercase"
              onClick={() => setIsOpen(false)}
            >
              hello@shopssetu.shop
            </a>

            <a
              href="#book-call"
              className="mobile-link btn-gradient px-12 py-5 rounded-full text-lg shadow-xl shadow-blue-500/20 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </a>
          </nav>

          <div className="mt-12 pt-8 border-t border-white/5 flex gap-8 justify-center">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-zinc-600 hover:text-white transition text-xl"
                onClick={() => setIsOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex-1 w-full"
          id="menu-overlay-bottom"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </header>
  )
}

