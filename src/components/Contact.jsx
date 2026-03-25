import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

export default function Contact() {
  const { isDark } = useTheme()
  const { t } = useLang()

  const inputClass = `w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 ${
    isDark
      ? 'bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]'
      : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]'
  }`

  return (
    <section id="contact" className="py-16 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-b from-transparent via-blue-950/10 to-transparent' : 'bg-gradient-to-b from-transparent via-blue-50/50 to-transparent'}`} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4"
            >
              {t.footer.contact}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className={`text-4xl sm:text-5xl font-black mb-5 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Let's Build Something
              <span className="gradient-text"> Legendary</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className={`text-base leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
            >
              Have a project in mind? Reach out and let's explore the possibilities together.
            </motion.p>

            <div className="space-y-5">
              {[
                { Icon: Mail, label: 'hello@orvian.agency' },
                { Icon: Phone, label: '+1 (555) 000-0000' },
                { Icon: MapPin, label: 'Dubai, UAE & Cairo, Egypt' },
              ].map(({ Icon, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'}`}>
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl ${isDark ? 'card-dark' : 'card-light'}`}
          >
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Name</label>
                  <input type="text" placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</label>
                  <input type="email" placeholder="hello@co.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Service</label>
                <select className={`${inputClass} cursor-pointer`} style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#f8fafc' }}>
                  <option value="">Select a service...</option>
                  <option>Web & SaaS Development</option>
                  <option>Social Media Management</option>
                  <option>Branding & Design</option>
                  <option>AI Tools & Automation</option>
                </select>
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-sm glow-blue transition-shadow duration-300"
              >
                <Send size={15} />
                Send Message
                <ArrowRight size={15} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
