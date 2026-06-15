// Landing section: name, photo placeholder, intro line; doodle background will be added later
export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center
        bg-white dark:bg-black"
    >
      {/* Photo placeholder — replace src with your image in public/assets/ */}
      <div
        className="mb-6 h-32 w-32 rounded-full border-2 border-gray-300 bg-gray-100
          transition-colors duration-200 hover:border-pink-400 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-pink-500"
        aria-label="Profile photo placeholder"
      />

      <h1 className="text-4xl font-bold md:text-5xl">Urvi Gupta</h1>
      <p className="mt-4 max-w-md text-lg text-gray-600 dark:text-gray-400">
        Intro line placeholder — content coming soon.
      </p>
    </section>
  )
}
