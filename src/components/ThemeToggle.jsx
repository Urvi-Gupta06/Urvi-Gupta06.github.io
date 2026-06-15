// Dark/light mode toggle button with hover color transition
export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm
        transition-colors duration-200
        hover:border-pink-400 hover:bg-pink-50 hover:text-pink-700
        active:scale-95
        dark:border-gray-600 dark:hover:border-pink-500 dark:hover:bg-gray-800 dark:hover:text-pink-300"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
