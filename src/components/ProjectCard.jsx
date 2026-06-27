// Project card: title, full description, language dots, and optional View on GitHub button
import Card from './Card'
import { getLanguageColor } from '../data/projects'

function CodeIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  )
}

export default function ProjectCard({ project }) {
  const { name, githubUrl, description, subtitle, bullets, languages } = project

  return (
    <Card interactive className="flex h-full flex-col">
      <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400">{name}</h3>

      {subtitle && (
        <p className="card-meta mt-3 text-sm leading-relaxed">{subtitle}</p>
      )}

      {description && (
        <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}

      {bullets && bullets.length > 0 && (
        <ul className="card-bullets mt-4 space-y-2 text-sm leading-relaxed">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span aria-hidden="true" className="shrink-0">
                •
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {languages && languages.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          {languages.map((language) => (
            <span key={language} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: getLanguageColor(language) }}
                aria-hidden="true"
              />
              {language}
            </span>
          ))}
        </div>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-btn mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium
            transition-colors duration-200
            hover:border-pink-400 hover:bg-pink-50 hover:text-pink-700
            dark:border-gray-600 dark:hover:border-pink-500 dark:hover:bg-gray-800 dark:hover:text-pink-300"
          onClick={(e) => e.stopPropagation()}
        >
          <CodeIcon className="h-4 w-4" />
          View on GitHub
        </a>
      )}
    </Card>
  )
}
