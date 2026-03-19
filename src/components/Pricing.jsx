import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

function PricingCard({ plan, i, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl p-8 flex flex-col ${
        plan.popular
          ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/15 border-2 border-blue-500/50 shadow-[0_0_60px_rgba(59,130,246,0.2)]'
          : isDark ? 'card-dark' : 'card-light'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold shadow-lg">
          <Star size={10} fill="white" /> Most Popular
        </div>
      )}

      <div className="mb-6">
        <div className={`flex items-center gap-2 mb-4`}>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            plan.popular ? 'bg-blue-500' : isDark ? 'bg-white/8' : 'bg-slate-100'
          }`}>
            <Zap size={16} className={plan.popular ? 'text-white' : isDark ? 'text-blue-400' : 'text-blue-600'} />
          </div>
          <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
        </div>

        <div className="flex items-end gap-1 mb-2">
          <span className={`text-4xl font-black ${plan.popular ? 'gradient-text' : isDark ? 'text-white' : 'text-slate-900'}`}>
            {plan.price}
          </span>
          {plan.period && (
            <span className={`text-sm mb-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{plan.period}</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f, fi) => (
          <li key={fi} className="flex items-center gap-2.5">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
              plan.popular ? 'bg-blue-500/20' : isDark ? 'bg-white/8' : 'bg-blue-50'
            }`}>
              <Check size={11} className={plan.popular ? 'text-blue-400' : isDark ? 'text-slate-400' : 'text-blue-500'} />
            </div>
            <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
          </li>
        ))}
      </ul>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white glow-blue hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]'
            : isDark
              ? 'bg-white/8 text-white border border-white/12 hover:bg-white/14 hover:border-white/25'
              : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
        }`}
      >
        {plan.price === 'Custom' || plan.price === 'مخصص' ? 'Contact Us' : 'Get Started'}
      </motion.a>
    </motion.div>
  )
}

export default function Pricing() {
  const { isDark } = useTheme()
  const { t } = useLang()

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3"
          >
            {t.pricing.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className={`text-base max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            {t.pricing.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {t.pricing.plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} i={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}
