import { Facebook, Linkedin, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'

// Custom TikTok Icon SVG because it's not in older lucide-react versions
const TiktokIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const socials = [
  { Icon: Facebook, href: 'https://www.facebook.com/share/1Ao93c4yyk/', label: 'Facebook' },
  { Icon: TiktokIcon, href: 'https://www.tiktok.com/@orvian.agency?_r=1&_t=ZS-958OEYj6x0x', label: 'TikTok' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
]

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Our Work', href: '#work' },
  { name: 'Contact Us', href: '#contact' },
]

export default function Footer() {
  const { isDark } = useTheme()
  const { t } = useLang()
  const border = isDark ? 'border-white/[0.06]' : 'border-slate-200'

  return (
    <footer className={`border-t ${border} pt-16 pb-8 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12 text-center sm:text-left">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2.5 mb-5">
              <img 
                src="/orvian-logo.png" 
                alt="ORVIAN Logo" 
                className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.2)]"
              />
              <span className={`font-black text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>ORVIAN</span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs mb-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
          <div className="flex flex-col items-center sm:items-start">
            <h4 className={`font-bold text-sm mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.footer.links}</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className={`text-sm transition-colors duration-200 hover:text-blue-400 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className={`font-bold text-sm mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.footer.contact}</h4>
            <ul className="space-y-3 text-center sm:text-left">
              <li className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>fahmy@orvian.agency</li>
              <li className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} font-sans`}>+201027899375</li>
            </ul>
            <a
              href="https://wa.me/201027899375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
            >
              Get in touch <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className={`border-t ${border} pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left`}>
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.footer.copy}</p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className={`text-xs transition-colors ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}>Privacy</a>
            <a href="#" className={`text-xs transition-colors ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
