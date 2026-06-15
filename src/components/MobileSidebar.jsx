// Mobile navigation: hamburger button opens a slide-in sidebar with section links
import { useState } from 'react'
import { scrollToSection } from '../utils/scrollToSection'
import ThemeToggle from './ThemeToggle'

export default function MobileSidebar({ sections, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      {/* Fixed mobile header with menu button */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-gray-800 dark:bg-black/90">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="cursor-pointer font-semibold transition-colors duration-200 hover:text-pink-600 dark:hover:text-pink-400"
        >
          Urvi Gupta
        </button>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-md p-2 transition-colors duration-200 hover:bg-pink-100 dark:hover:bg-gray-800"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </header>

      {/* Overlay backdrop */}
      {open && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 transform border-l border-gray-200 bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-950 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-semibold">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-md px-2 py-1 transition-colors duration-200 hover:bg-pink-100 dark:hover:bg-gray-800"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-2">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(id)}
                className="nav-link block w-full text-left"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </aside>
    </div>
  )
}
