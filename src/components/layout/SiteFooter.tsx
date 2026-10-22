import { about } from '../../about/data'

const year = new Date().getFullYear()

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-small text-fg-muted md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-fg">© {year} Kaye</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={`mailto:${about.contact.emails[0]}`}
            className="transition-colors hover:text-fg motion-reduce:transition-none"
          >
            Email
          </a>
          {about.contact.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-fg motion-reduce:transition-none"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
