// Writing section: debut book and links to other works
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import useEqualHeights from '../hooks/useEqualHeights'

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 underline-offset-2 transition-colors hover:text-pink-700 hover:underline dark:text-pink-400 dark:hover:text-pink-300"
    >
      {children}
    </a>
  )
}

function LinkRow({ label, href, text }) {
  return (
    <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
      {label}:{' '}
      <ExternalLink href={href}>{text}</ExternalLink>
    </p>
  )
}

export default function Writing() {
  const gridRef = useEqualHeights('[data-equal-height]')

  return (
    <section
      id="writing"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black"
    >
      <Reveal as="h2" className="mb-8 text-3xl font-bold">
        Writing
      </Reveal>

      <div
        ref={gridRef}
        className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2"
      >
        <Reveal delay={0} className="equal-height-grid-item">
          <Card className="equal-height-card" data-equal-height>
            <h3 className="text-xl font-semibold md:text-2xl">The Bucket List of Living</h3>

            <div className="mt-4">
              <img
                src="/assets/writing/bucket-list-cover.png"
                alt="Cover of The Bucket List of Living by Urvi Gupta — a sheet ghost wearing red sunglasses on a pink background"
                className="float-left mr-4 mb-3 w-28 rounded-md shadow-sm sm:w-32 md:w-36"
              />

              <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
                Can simply living be part of a bucket list? Short, bittersweet, and full of
                nostalgia, my debut book explored simple themes of life I&apos;ve always found
                intriguing.
              </p>

              <div className="mt-4 space-y-1">
                <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
                  Check it out on:
                </p>
                <ul className="card-bullets space-y-1">
                  <li>
                    <ExternalLink href="https://www.amazon.com/dp/9357654569">Amazon</ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://www.bribooks.com/bookstore/the-bucket-list-of-living/">
                      Bribooks
                    </ExternalLink>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={90} className="equal-height-grid-item">
          <Card className="equal-height-card" data-equal-height>
            <h3 className="text-xl font-semibold md:text-2xl">
              Explore my other works &amp; socials
            </h3>

            <div className="mt-4 space-y-3">
              <LinkRow
                label="Instagram"
                href="https://www.instagram.com/urvividly_writes/"
                text="@urvividly_writes"
              />
              <LinkRow
                label="Goodreads"
                href="https://www.goodreads.com/book/show/125663172-the-bucket-list-of-living"
                text="Urvi Gupta"
              />
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
