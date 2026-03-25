import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Megaphone, Palette, Bot, ExternalLink } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

const icons = [Code2, Megaphone, Palette, Bot]

const config = [
  { gradient: 'from-blue-500 to-cyan-400',    border: 'rgba(59,130,246,0.8)',  shadow: 'rgba(59,130,246,0.2)'  },
  { gradient: 'from-pink-500 to-rose-400',    border: 'rgba(236,72,153,0.8)',  shadow: 'rgba(236,72,153,0.2)'  },
  { gradient: 'from-violet-500 to-purple-400',border: 'rgba(139,92,246,0.8)', shadow: 'rgba(139,92,246,0.2)'  },
  { gradient: 'from-amber-500 to-orange-400', border: 'rgba(245,158,11,0.8)', shadow: 'rgba(245,158,11,0.2)'  },
]

function ServiceCard({ service, index, isDark }) {
  const [hovered, setHovered] = useState(false)
  const Icon = icons[index]
  const { gradient, border, shadow } = config[index]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 600)}
      className="group relative"
    >
      {/* Glowing border frame only — not the card fill */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${border} 0%, transparent 50%, ${border} 100%)`
            : 'transparent',
          padding: '1.5px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          boxShadow: hovered ? `0 0 20px ${shadow}` : 'none',
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Card body stays flat — no bg color change on hover */}
      <div
        className={`relative p-5 sm:p-7 rounded-2xl h-full border transition-transform duration-300 ${
          isDark
            ? 'bg-[#0a1628] border-white/[0.07]'
            : 'bg-white border-slate-200 shadow-sm'
        } ${hovered ? '-translate-y-1' : 'translate-y-0'}`}
      >
        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl mb-4 sm:mb-5 flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon size={20} className="text-white" />
        </div>

        <h3 className={`font-bold text-base sm:text-lg mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {service.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 sm:mb-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {service.desc}
        </p>

        <div className={`flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent transition-all duration-200 ${hovered ? 'gap-2.5' : ''}`}>
          Learn more <ExternalLink size={12} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { isDark } = useTheme()
  const { t } = useLang()

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3"
          >
            {t.services.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            What We <span className="gradient-text">Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            {t.services.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.services.items.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}
