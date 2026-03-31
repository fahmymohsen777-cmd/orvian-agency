import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Hashtag',
    tag: 'Digital Marketing',
    url: 'https://www.hashtag-eg.net/',
    img: '/portfolio/hashtag.png',
  },
  {
    name: 'iHRS',
    tag: 'HR Services Platform',
    url: 'http://ihrs-eg.com/',
    img: '/portfolio/ihrs.png',
  },
  {
    name: 'Space App',
    tag: 'Web Application',
    url: 'https://space-iota-amber.vercel.app/',
    img: '/portfolio/space.png',
  },
  {
    name: 'CV Builder Pro',
    tag: 'Career Tools',
    url: 'https://cv2-github-io-7v57.vercel.app/',
    img: '/portfolio/cv2.png',
  },
  {
    name: 'CV Build',
    tag: 'Resume Platform',
    url: 'https://cv-bulid.vercel.app/',
    img: '/portfolio/cvbuild.png',
  },
  {
    name: 'Abo Naem',
    tag: 'Services Website',
    url: 'http://abo-naem.vercel.app/',
    img: '/portfolio/abonautm.png',
  },
  {
    name: 'CV Bank',
    tag: 'AI-Powered Recruitment',
    url: 'https://cvbankf.vercel.app/',
    img: '/portfolio/cvbank.png',
  },
  {
    name: 'Armenia Tours',
    tag: 'Travel & Tourism',
    url: 'https://armenia-three.vercel.app/',
    img: '/portfolio/armenia.png',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function OurWork() {
  const { isDark } = useTheme()
  const { t } = useLang()

  return (
    <section
      id="work"
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-[#040d1a]' : 'bg-slate-50'}`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-blue-600' : 'bg-blue-200'}`} />
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 ${isDark ? 'bg-purple-600' : 'bg-purple-200'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={`inline-block text-xs font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full ${isDark ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20' : 'text-blue-600 bg-blue-50 border border-blue-200'}`}>
            Our Portfolio
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Work We're{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Proud Of
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Real projects. Real results. Built from the ground up with precision and creativity.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Glow ring on hover */}
              <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${isDark ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'}`} />

              <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                isDark
                  ? 'bg-[#0a1628] border-white/[0.07] group-hover:border-blue-500/30'
                  : 'bg-white border-slate-200 group-hover:border-blue-300 shadow-sm group-hover:shadow-xl'
              }`}>
                {/* Screenshot */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={e => { e.target.style.display='none'; }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* External link icon on hover */}
                  <motion.div
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink size={14} className="text-slate-900" />
                  </motion.div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <span className={`text-xs font-semibold tracking-wide uppercase ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>
                    {p.tag}
                  </span>
                  <h3 className={`font-bold text-base mt-1 mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {p.name}
                  </h3>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl w-full justify-center transition-all duration-300 ${
                      isDark
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-sm hover:shadow-md'
                    }`}
                  >
                    Visit Site
                    <ArrowUpRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
