import { about } from '../data'

export default function Contact() {
  return (
    <section>
      <h2 className="text-heading">Kontak</h2>
      <div className="mt-4 flex flex-wrap items-center gap-5 text-small">
        <a
          href={`mailto:${about.contact.email}`}
          className="text-brand-text underline underline-offset-4"
        >
          {about.contact.email}
        </a>
        {about.contact.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
