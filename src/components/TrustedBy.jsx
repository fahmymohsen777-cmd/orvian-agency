import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'
import { motion } from 'framer-motion'

/**
 * To add real logos:
 * 1. Put logo files in /public/logos/ (e.g. /public/logos/google.svg)
 * 2. Add an object to the `logos` array below with { name, src }
 * 3. Leave `src: null` to show the text fallback while you're adding images
 */
const logos = [
  { name: 'White Technology',  src: '/logos/white-tech.jpg'  },
  { name: 'Teba Trade',  src: '/logos/teba-trade.jpg'  },
  { name: 'Laktie Milk',  src: '/logos/laktie-milk.jpg'  },
  { name: 'Boyom',  src: '/logos/boyom.jpg'  },
  { name: 'KBM',  src: '/logos/kbm.jpg'  },
  { name: 'Palace Medical',  src: '/logos/palace-medical.jpg'  },
  { name: 'El Amin',  src: '/logos/el-amin.jpg'  },
  { name: 'Golden Home',  src: '/logos/golden-home.jpg'  },
  { name: 'Flo Derma',  src: '/logos/flo-derma.jpg'  },
  { name: 'Bags by Fofa',  src: '/logos/bags-by-fofa.png'  },
  { name: 'Pro Care',  src: '/logos/pro-care.png'  },
  { name: 'Queen Beauty',  src: '/logos/queen-beauty.png'  },
  { name: 'Insta Gold',  src: '/logos/insta-gold.png'  },
  { name: 'Rifai Store',  src: '/logos/rifai-store.png'  },
  { name: 'Romex',  src: '/logos/romex.png'  },
  { name: 'Khattab Motors',  src: '/logos/khattab-motors.png'  },
  { name: 'iHRS',  src: '/logos/ihrs.jpg'  },
]

// Duplicate for seamless looping
const doubled = [...logos, ...logos]

export default function TrustedBy() {
  const { isDark } = useTheme()
  const { t } = useLang()

  return (
    <section id="trusted" className="py-20 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-center text-xs font-semibold tracking-[0.2em] uppercase mb-10 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}
      >
        {t.trusted}
      </motion.p>

      <div className="relative">
        {/* Left fade */}
        <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-r from-[#060d1f] to-transparent'
            : 'bg-gradient-to-r from-[#eef2ff] to-transparent'
        }`} />
        {/* Right fade */}
        <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-l from-[#060d1f] to-transparent'
            : 'bg-gradient-to-l from-[#eef2ff] to-transparent'
        }`} />

        <div className="flex marquee-track gap-8 items-center">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className={`shrink-0 h-16 flex items-center justify-center px-6 rounded-xl transition-all duration-300 ${
                isDark
                  ? 'bg-white border border-white/20 hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.08)]'
                  : 'bg-white/70 border border-indigo-100 hover:border-indigo-300 hover:bg-white shadow-sm'
              }`}
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{ mixBlendMode: 'multiply' }}
                  className={`h-11 max-w-[120px] object-contain transition-all duration-300 hover:scale-105 ${
                    isDark ? 'opacity-90 hover:opacity-100' : 'opacity-80 hover:opacity-100'
                  }`}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
              ) : null}
              <span
                className={`text-sm font-bold tracking-wide ${
                  logo.src ? 'hidden' : 'flex'
                } ${isDark ? 'text-white/25' : 'text-slate-400'}`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
