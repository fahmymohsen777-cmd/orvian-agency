import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

/* ──────────────── Magnetic Button ──────────────── */
function MagneticButton({ children, className, href, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 18 })
  const sy = useSpring(y, { stiffness: 180, damping: 18 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref} href={href} {...props}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove} onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

/* ──────────────── Stars ──────────────── */
const STARS = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  cx: Math.random() * 100,
  cy: Math.random() * 100,
  r: Math.random() * 1.4 + 0.4,
  delay: Math.random() * 5,
  dur: 2.5 + Math.random() * 3,
}))

/* ──────────────── Hero ──────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
  const { isDark } = useTheme()
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* ═══ LAYERED BACKGROUND ═══ */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>

        {/* 1. Dot grid */}
        <div className={`absolute inset-0 ${isDark ? 'dot-grid-dark' : 'dot-grid-light'} opacity-60`} />

        {/* 2. Radial vignette to contain grid edges */}
        <div className={`absolute inset-0 ${
          isDark
            ? '[background:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#060d1f_100%)]'
            : '[background:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#eef2ff_100%)]'
        }`} />

        {/* 3. Large glow blobs */}
        <div
          className="pulse-blob absolute w-[680px] h-[680px] rounded-full blur-[130px]"
          style={{ top: '5%', left: '50%', transform: 'translateX(-50%)',
            background: isDark ? 'rgba(59,130,246,0.16)' : 'rgba(99,102,241,0.12)' }}
        />
        <div
          className="pulse-blob absolute w-[420px] h-[420px] rounded-full blur-[100px]"
          style={{ bottom: '10%', right: '8%', animationDelay: '3s',
            background: isDark ? 'rgba(139,92,246,0.14)' : 'rgba(139,92,246,0.10)' }}
        />
        <div
          className="pulse-blob absolute w-[300px] h-[300px] rounded-full blur-[90px]"
          style={{ top: '30%', left: '3%', animationDelay: '1.5s',
            background: isDark ? 'rgba(6,182,212,0.10)' : 'rgba(6,182,212,0.07)' }}
        />

        {/* 4. Light beams */}
        {isDark && (
          <>
            <div className="beam absolute top-0 left-1/4 w-px h-[65vh] origin-top"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.35), transparent)', animationDuration: '8s' }} />
            <div className="beam absolute top-0 right-1/3 w-px h-[50vh] origin-top"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.3), transparent)', animationDuration: '11s', animationDelay: '3s' }} />
            <div className="beam absolute top-0 left-2/3 w-px h-[45vh] origin-top"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.25), transparent)', animationDuration: '9s', animationDelay: '1.5s' }} />
          </>
        )}

        {/* 5. SVG Stars (dark only) */}
        {isDark && (
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {STARS.map(s => (
              <circle key={s.id} cx={`${s.cx}%`} cy={`${s.cy}%`} r={s.r} fill="rgba(255,255,255,0.7)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur={`${s.dur}s`} repeatCount="indefinite" begin={`${s.delay}s`} />
              </circle>
            ))}
          </svg>
        )}

        {/* 6. Orbit rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] orbit-1">
          <div className={`absolute inset-0 rounded-full border ${isDark ? 'border-blue-500/10' : 'border-indigo-400/15'}`} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-blue-400/70 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] orbit-2">
          <div className={`absolute inset-0 rounded-full border border-dashed ${isDark ? 'border-white/[0.045]' : 'border-indigo-300/20'}`} />
          <div className="absolute top-0 right-1/4 w-1.5 h-1.5 rounded-full bg-purple-400/70 shadow-[0_0_6px_rgba(139,92,246,0.7)]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1020px] h-[1020px] orbit-3">
          <div className={`absolute inset-0 rounded-full border ${isDark ? 'border-white/[0.025]' : 'border-indigo-200/15'}`} />
          <div className="absolute bottom-10 left-1/3 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
        </div>

        {/* 7. Top glow bar */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px ${
          isDark ? 'bg-gradient-to-r from-transparent via-blue-500/40 to-transparent' : 'bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent'
        }`} />
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={0}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold mb-8 ${
            isDark
              ? 'bg-blue-500/10 border-blue-500/25 text-blue-300'
              : 'bg-indigo-50 border-indigo-200/70 text-indigo-700'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
          {t.hero.badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          {t.hero.headline1}{' '}
          <span className="gradient-text">{t.hero.headline2}</span>
          <br />
          {t.hero.headline3}
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
        >
          {t.hero.sub}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="https://wa.me/201027899375"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-bold text-base glow-blue hover:shadow-[0_0_40px_rgba(99,102,241,0.65)] transition-shadow duration-300 w-full sm:w-auto justify-center"
          >
            {t.hero.cta1}
            <ArrowRight size={18} />
          </MagneticButton>

          <MagneticButton
            href="#work"
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border transition-all duration-300 w-full sm:w-auto justify-center ${
              isDark
                ? 'border-white/14 text-white hover:bg-white/7 hover:border-white/28'
                : 'border-indigo-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-400'
            }`}
          >
            <Play size={16} className="text-blue-500" fill="rgba(59,130,246,0.5)" />
            {t.hero.cta2}
          </MagneticButton>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={4}
          className="flex flex-wrap items-center justify-center gap-6 mt-14"
        >
          {['⚡ Fast Delivery', '🔒 Secure & Legal', '🌍 Global Reach', '🤖 AI-Powered'].map((b, i) => (
            <span key={i} className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
