import { useId, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  AtSign,
  Building2,
  Check,
  CirclePlay,
  CreditCard,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
  X,
} from 'lucide-react'

const ColumnHeading = ({ children }) => (
  <div className="flex items-center gap-3">
    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]" />
    <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-slate-300">{children}</h3>
  </div>
)

function FooterLink({ href, children }) {
  return (
    <motion.a
      href={href}
      className="block text-sm font-normal leading-7 text-slate-400 transition-all duration-300 hover:text-white"
      whileHover={{ x: 3 }}
      transition={{ type: 'tween' }}
    >
      {children}
    </motion.a>
  )
}

function StatBadge({ title, subtitle, Icon }) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-800 bg-transparent p-4 h-20 text-left backdrop-blur-sm"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-transparent text-indigo-400">
          <Icon className="h-5 w-5 text-indigo-400" />
        </div>
        <div>
          <div className="text-base font-semibold text-white">{title}</div>
          <div className="text-xs font-medium text-slate-400">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  )
}

function SocialIconButton({ label, Icon }) {
  return (
    <motion.a
      aria-label={label}
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-white/5 text-slate-300 transition-all duration-300 hover:border-indigo-400/50 hover:bg-white/5"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 380, damping: 20 }}
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  )
}

function NewsletterCard({ newsletterId }) {
  return (
    <div className="rounded-[24px] border border-slate-800 bg-slate-950/90 p-8 shadow-sm backdrop-blur-sm">
      <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr] lg:items-center">
        <div>
          <div className="text-3xl font-bold tracking-tight text-white">
            Stay Updated with the latest commerce insights
          </div>
          <p className="mt-3 max-w-[520px] text-base leading-7 text-slate-400">
            Receive weekly product launches, marketing tips, and platform updates designed to help your brand grow.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="grid gap-3 sm:grid-cols-[1.8fr_auto]">
          <input
            id={newsletterId}
            type="email"
            required
            className="h-14 w-full rounded-[12px] border border-slate-700 bg-slate-900/70 px-5 text-white outline-none transition duration-200 placeholder:text-slate-500 focus:bg-slate-800/90"
            placeholder="Enter your best email address"
            autoComplete="email"
          />
          <motion.button
            type="submit"
            className="h-14 rounded-[12px] bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] px-6 text-sm font-[700] uppercase tracking-[0.18em] text-white shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </div>
  )
}

