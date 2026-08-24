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
      badges: ['Fast Delivery', 'Secure & Legal', 'Global Reach', 'AI-Powered'],
    },
    trusted: 'Trusted by Industry Leaders',
    services: {
      title: 'Our Services',
      heading1: 'What We',
      heading2: 'Build',
      sub: 'Premium digital solutions engineered for performance and scale.',
      learnMore: 'Learn more',
      items: [
        { title: 'Web & SaaS Development', desc: 'Blazing-fast, scalable web apps and SaaS platforms built with modern stacks.' },
        { title: 'Social Media Management', desc: 'Data-driven strategies that grow your audience and maximise engagement.' },
        { title: 'Branding & Design', desc: 'Iconic identities and premium UI/UX that make your brand unforgettable.' },
        { title: 'AI Tools & Automation', desc: 'Custom AI solutions that automate workflows and unlock new efficiencies.' },
        { title: 'Google Maps Optimization', desc: 'Boost local ranking, enhance business visibility, and attract nearby customers on Google Maps.' },
      ]
    },
    work: {
      badge: 'Our Portfolio',
      title1: "Work We're",
      title2: 'Proud Of',
      sub: 'Real projects. Real results. Built from the ground up with precision and creativity.',
      visit: 'Visit Site',
      tags: {
        marketing: 'Digital Marketing',
        hr: 'HR Services Platform',
        services: 'Services Website',
        tourism: 'Travel & Tourism',
      }
    },
    contact: {
      badge: 'Contact Us',
      title1: "Let's Build Something",
      title2: 'Legendary',
      sub: 'Have a project in mind? Reach out and let\'s explore the possibilities together.',
      name: 'Name',
      namePlaceholder: 'John Doe',
      email: 'Email',
      emailPlaceholder: 'hello@co.com',
      service: 'Service',
      servicePlaceholder: 'Select a service...',
      servicesList: [
        'Web & SaaS Development',
        'Social Media Management',
        'Branding & Design',
        'AI Tools & Automation',
        'Google Maps Optimization',
      ],
      message: 'Message',
      messagePlaceholder: 'Tell us about your project...',
      submit: 'Send Message',
    },
    footer: {
      tagline: 'Building tomorrow\'s digital world, today.',
      links: 'Quick Links',
      social: 'Follow Us',
      contact: 'Contact',
      cta: 'Get in touch',
      privacy: 'Privacy',
      terms: 'Terms',
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
      badges: ['سرعة في التنفيذ', 'موثوق وقانوني', 'انتشار واسع', 'مدعوم بالذكاء الاصطناعي'],
    },
    trusted: 'يثق بنا قادة الصناعة',
    services: {
      title: 'خدماتنا',
      heading1: 'ماذا',
      heading2: 'نقدم',
      sub: 'حلول رقمية متكاملة مصمّمة للأداء العالي والتوسع.',
      learnMore: 'اعرف المزيد',
      items: [
        { title: 'تطوير الويب والـ SaaS', desc: 'تطبيقات ويب فائقة السرعة ومنصات SaaS قابلة للتوسع بأحدث التقنيات.' },
        { title: 'إدارة التواصل الاجتماعي', desc: 'استراتيجيات مدفوعة بالبيانات تنمّي جمهورك وتعظّم التفاعل.' },
        { title: 'الهوية البصرية والتصميم', desc: 'هويات بصرية أيقونية وتجارب مستخدم فاخرة تجعل علامتك لا تُنسى.' },
        { title: 'أدوات الذكاء الاصطناعي', desc: 'حلول ذكاء اصطناعي مخصصة تؤتمت سير العمل وتفتح آفاقاً جديدة.' },
        { title: 'تحسين نشاطك على خرائط جوجل', desc: 'تحسين وتوثيق ظهور نشاطك التجاري على Google Maps، تصدر نتائج البحث المحلية، وجذب المزيد من العملاء.' },
      ]
    },
    work: {
      badge: 'معرض الأعمال',
      title1: 'أعمال نفتخر',
      title2: 'بإنجازها',
      sub: 'مشاريع حقيقية ونتائج ملموسة تم بناؤها من البداية بأعلى دقة واحترافية.',
      visit: 'زيارة الموقع',
      tags: {
        marketing: 'تسويق رقمي',
        hr: 'منصة موارد بشرية',
        services: 'موقع خدمات',
        tourism: 'سياحة وسفر',
      }
    },
    contact: {
      badge: 'تواصل معنا',
      title1: 'دعنا نبني شيئاً',
      title2: 'استثنائياً',
      sub: 'هل لديك مشروع في ذهنك؟ تواصل معنا لنحوّل فكرتك إلى واقع مميز.',
      name: 'الاسم',
      namePlaceholder: 'الاسم الكريم',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'name@example.com',
      service: 'الخدمة المطلوبة',
      servicePlaceholder: 'اختر الخدمة...',
      servicesList: [
        'تطوير الويب والـ SaaS',
        'إدارة التواصل الاجتماعي',
        'الهوية البصرية والتصميم',
        'أدوات الذكاء الاصطناعي',
        'تحسين نشاطك على خرائط جوجل',
      ],
      message: 'الرسالة',
      messagePlaceholder: 'أخبرنا عن تفاصيل مشروعك...',
      submit: 'إرسال الرسالة',
    },
    footer: {
      tagline: 'نبني عالم الغد الرقمي، اليوم.',
      links: 'روابط سريعة',
      social: 'تابعنا',
      contact: 'تواصل معنا',
      cta: 'تواصل معنا الآن',
      privacy: 'الخصوصية',
      terms: 'الشروط',
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
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, t, isRTL, toggle: () => setLang(p => p === 'en' ? 'ar' : 'en') }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
