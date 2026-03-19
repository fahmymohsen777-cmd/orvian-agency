import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Code2, Megaphone, Palette, Bot, ExternalLink } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

const icons = [Code2, Megaphone, Palette, Bot]
const gradients = [
  'from-blue-500 to-cyan-400',
  'from-pink-500 to-rose-400',
  'from-violet-500 to-purple-400',
  'from-amber-500 to-orange-400',
]
const glows = [
  'rgba(59,130,246,0.35)',
  'rgba(236,72,153,0.35)',
  'rgba(139,92,246,0.35)',
  'rgba(245,158,11,0.35)',
]

function TiltCard({ service, index, isDark }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  const Icon = icons[index]

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative p-7 rounded-2xl cursor-pointer transition-all duration-300 ${
        isDark ? 'card-dark hover:border-white/20' : 'card-light hover:border-blue-300'
      }`}
      whileHover={{ boxShadow: `0 20px 60px ${glows[index]}` }}
    >
      {/* Glow border on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-br ${gradients[index]} blur-sm -z-10 scale-105`} />

      <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${gradients[index]} shadow-lg`}>
        <Icon size={22} className="text-white" />
      </div>

      <h3 className={`font-bold text-lg mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {service.title}
      </h3>
      <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        {service.desc}
      </p>

      <div className={`flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200 bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent`}>
        Learn more <ExternalLink size={12} />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { isDark } = useTheme()
  const { t } = useLang()

  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3"
          >
            {t.services.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            What We <span className="gradient-text">Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className={`text-base max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            {t.services.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((service, i) => (
            <TiltCard key={i} service={service} index={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}
