import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './contexts/ThemeContext'

export default function App() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#060d1f]' : 'bg-[#f0f4ff]'}`}>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <OurWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
