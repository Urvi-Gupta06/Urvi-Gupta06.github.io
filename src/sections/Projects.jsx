// Projects section: grid of project cards with GitHub links and optional non-repo entries
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <Reveal as="h2" className="mb-8 text-3xl font-bold">
        Projects
      </Reveal>
      <div className="mx-auto grid max-w-6xl items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 90} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
