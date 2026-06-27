// Root layout: persistent navigation and vertically stacked page sections (single long scroll)
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import MobileSidebar from './components/MobileSidebar'
import Home from './sections/Home'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Writing from './sections/Writing'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const { theme, toggleTheme } = useTheme()

  // Scroll to hash on first load (e.g. urvigupta.github.io/#projects)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100">
      <Navbar sections={SECTIONS} onToggleTheme={toggleTheme} theme={theme} />
      <MobileSidebar sections={SECTIONS} onToggleTheme={toggleTheme} theme={theme} />

      <main className="pt-16">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
