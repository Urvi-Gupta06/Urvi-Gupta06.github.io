// Education section: university, honors, co-curriculars, and featured links in a 2×2 card grid
import Card from '../components/Card'
import FeaturedItem from '../components/FeaturedItem'
import Reveal from '../components/Reveal'
import useEqualHeights from '../hooks/useEqualHeights'
import { EDUCATION_CARDS } from '../data/education'

function BulletList({ items, className = '' }) {
  return (
    <ul className={`card-bullets space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-base leading-relaxed">
          <span aria-hidden="true" className="shrink-0">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function EducationListCard({ title, lines, sectionTitle, bullets }) {
  return (
    <Card interactive className="equal-height-card" data-equal-height>
      <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>

      {lines?.map((line) => (
        <p key={line} className="mt-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
          {line}
        </p>
      ))}

      {sectionTitle && (
        <p className="mt-5 text-base font-medium text-gray-800 dark:text-gray-200">{sectionTitle}</p>
      )}

      <BulletList items={bullets} className="mt-4" />
    </Card>
  )
}

export default function Education() {
  const gridRef = useEqualHeights('[data-equal-height]', { groupBy: 'row' })
  const { university, honors, coCurriculars, featured } = EDUCATION_CARDS

  return (
    <section
      id="education"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <Reveal as="h2" className="mb-8 text-3xl font-bold">
        Education
      </Reveal>

      <div
        ref={gridRef}
        className="education-grid mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2"
      >
        <Reveal delay={0} className="equal-height-grid-item">
          <EducationListCard
            title={university.title}
            lines={university.lines}
            sectionTitle={university.sectionTitle}
            bullets={university.bullets}
          />
        </Reveal>

        <Reveal delay={90} className="equal-height-grid-item">
          <EducationListCard title={honors.title} bullets={honors.bullets} />
        </Reveal>

        <Reveal delay={180} className="equal-height-grid-item">
          <EducationListCard title={coCurriculars.title} bullets={coCurriculars.bullets} />
        </Reveal>

        <Reveal delay={270} className="equal-height-grid-item">
          <Card interactive className="equal-height-card" data-equal-height>
            <h3 className="text-xl font-semibold md:text-2xl">{featured.title}</h3>
            <div className="mt-5 grid grid-cols-2 content-start gap-3">
              {featured.items.map((item, index) => (
                <Reveal key={item.id} delay={320 + index * 70}>
                  <FeaturedItem {...item} />
                </Reveal>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
