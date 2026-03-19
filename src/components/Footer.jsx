import { Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

const socials = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
]

const quickLinks = ['Services', 'Our Work', 'Pricing', 'About', 'Blog', 'Careers']

export default function Footer() {
  const { isDark } = useTheme()
  const { t } = useLang()
  const border = isDark ? 'border-white/[0.06]' : 'border-slate-200'

  return (
    <footer className={`border-t ${border} pt-16 pb-8 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">O</span>
              </div>
              <span className={`font-black text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>ORVIAN</span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs mb-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-white/6 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30'
                      : 'bg-slate-100 border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200'
                  }`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-bold text-sm mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.footer.links}</h4>
            <ul className="space-y-3">
              {quickLinks.slice(0, 4).map(link => (
                <li key={link}>
                  <a href="#" className={`text-sm transition-colors duration-200 hover:text-blue-400 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-bold text-sm mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>hello@orvian.agency</li>
              <li className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>+1 (555) 000-0000</li>
              <li className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Dubai, UAE</li>
              <li className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Cairo, Egypt</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Get in touch <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className={`border-t ${border} pt-8 flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{t.footer.copy}</p>
          <div className="flex items-center gap-6">
            <a href="#" className={`text-xs transition-colors ${isDark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'}`}>Privacy</a>
            <a href="#" className={`text-xs transition-colors ${isDark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'}`}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
