// Skills section: two cards — AI/ML and other technical skills (content to be added later)
import Card from '../components/Card'

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <h2 className="mb-8 text-3xl font-bold">Skills</h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-xl font-semibold">AI &amp; ML</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Card content placeholder.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold">Other Technical Skills</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Card content placeholder.</p>
        </Card>
      </div>
    </section>
  )
}
