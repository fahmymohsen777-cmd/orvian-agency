import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  en: {
    nav: { services: 'Services', work: 'Clients', contact: 'Contact', cta: 'Get in Touch' },
    hero: {
      badge: 'Next-Gen Digital Agency',
      headline1: 'We Build',
      headline2: 'Digital Experiences',
      headline3: 'That Convert.',
      sub: 'From cutting-edge web apps to AI-powered tools — ORVIAN crafts digital solutions that elevate brands and drive measurable results.',
      cta1: 'Start Your Project',
      cta2: 'View Our Work',
    },
    trusted: 'Trusted by Industry Leaders',
    services: {
      title: 'Our Services',
      sub: 'Premium digital solutions engineered for performance and scale.',
      items: [
        { title: 'Web & SaaS Development', desc: 'Blazing-fast, scalable web apps and SaaS platforms built with modern stacks.' },
        { title: 'Social Media Management', desc: 'Data-driven strategies that grow your audience and maximise engagement.' },
        { title: 'Branding & Design', desc: 'Iconic identities and premium UI/UX that make your brand unforgettable.' },
        { title: 'AI Tools & Automation', desc: 'Custom AI solutions that automate workflows and unlock new efficiencies.' },
      ]
    },
    pricing: {
      title: 'Digital Subscriptions',
      sub: 'Flexible plans built around your growth stage.',
      plans: [
        { name: 'Starter', price: '$499', period: '/mo', features: ['1 Active Project', 'Social Media (2 platforms)', 'Basic Branding Kit', 'Monthly Report'] },
        { name: 'Growth', price: '$1,299', period: '/mo', features: ['3 Active Projects', 'Social Media (5 platforms)', 'Full Brand Identity', 'AI Content Tools', 'Bi-weekly Calls'], popular: true },
        { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited Projects', 'All Platforms', 'Dedicated Team', 'Custom AI Integration', 'SLA & Priority Support'] },
      ]
    },
    footer: {
      tagline: 'Building tomorrow\'s digital world, today.',
      links: 'Quick Links',
      social: 'Follow Us',
      contact: 'Contact',
      copy: '© 2025 ORVIAN Agency. All rights reserved.',
    }
  },
  ar: {
    nav: { services: 'الخدمات', work: 'عملائنا', contact: 'تواصل', cta: 'ابدأ الآن' },
    hero: {
      badge: 'وكالة رقمية من الجيل القادم',
      headline1: 'نبني',
      headline2: 'تجارب رقمية',
      headline3: 'تحوّل الزوار لعملاء.',
      sub: 'من تطبيقات الويب المتطورة إلى أدوات الذكاء الاصطناعي — ORVIAN تصنع حلولاً رقمية ترفع علامتك التجارية وتحقق نتائج قابلة للقياس.',
      cta1: 'ابدأ مشروعك',
      cta2: 'استعرض أعمالنا',
    },
    trusted: 'يثق بنا قادة الصناعة',
    services: {
      title: 'خدماتنا',
      sub: 'حلول رقمية متكاملة مصمّمة للأداء العالي والتوسع.',
      items: [
        { title: 'تطوير الويب والـ SaaS', desc: 'تطبيقات ويب فائقة السرعة ومنصات SaaS قابلة للتوسع بأحدث التقنيات.' },
        { title: 'إدارة التواصل الاجتماعي', desc: 'استراتيجيات مدفوعة بالبيانات تنمّي جمهورك وتعظّم التفاعل.' },
        { title: 'الهوية البصرية والتصميم', desc: 'هويات بصرية أيقونية وتجارب مستخدم فاخرة تجعل علامتك لا تُنسى.' },
        { title: 'أدوات الذكاء الاصطناعي', desc: 'حلول ذكاء اصطناعي مخصصة تؤتمت سير العمل وتفتح آفاقاً جديدة.' },
      ]
    },
    pricing: {
      title: 'الاشتراكات الرقمية',
      sub: 'خطط مرنة مصمّمة حول مرحلة نموك.',
      plans: [
        { name: 'المبتدئ', price: '499$', period: '/شهر', features: ['مشروع نشط واحد', 'سوشيال ميديا (منصتان)', 'حزمة هوية أساسية', 'تقرير شهري'] },
        { name: 'النمو', price: '1,299$', period: '/شهر', features: ['3 مشاريع نشطة', 'سوشيال ميديا (5 منصات)', 'هوية بصرية كاملة', 'أدوات محتوى AI', 'مكالمات مرحلية'], popular: true },
        { name: 'المؤسسات', price: 'مخصص', period: '', features: ['مشاريع غير محدودة', 'جميع المنصات', 'فريق مخصص', 'تكامل AI مخصص', 'دعم أولوية واتفاقية SLA'] },
      ]
    },
    footer: {
      tagline: 'نبني عالم الغد الرقمي، اليوم.',
      links: 'روابط سريعة',
      social: 'تابعنا',
      contact: 'تواصل معنا',
      copy: '© 2025 ORVIAN Agency. جميع الحقوق محفوظة.',
    }
  }
}

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const isRTL = lang === 'ar'

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang, isRTL])

  return (
    <LangContext.Provider value={{ lang, t, isRTL, toggle: () => setLang(p => p === 'en' ? 'ar' : 'en') }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
