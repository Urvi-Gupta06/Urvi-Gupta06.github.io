// Experience section: one interactive card per role (content and styling to be added later)
import Card from '../components/Card'

const PLACEHOLDER_ROLES = ['Experience 1', 'Experience 2', 'Experience 3']

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <h2 className="mb-8 text-3xl font-bold">Experience</h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {PLACEHOLDER_ROLES.map((title) => (
          <Card key={title}>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Card content placeholder.</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
