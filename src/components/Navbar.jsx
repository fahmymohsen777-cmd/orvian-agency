import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Globe, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

export default function Navbar() {
  const { isDark, toggle: toggleTheme } = useTheme()
  const { t, lang, toggle: toggleLang, isRTL } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { key: 'services', href: '#services' },
    { key: 'work', href: '#work' },
    { key: 'contact', href: '#contact' },
  ]

  const linkClass = `text-sm font-medium transition-colors duration-200 ${
    isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
  }`

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark ? 'glass border-b border-white/[0.06] shadow-xl shadow-black/20' : 'glass-light border-b border-black/[0.06] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img 
              src="/orvian-logo.png" 
              alt="ORVIAN Logo" 
              className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className={`font-black text-xl tracking-tight ${isDark ? 'text-white drop-shadow-md' : 'text-slate-900 drop-shadow-sm'}`}>
              ORVIAN
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.key} href={l.href} className={linkClass}>{t.nav[l.key]}</a>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lang Toggle */}
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                isDark
                  ? 'bg-white/8 text-slate-300 hover:bg-white/15 border border-white/10'
                  : 'bg-black/5 text-slate-600 hover:bg-black/10 border border-black/10'
              }`}
            >
              <Globe size={13} />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                isDark
                  ? 'bg-white/8 text-yellow-400 hover:bg-white/15 border border-white/10'
                  : 'bg-black/5 text-slate-700 hover:bg-black/10 border border-black/10'
              }`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA */}
            <a
              href="https://wa.me/201027899375"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold glow-blue hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              {t.nav.cta}
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(p => !p)}
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center ${
              isDark ? 'bg-white/8 text-white border border-white/10' : 'bg-black/5 text-slate-800 border border-black/10'
            }`}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-[72px] left-0 right-0 z-40 p-6 ${
              isDark ? 'glass border-b border-white/[0.06]' : 'glass-light border-b border-black/[0.06]'
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(l => (
                <a key={l.key} href={l.href} onClick={() => setMobileOpen(false)} className={`${linkClass} text-base`}>
                  {t.nav[l.key]}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button onClick={toggleLang} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${isDark ? 'bg-white/8 text-slate-300 border border-white/10' : 'bg-black/5 text-slate-600 border border-black/10'}`}>
                  <Globe size={13} /> {lang === 'en' ? 'AR' : 'EN'}
                </button>
                <button onClick={toggleTheme} className={`w-9 h-9 rounded-full flex items-center justify-center ${isDark ? 'bg-white/8 text-yellow-400 border border-white/10' : 'bg-black/5 text-slate-700 border border-black/10'}`}>
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
              <a href="https://wa.me/201027899375" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold glow-blue">
                {t.nav.cta} <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
