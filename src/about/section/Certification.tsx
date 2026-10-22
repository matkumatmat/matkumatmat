import { certifications, type Certification } from '../data'
import { asset, iconHref } from '../../lib/asset'

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-3.5 w-3.5"
    >
      <path d="M6.5 3.5H12.5V9.5M12.5 3.5L7 9M12.5 9.5V12.5H3.5V3.5H6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IssuerMark({ logo, issuer }: { logo: string; issuer: string }) {
  const isImage = logo.startsWith('/') || logo.startsWith('http')
  const initials = issuer
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand font-mono text-heading text-brand-fg">
      {isImage ? (
        <img src={asset(logo)} alt="" className="h-full w-full object-contain p-1.5" />
      ) : logo ? (
        <svg aria-hidden="true" fill="currentColor" className="h-7 w-7">
          <use href={iconHref(logo)} />
        </svg>
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </span>
  )
}

function Ticket({ cert }: { cert: Certification }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface sm:flex-row">
      <div className="flex items-center gap-4 bg-surface-2 p-5 sm:w-44 sm:shrink-0 sm:flex-col sm:justify-center sm:gap-3 sm:text-center">
        <IssuerMark logo={cert.logo} issuer={cert.issuer} />
        <p className="text-label uppercase text-fg-muted">
          Issued
          <span className="mt-1 block font-mono text-small normal-case text-fg">
            {cert.issued}
          </span>
        </p>
      </div>

      <div
        aria-hidden="true"
        className="relative self-stretch border-t-2 border-dashed border-line sm:border-l-2 sm:border-t-0"
      >
        <span className="absolute -left-3.5 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-canvas sm:-top-3.5 sm:left-1/2 sm:top-auto sm:-translate-x-1/2 sm:translate-y-0" />
        <span className="absolute -right-3.5 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-canvas sm:-bottom-3.5 sm:left-1/2 sm:right-auto sm:top-auto sm:-translate-x-1/2 sm:translate-y-0" />
      </div>

      <div className="min-w-0 flex-1 p-5 sm:p-6">
        <h3 className="text-heading">{cert.title}</h3>
        <p className="text-small mt-1 text-fg-muted">{cert.issuer}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-surface-2 px-2.5 py-1.5 font-mono text-small text-fg">
            ID {cert.credentialId}
          </span>
          {cert.url ? (
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-small font-medium transition-colors hover:bg-surface-2 motion-reduce:transition-none"
            >
              Show credential
              <ExternalIcon />
            </a>
          ) : (
            <span className="text-small ml-auto text-fg-muted">Verification link coming soon</span>
          )}
        </div>
        {cert.skills.length > 0 && (
          <p className="text-small mt-4 flex items-center gap-2 border-t border-line/60 pt-3 text-fg-muted">
            <span aria-hidden="true" className="bg-accent inline-block h-2 w-2 shrink-0" />
            {cert.skills.join(' · ')}
          </p>
        )}
      </div>
    </article>
  )
}

export default function Certification() {
  return (
    <section aria-labelledby="certification-heading">
      <div className="flex items-center gap-4">
        <h2 id="certification-heading" className="shrink-0 text-title text-fg">
          7. <span className="bg-accent px-2 text-accent-fg">Certifications</span>
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      {certifications.length === 0 ? (
        <p className="text-body mt-6 rounded-2xl border border-dashed border-line p-6 text-center text-fg-muted">
          No certifications yet.
        </p>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {certifications.map((cert) => (
            <Ticket key={cert.credentialId} cert={cert} />
          ))}
        </div>
      )}
    </section>
  )
}
