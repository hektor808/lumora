import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '../lib/cn'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Districts', href: '#districts' },
  { label: 'Transport', href: '#transport' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Life', href: '#life' },
  { label: 'Credits', href: '#credits' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="h-1 origin-left bg-gradient-to-r from-cyanGlow via-emeraldGlow to-auroraGold"
        style={{ scaleX }}
      />
      <nav
        aria-label="Main navigation"
        className={cn(
          'mx-auto mt-3 flex w-[min(1120px,calc(100%-24px))] items-center justify-between rounded-full border px-4 py-3 transition duration-300 md:px-5',
          scrolled
            ? 'border-white/15 bg-midnight/78 shadow-glow backdrop-blur-2xl'
            : 'border-white/10 bg-white/[0.045] backdrop-blur-xl',
        )}
      >
        <a
          href="#hero"
          className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
          aria-label="Lumora home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyanGlow/40 bg-cyanGlow/10 shadow-glow">
            <span className="h-3 w-3 rounded-full bg-cyanGlow shadow-[0_0_18px_rgba(73,230,255,0.9)]" />
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-white">Lumora</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#vision"
          className="hidden rounded-full border border-emeraldGlow/35 bg-emeraldGlow/10 px-4 py-2 text-sm font-bold text-emeraldGlow transition hover:bg-emeraldGlow/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldGlow md:inline-flex"
        >
          City Vision
        </a>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 w-[min(1120px,calc(100%-24px))] rounded-3xl border border-white/10 bg-midnight/92 p-3 shadow-2xl backdrop-blur-2xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  )
}
