// Top navigation bar for laptop and tablet: fixed header with section links and theme toggle
import { scrollToSection } from '../utils/scrollToSection'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ sections, theme, onToggleTheme }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 hidden border-b border-gray-200 bg-white/90 backdrop-blur md:block dark:border-gray-800 dark:bg-black/90">
      <nav className="flex w-full items-center justify-between px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="cursor-pointer text-lg font-semibold title-case transition-colors duration-200 hover:text-pink-600 dark:hover:text-pink-400"
        >
          Urvi
        </button>

        <ul className="flex flex-wrap items-center gap-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                className="nav-link"
              >
                {label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
