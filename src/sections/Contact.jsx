// Contact section: three interactive cards for LinkedIn, email, and GitHub (links to be added later)
import Card from '../components/Card'

const CONTACT_ITEMS = [
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'email', label: 'Email' },
  { id: 'github', label: 'GitHub' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {CONTACT_ITEMS.map(({ id, label }) => (
          <Card key={id}>
            <h3 className="text-xl font-semibold">{label}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Link placeholder.</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
