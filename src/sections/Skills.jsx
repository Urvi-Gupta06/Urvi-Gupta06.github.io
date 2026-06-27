// Skills section: AI/ML and development skills in equal-height side-by-side cards
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import useEqualHeights from '../hooks/useEqualHeights'

const AI_ML_SKILLS = [
  'RAG',
  'Python',
  'PyTorch',
  'HuggingFace Transformers',
  'Scikit-Learn',
  'Pandas',
  'NumPy',
  'ChromaDB',
]

const DEVELOPMENT_SKILLS = [
  'JavaScript, TypeScript, HTML, CSS',
  'React, Flask, Django',
  'AWS (S3, Lambda, EC2, Step Functions)',
  'Java, SQL',
  'Docker',
  'REST APIs',
  'Vercel',
  'Git & Version Control',
]

function BulletList({ items }) {
  return (
    <ul className="card-bullets mt-4 space-y-2">
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

function SkillCard({ title, bullets }) {
  return (
    <Card interactive className="equal-height-card" data-equal-height>
      <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
      <BulletList items={bullets} />
    </Card>
  )
}

export default function Skills() {
  const gridRef = useEqualHeights('[data-equal-height]')

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <Reveal as="h2" className="mb-8 text-3xl font-bold">
        Skills
      </Reveal>

      <div
        ref={gridRef}
        className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2"
      >
        <Reveal delay={0} className="equal-height-grid-item">
          <SkillCard title="AI & ML" bullets={AI_ML_SKILLS} />
        </Reveal>

        <Reveal delay={90} className="equal-height-grid-item">
          <SkillCard title="Development" bullets={DEVELOPMENT_SKILLS} />
        </Reveal>
      </div>
    </section>
  )
}
