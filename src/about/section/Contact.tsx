import { useRef, useState } from 'react'
import { about } from '../data'
import { iconHref } from '../../lib/asset'

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const area = document.createElement('textarea')
      area.value = text
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      area.remove()
      return true
    } catch {
      return false
    }
  }
}

function EmailCard({
  email,
  index,
  isFront,
  onAdvance,
}: {
  email: string
  index: string
  isFront: boolean
  onAdvance: () => void
}) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<number | null>(null)

  const onCopy = async (): Promise<void> => {
    const ok = await copyText(email)
    setStatus(ok ? 'copied' : 'failed')
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus('idle'), 1600)
  }

  return (
    <article
      className={[
        'absolute inset-0',
        'transition-[transform,translate,rotate,scale,box-shadow] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        isFront
          ? 'z-20 -translate-x-[2%] -rotate-[3deg] shadow-[0_18px_44px_-12px_rgba(12,10,9,0.35)] hover:-translate-y-1'
          : 'z-10 -translate-y-3 translate-x-[6%] rotate-[7deg] scale-[0.94] shadow-[0_10px_26px_-12px_rgba(12,10,9,0.25)]',
      ].join(' ')}
    >
      <button
        type="button"
        onClick={onAdvance}
        aria-label="Show next email"
        className="absolute inset-0 z-10 cursor-pointer rounded-xl"
      />
      <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-label flex items-center gap-2 uppercase text-fg-muted">
            <span aria-hidden="true" className="bg-accent inline-block h-2 w-2" />
            Email
          </p>
          <span className="font-mono text-small text-fg-muted">{index}</span>
        </div>
        <a
          href={`mailto:${email}`}
          tabIndex={isFront ? undefined : -1}
          className="text-subheading relative z-20 break-all font-semibold leading-snug decoration-accent decoration-2 underline-offset-4 hover:underline"
        >
          {email}
        </a>
        <div className="relative z-20 flex justify-end">
          <button
            type="button"
            onClick={onCopy}
            tabIndex={isFront ? undefined : -1}
            aria-live="polite"
            aria-label={`Copy ${email}`}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-small transition-colors hover:bg-surface-2 motion-reduce:transition-none"
          >
            <svg aria-hidden="true" className="h-4 w-4">
              <use href={iconHref(status === 'copied' ? 'check-icon' : 'copy-icon')} />
            </svg>
            {status === 'copied' ? 'Copied' : status === 'failed' ? 'Failed' : 'Copy'}
          </button>
        </div>
      </div>
    </article>
  )
}

function SocialCard({
  social,
  index,
  depth,
  onAdvance,
}: {
  social: (typeof about.contact.socials)[number]
  index: string
  depth: number
  onAdvance: () => void
}) {
  const isFront = depth === 0

  return (
    <article
      className={[
        'absolute inset-0',
        'transition-[transform,translate,rotate,scale,box-shadow] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        isFront
          ? 'z-20 -rotate-[3deg] shadow-[0_18px_44px_-12px_rgba(12,10,9,0.35)] hover:-translate-y-1'
          : 'z-10 rotate-[5deg] scale-[0.95] shadow-[0_10px_26px_-12px_rgba(12,10,9,0.25)]',
      ].join(' ')}
      style={isFront ? undefined : { transform: `translate(${depth * 4}px, ${-depth * 12}px)` }}
    >
      <button
        type="button"
        onClick={onAdvance}
        aria-label="Show next profile"
        className="absolute inset-0 z-10 cursor-pointer rounded-xl"
      />
      <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-fg">
              <svg aria-hidden="true" fill="currentColor" className="h-5 w-5">
                <use href={iconHref(social.icon)} />
              </svg>
            </span>
            <span className="text-label uppercase text-fg-muted">{social.label}</span>
          </p>
          <span className="font-mono text-small text-fg-muted">{index}</span>
        </div>
        <a
          href={social.href}
          target="_blank"
          rel="noreferrer"
          tabIndex={isFront ? undefined : -1}
          aria-label={`${social.label}: ${social.handle}`}
          className="text-subheading relative z-20 break-all font-mono font-semibold leading-snug decoration-accent decoration-2 underline-offset-4 hover:underline"
        >
          {social.handle}
        </a>
        <div className="relative z-20 flex justify-end">
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={isFront ? undefined : -1}
            aria-label={`Open ${social.label} profile`}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-small transition-colors hover:bg-surface-2 motion-reduce:transition-none"
          >
            Open
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path
                d="M4.5 11.5L11.5 4.5M6 4.5h5.5V10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Contact() {
  const [activeEmail, setActiveEmail] = useState(0)
  const [activeSocial, setActiveSocial] = useState(0)
  const emailCount = about.contact.emails.length
  const socialCount = about.contact.socials.length

  return (
    <section aria-labelledby="contact-heading">
      <div className="flex items-center gap-4">
        <h2 id="contact-heading" className="shrink-0 text-title text-fg">
          8. <span className="bg-accent px-2 text-accent-fg">Contact</span>
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-12 md:grid-cols-2 md:gap-10">
        <div
          role="group"
          aria-label="Email addresses"
          className="relative ml-1 aspect-[7/4] w-[min(100%,26rem)]"
        >
          {about.contact.emails.map((email, i) => (
            <EmailCard
              key={email}
              email={email}
              index={String(i + 1).padStart(2, '0')}
              isFront={i === activeEmail}
              onAdvance={() => setActiveEmail((a) => (a + 1) % emailCount)}
            />
          ))}
        </div>

        <div
          role="group"
          aria-label="Social profiles"
          className="relative aspect-[7/4] w-[min(100%,26rem)]"
        >
          {about.contact.socials.map((social, i) => (
            <SocialCard
              key={social.href}
              social={social}
              index={String(i + 1).padStart(2, '0')}
              depth={(i - activeSocial + socialCount) % socialCount}
              onAdvance={() => setActiveSocial((a) => (a + 1) % socialCount)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
