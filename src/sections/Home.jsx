// Landing section: centered hero with individually positioned bottom/side doodles
import Reveal from '../components/Reveal'
import TypewriterIntro from '../components/TypewriterIntro'

export default function Home() {
  return (
    <section
      id="home"
      className="home-section relative flex flex-col bg-white dark:bg-black"
    >
      {/* Doodle band sits above the scroll fade — keeps center doodle out of the gradient */}
      <div className="home-doodle-band pointer-events-none" aria-hidden="true">
        <div className="home-doodles">
          <img src="/assets/doodles/doodle-left.jpg" alt="" className="home-doodle-left" />
          <div className="home-doodle-center-wrap">
            <img src="/assets/doodles/doodle-center.jpg" alt="" className="home-doodle-center" />
          </div>
          <img src="/assets/doodles/doodle-right.jpg" alt="" className="home-doodle-right" />
        </div>
      </div>

      <div className="home-section-fade pointer-events-none absolute inset-x-0 bottom-0 z-[2]" />

      <div className="home-hero relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Reveal delay={0}>
          <img
            src="/assets/profile.png"
            alt="Urvi Gupta"
            className="home-hero-photo h-28 w-28 rounded-full border-2 border-gray-300 object-cover object-[center_20%]
              transition-colors duration-200 hover:border-pink-400
              dark:border-gray-600 dark:hover:border-pink-500
              sm:h-32 sm:w-32 md:h-40 md:w-40"
          />
        </Reveal>

        <Reveal as="h1" className="home-hero-title font-bold tracking-wide" delay={80}>
          Hi, I&apos;m Urvi!
        </Reveal>

        <Reveal className="mt-4 w-full max-w-2xl" delay={160}>
          <TypewriterIntro />
        </Reveal>
      </div>
    </section>
  )
}
