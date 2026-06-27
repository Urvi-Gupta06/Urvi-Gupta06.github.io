// Experience section: one interactive card per role with title, meta line, and bullet points
import Card from '../components/Card'
import Reveal from '../components/Reveal'

const EXPERIENCES = [
  {
    id: 'ai4cw',
    title: 'AI Intern | Commonwealth of Massachusetts',
    meta: 'May 2026 - Present | Amherst, MA',
    bullets: [
      'Working on an end-to-end pipeline for document processing and machine translation.',
    ],
  },
  
  {
    id: 'build-umass-stemplore',
    title: 'Product Manager & Engineer | BUILD UMass',
    meta: 'Sep 2025 - Present | Amherst, MA',
    bullets: [
      'Built an LLM-powered RAG tool for STEMplore, an educational platform, automating question creation from slides.',
      'Generated dense vector embeddings from slide content with transformer-based models and stored them in ChromaDB for semantic retrieval, enabling scalable, context-aware AI generation.',
      'Integrated the RAG pipeline: slide extraction, embeddings, LLM-based question generation, and JSON formatting into a cohesive automated workflow.',
    ],
  },
  {
    id: 'ersp',
    title: 'Early Research Scholars Program (ERSP) Fellow | NSF CoDec Expedition in Computing',
    meta: 'Feb 2026 - May 2026 | Amherst, MA',
    bullets: [
      'Integrated rooftop-level solar potential data from Google Sunroof with household electricity usage and transformer load data from Holyoke Gas & Electric to model effective, equitable residential solar deployment in Holyoke, MA.',
      'Evaluated a dual-objective optimization framework to compare tradeoffs between maximizing solar generation and minimizing transformer overload, identifying deployment strategies that support both decarbonization and grid stability.'],
  },
  /*{
    id: 'ai4all',
    title: 'Machine Learning Fellow | AI4ALL',
    meta: 'Sep 2025 - Present | Amherst, MA',
    bullets: [
      'Implemented fraud anomaly detection using Isolation Forest on a 6.3M-row PaySim mobile money dataset with Python (pandas, NumPy) and scikit-learn pipelines (ColumnTransformer, StandardScaler, OHE).',
      'Evaluated static versus adaptive models using rolling window retraining and EMA user profiling, tuning contamination for ~1:773 class imbalance and achieving ROC-AUC 0.924 (Precision 0.42, Recall 0.31) on a temporal holdout set.',
    ],
  },*/
  {
    id: 'umass-oop-ca',
    title: 'Undergraduate Course Assistant, Object-Oriented Programming | Manning CICS',
    meta: 'May 2025 - Present | Amherst, MA',
    bullets: [
      'Provided academic assistance to 300+ students in mastering core object-oriented programming and design principles.',
      'Led technical labs and live code debugging for 30+ students, strengthening error-handling and problem-solving skills.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <Reveal as="h2" className="mb-8 text-3xl font-bold">
        Experience
      </Reveal>
      <div className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
        {EXPERIENCES.map(({ id, title, meta, bullets }, index) => (
          <Reveal key={id} delay={index * 90} className="equal-height-grid-item">
            <Card interactive className="equal-height-card">
            <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
            <p className="card-meta mt-5">{meta}</p>
            <ul className="card-bullets mt-5 flex-grow space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true" className="shrink-0">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
