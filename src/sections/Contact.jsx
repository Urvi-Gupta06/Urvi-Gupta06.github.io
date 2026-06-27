// Contact section: email, LinkedIn, and GitHub cards with outline icons and links
import Card from '../components/Card'
import Reveal from '../components/Reveal'

function EmailIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0 .1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0 .1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

const CONTACT_ITEMS = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:urvigupta.cs@gmail.com',
    text: 'urvigupta.cs@gmail.com',
    external: false,
    Icon: EmailIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/urvi-guptaa/',
    text: 'LinkedIn',
    external: true,
    Icon: LinkedInIcon,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Urvi-Gupta06',
    text: 'GitHub',
    external: true,
    Icon: GitHubIcon,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20 pb-16 bg-white dark:bg-black"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <Reveal as="h2" className="text-3xl font-bold">
          Connect with me!
        </Reveal>
        <Reveal as="p" className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-400" delay={90}>
          I&apos;m always up for discussing new projects, creative ideas, or opportunities to be
          part of a bigger vision. Feel free to reach out!
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {CONTACT_ITEMS.map(({ id, label, href, text, external, Icon }, index) => (
          <Reveal key={id} delay={index * 90}>
            <Card
            as="a"
            href={href}
            interactive
            className="group flex flex-col items-center py-6 text-center no-underline text-inherit"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            aria-label={id === 'email' ? `Email ${text}` : `Visit ${label} profile`}
          >
            <Icon className="contact-icon h-10 w-10" />
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300">{text}</p>
          </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
