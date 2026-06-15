// Projects section: one interactive card per project (content and styling to be added later)
import Card from '../components/Card'

const PLACEHOLDER_PROJECTS = ['Project 1', 'Project 2', 'Project 3']

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDER_PROJECTS.map((title) => (
          <Card key={title}>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Card content placeholder.</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