function RocketIconCard() {
  return (
    <div className="w-[72px] h-[72px] rounded-[20px] border border-slate-800 bg-white/3 p-2 shadow-sm">
      <div className="relative flex h-full w-full items-center justify-center rounded-[16px] bg-[#06111d]/85">
        <div className="absolute inset-0 rounded-[16px] bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_55%)] opacity-70" />
        <svg className="relative h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C13 2 9 4 7 6C5 8 3 12 3 15C3 16.1 3.9 17 5 17C8 17 12 15 14 13C16 11 18 7 18 4C18 2.9 17.1 2 16 2Z" stroke="rgba(255,255,255,0.92)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 14L16 8" stroke="rgba(255,255,255,0.92)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 21C8.7 19.4 8.4 18 7 16" stroke="rgba(255,255,255,0.92)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 2C18 3.5 20 6 21 8C20 8.5 18.5 9 17 9" stroke="rgba(255,255,255,0.92)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

export default function Footer() {
  const newsletterId = useId()

  const columns = useMemo(
    () => ({
      company: ['About Us', 'Success Stories', 'Careers', 'Contact Us', 'Partners', 'Affiliate Program'],
      platform: ['Features', 'Pricing', 'Store Builder', 'Inventory Management', 'Marketing Tools', 'Analytics', 'Integrations'],
      resources: ['Blog', 'Help Center', 'Documentation', 'FAQs', 'Community', 'Tutorials', 'Case Studies'],
      legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Cookie Policy', 'GDPR', 'Security'],
    }),
    [],
  )

  const social = useMemo(
    () => [
      { label: 'Email', Icon: Mail },
      { label: 'Chat', Icon: MessageCircle },
      { label: 'Globe', Icon: Globe },
      { label: 'Community', Icon: AtSign },
      { label: 'Twitter', Icon: X },
      { label: 'Video', Icon: CirclePlay },
    ],
    [],
  )

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[220px] bg-none" />
      <div
        className="pointer-events-none absolute inset-0 opacity-08"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        }}
      />

      <div className="relative w-full px-6 pb-10 pt-8 sm:px-8 lg:px-10">
        <div className="overflow-hidden w-full rounded-[32px] border border-slate-800 bg-[#07101a]/95 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="grid gap-5 rounded-[28px] border border-slate-800 bg-[#07101a]/95 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-[84px] w-[84px] items-center justify-center rounded-[24px] border border-slate-800 bg-[#07101a] shadow-sm">
                <RocketIconCard />
              </div>
              <div className="max-w-xl">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Launch Your <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Online Store</span> Today
                </div>
                <p className="mt-3 max-w-[520px] text-base leading-7 text-slate-400">
                  Build, manage, and scale your business with ShopsSetu's premium commerce platform designed for growth and reliability.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <motion.a
                href="#"
                className="inline-flex h-14 min-w-[220px] items-center justify-center gap-3 rounded-[14px] bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] px-5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-sm"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              >
                GET STARTED FREE
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#book-call"
                className="inline-flex h-14 min-w-[200px] items-center justify-center gap-3 rounded-[14px] border border-slate-800 bg-white/5 px-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-indigo-400/50 hover:bg-white/5"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              >
                BOOK A DEMO
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div className="mt-8 grid gap-6">
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <img src="/src/assets/images/logo-transparent.png" alt="ShopsSetu" className="h-12 w-12 object-contain" />
                    <div>
                      <div className="text-2xl font-semibold text-white">ShopsSetu</div>
                      <p className="mt-1 max-w-[280px] text-sm text-slate-400">
                        Empowering modern Indian entrepreneurs with world-class e-commerce technology.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-slate-400">
                    <div className="flex gap-3 text-sm leading-6">
                      <MapPin className="mt-1 h-5 w-5 text-indigo-400" />
                      <div>
                        27th Main Road, Sector 2<br />HSR Layout, Bengaluru<br />Karnataka 560102, India
                      </div>
                    </div>
                    <div className="flex gap-3 text-sm leading-6">
                      <Mail className="mt-1 h-5 w-5 text-indigo-400" />
                      <a href="mailto:hello@shopssetu.shop" className="transition-colors duration-200 hover:text-white">
                        hello@shopssetu.shop
                      </a>
                    </div>
                    <div className="flex gap-3 text-sm leading-6">
                      <Phone className="mt-1 h-5 w-5 text-indigo-400" />
                      <a href="tel:+919876543210" className="transition-colors duration-200 hover:text-white">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

              <div className="space-y-5 lg:col-span-2">
                <ColumnHeading>COMPANY</ColumnHeading>
                <div className="space-y-3">
                  {columns.company.map((item) => (
                    <FooterLink key={item} href="#">
                      {item}
                    </FooterLink>
                  ))}
                </div>
              </div>

              <div className="space-y-5 lg:col-span-2">
                <ColumnHeading> PLATFORM</ColumnHeading>
                <div className="space-y-3">
                  {columns.platform.map((item) => (
                    <FooterLink key={item} href="#">
                      {item}
                    </FooterLink>
                  ))}
                </div>
              </div>

              <div className="space-y-5 lg:col-span-2">
                <ColumnHeading>RESOURCES</ColumnHeading>
                <div className="space-y-3">
                  {columns.resources.map((item) => (
                    <FooterLink key={item} href="#">
                      {item}
                    </FooterLink>
                  ))}
                </div>
              </div>

              <div className="space-y-5 lg:col-span-2">
                <ColumnHeading>LEGAL</ColumnHeading>
                <div className="space-y-3">
                  {columns.legal.map((item) => (
                    <FooterLink key={item} href="#">
                      {item}
                    </FooterLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
              <StatBadge Icon={Zap} title="1000+" subtitle="Active Stores" />
              <StatBadge Icon={ShieldCheck} title="99.9%" subtitle="Uptime" />
              <StatBadge Icon={CreditCard} title="Secure" subtitle="Payments" />
              <StatBadge Icon={Building2} title="Made in" subtitle="India" />
            </div>

            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-2">
                {social.map(({ label, Icon }) => (
                  <SocialIconButton key={label} label={label} Icon={Icon} />
                ))}
              </div>
            </div>

            <NewsletterCard newsletterId={newsletterId} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-5 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm">© 2026 ShopsSetu Technologies. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {['Privacy', 'Terms', 'Security', 'Sitemap', 'Support'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="transition-colors duration-200 hover:text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'tween' }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
