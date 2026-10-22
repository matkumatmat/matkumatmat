import type { ReactNode } from 'react'
import {
  about,
  certifications,
  education,
  milestones,
  owner,
  workExperience,
} from '../data'

type Density = 'card' | 'full' | 'print'

type CvPaperProps = {
  variant: 'creative' | 'ats'
  density: Density
}

function contactLine(separator: string): string {
  const socials = about.contact.socials
    .filter((social) => social.label === 'GitHub' || social.label === 'LinkedIn')
    .map((social) => social.href.replace(/^https:\/\/(www\.)?/, ''))
  return [owner.phone, about.contact.emails[0], owner.location, ...socials].join(separator)
}

function splitRole(name: string): [string, string] {
  const [role, company] = name.split(' · ')
  return [role, company ?? '']
}

const hardSkills = about.skills.find((group) => group.id === 'hard')?.items ?? []
const freelance = milestones.filter((item) => item.core === 'freelance')

const DENSITY = {
  card: {
    root: 'text-[3.15cqw]',
    pad: 'p-[1.7em]',
    padX: 'px-[1.7em]',
    name: 'text-[2.7em]',
    role: 'text-[1.05em]',
    meta: 'text-[0.88em]',
    section: 'text-[1.1em]',
    body: 'text-[0.95em]',
    photo: 'w-[7.5em]',
    rule: 'h-[0.3em]',
    gap: 'gap-[1em]',
  },
  full: {
    root: 'text-[2.65cqw]',
    pad: 'p-[2.4em]',
    padX: 'px-[2.4em]',
    name: 'text-[2.7em]',
    role: 'text-[1.05em]',
    meta: 'text-[0.88em]',
    section: 'text-[1.1em]',
    body: 'text-[0.95em]',
    photo: 'w-[7.5em]',
    rule: 'h-[0.3em]',
    gap: 'gap-[1.4em]',
  },
  print: {
    root: 'text-[10pt]',
    pad: 'p-[2.4em]',
    padX: 'px-[2.4em]',
    name: 'text-[2.7em]',
    role: 'text-[1.05em]',
    meta: 'text-[0.88em]',
    section: 'text-[1.1em]',
    body: 'text-[0.95em]',
    photo: 'w-[7.5em]',
    rule: 'h-[0.3em]',
    gap: 'gap-[1.4em]',
  },
} as const

function CreativePaper({ density }: { density: Density }) {
  const s = DENSITY[density]
  const roles = workExperience.slice(0, density === 'card' ? 2 : 3)

  return (
    <div className={`flex h-full w-full flex-col bg-white font-sans text-[#141414] ${s.root}`}>
      <header className={`flex items-start justify-between gap-[1.2em] ${s.pad} pb-[1.2em]`}>
        <div className="min-w-0">
          <p className={`font-extrabold leading-[0.95] tracking-[-0.03em] text-[#054082] ${s.name}`}>
            {owner.name}
          </p>
          <p className={`mt-[0.35em] font-semibold text-[#141414] ${s.role}`}>{owner.role}</p>
          <p className={`mt-[0.4em] leading-[1.4] text-[#6b675e] ${s.meta}`}>
            {contactLine('  ·  ')}
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}me-facing-clean.webp`}
          alt="Portrait photo"
          draggable={false}
          className={`aspect-square shrink-0 rounded-[0.6em] object-cover object-top ${s.photo}`}
        />
      </header>

      <div className={`w-full bg-[#b8d600] ${s.rule}`} />

      <div className={`grid min-h-0 flex-1 grid-cols-[1.55fr_1fr] ${s.padX} pt-[1.3em] ${s.gap}`}>
        <div className={`flex min-w-0 flex-col ${s.gap}`}>
          <section>
            <p className={`font-bold tracking-[-0.01em] text-[#054082] ${s.section}`}>Profile</p>
            <p className={`mt-[0.5em] leading-[1.5] text-[#333] ${s.body}`}>{owner.profile}</p>
          </section>
          <section>
            <p className={`font-bold tracking-[-0.01em] text-[#054082] ${s.section}`}>Experience</p>
            <div className={`mt-[0.5em] flex flex-col ${density === 'full' ? 'gap-[1.1em]' : 'gap-[0.8em]'}`}>
              {roles.map((job) => {
                const [role, company] = splitRole(job.name)
                const points = (job.bullets ?? []).slice(0, density === 'card' ? 2 : 3)
                return (
                  <div key={job.name}>
                    <p className={`font-semibold leading-[1.3] ${s.body}`}>
                      {role}
                      <span className="font-normal text-[#6b675e]">
                        {'  ·  '}
                        {company}
                      </span>
                    </p>
                    <p className={`leading-[1.4] text-[#6b675e] ${s.meta}`}>{job.year}</p>
                    <ul className={`mt-[0.4em] flex flex-col ${density === 'full' ? 'gap-[0.45em]' : 'gap-[0.3em]'}`}>
                      {points.map((point) => (
                        <li key={point} className={`flex gap-[0.55em] leading-[1.5] text-[#333] ${s.body}`}>
                          <span
                            aria-hidden="true"
                            className="mt-[0.55em] h-[0.35em] w-[0.35em] shrink-0 bg-[#b8d600]"
                          />
                          <span className="min-w-0">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        <aside className={`flex min-w-0 flex-col ${s.gap}`}>
          <section>
            <p className={`font-bold tracking-[-0.01em] text-[#054082] ${s.section}`}>Skills</p>
            <p className={`mt-[0.5em] leading-[1.6] text-[#333] ${s.body}`}>
              {hardSkills.join('  ·  ')}
            </p>
          </section>
          <section>
            <p className={`font-bold tracking-[-0.01em] text-[#054082] ${s.section}`}>Education</p>
            {education.map((item) => {
              const [degree, school] = splitRole(item.name)
              return (
                <div key={item.name}>
                  <p className={`mt-[0.5em] font-semibold leading-[1.3] ${s.body}`}>{degree}</p>
                  <p className={`leading-[1.45] text-[#6b675e] ${s.meta}`}>
                    {school}
                    <br />
                    {item.year}
                  </p>
                </div>
              )
            })}
          </section>
        </aside>
      </div>
    </div>
  )
}

function AtsSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <p className="border-b border-[#111] pb-[0.3em] text-[0.95em] font-bold uppercase tracking-[0.1em] text-[#111]">
        {title}
      </p>
      <div className="mt-[0.55em]">{children}</div>
    </section>
  )
}

function AtsPageOne({ density }: { density: Density }) {
  const s = DENSITY[density]
  const roles = density === 'card' ? workExperience.slice(0, 2) : workExperience
  // Print pakai block layout: flex column rawan gagal fragmentasi antar halaman cetak.
  const isPrint = density === 'print'

  return (
    <div
      className={
        isPrint
          ? `block w-full bg-white font-sans text-[#111111] ${s.root}`
          : `flex h-full w-full flex-col bg-white font-sans text-[#111111] ${s.root}`
      }
    >
      <header className={`text-center ${s.pad} pb-[1.3em]`}>
        <p className={`font-bold leading-[1.1] tracking-[-0.01em] ${s.name}`}>{owner.name}</p>
        <p className={`mt-[0.3em] font-medium text-[#333] ${s.role}`}>{owner.role}</p>
        <p className={`mt-[0.4em] leading-[1.5] text-[#444] ${s.meta}`}>
          {contactLine('  |  ')}
        </p>
      </header>

      <div className={isPrint ? `block ${s.padX} space-y-[1.4em] pb-[1.6em]` : `flex min-h-0 flex-1 flex-col ${s.padX} ${s.gap} pb-[1.6em]`}>
        <AtsSection title="Profile">
          <p className={`leading-[1.55] text-[#222] ${s.body}`}>{owner.profile}</p>
        </AtsSection>

        <AtsSection title="Experience">
          <div
            className={
              isPrint
                ? 'block space-y-[1.1em]'
                : `flex flex-col ${density === 'full' ? 'gap-[1.1em]' : 'gap-[0.8em]'}`
            }
          >
            {roles.map((job) => {
              const [role, company] = splitRole(job.name)
              const points = (job.bullets ?? []).slice(0, density === 'card' ? 2 : 4)
              return (
                <div key={job.name} className={isPrint ? 'break-inside-avoid' : undefined}>
                  <p className={`font-bold leading-[1.3] ${s.body}`}>
                    {role}
                    <span className="font-normal text-[#444]">
                      {'  ·  '}
                      {company}
                    </span>
                    <span className="float-right font-normal text-[#444]">{job.year}</span>
                  </p>
                  <ul className={`mt-[0.4em] list-disc pl-[1.4em] ${density === 'full' ? 'gap-[0.4em]' : 'gap-[0.25em]'}`}>
                    {points.map((point) => (
                      <li key={point} className={`leading-[1.5] text-[#222] ${s.body}`}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </AtsSection>
      </div>
    </div>
  )
}

function AtsPageTwo({ density }: { density: Density }) {
  const s = DENSITY[density]
  const isPrint = density === 'print'

  return (
    <div
      className={
        isPrint
          ? `block w-full bg-white font-sans text-[#111111] ${s.root}`
          : `flex h-full w-full flex-col bg-white font-sans text-[#111111] ${s.root}`
      }
    >
      <div className={isPrint ? `block ${s.pad} space-y-[1.4em]` : `flex min-h-0 flex-1 flex-col ${s.pad} ${s.gap}`}>
        <AtsSection title="Freelance">
          <ul className={isPrint ? 'list-disc space-y-[0.4em] pl-[1.4em]' : 'flex list-disc flex-col gap-[0.4em] pl-[1.4em]'}>
            {freelance.map((item) => (
              <li key={`${item.core}-${item.year}`} className={`leading-[1.5] text-[#222] ${s.body}`}>
                <span className="font-bold">{item.year}</span>
                {'  ·  '}
                {item.description}
              </li>
            ))}
          </ul>
        </AtsSection>

        <AtsSection title="Skills">
          <p className={`leading-[1.6] text-[#222] ${s.body}`}>{hardSkills.join(' · ')}</p>
        </AtsSection>

        <AtsSection title="Education">
          {education.map((item) => (
            <p key={item.name} className={`leading-[1.5] text-[#222] ${s.body}`}>
              <span className="font-bold">{item.name}</span>
              <span className="float-right text-[#444]">{item.year}</span>
            </p>
          ))}
        </AtsSection>

        <AtsSection title="Certifications">
          {certifications.map((cert) => (
            <div key={cert.credentialId}>
              <p className={`leading-[1.5] text-[#222] ${s.body}`}>
                <span className="font-bold">{cert.title}</span>
                <span className="float-right text-[#444]">{cert.issued}</span>
              </p>
              <p className={`leading-[1.45] text-[#444] ${s.meta}`}>
                {cert.issuer} · Credential ID {cert.credentialId}
              </p>
            </div>
          ))}
        </AtsSection>
      </div>
    </div>
  )
}

/** Lembar cetak A4 (dipakai di #cv-print-root). ATS: 2 halaman. Creative: 1 halaman. */
export function CvPrintSheet({ variant }: { variant: 'creative' | 'ats' }) {
  if (variant === 'ats') {
    return (
      <>
        <div className="cv-print-page cv-print-break" style={{ containerType: 'inline-size' }}>
          <AtsPageOne density="print" />
        </div>
        <div className="cv-print-page" style={{ containerType: 'inline-size' }}>
          <AtsPageTwo density="print" />
        </div>
      </>
    )
  }
  return (
    <div className="cv-print-page" style={{ containerType: 'inline-size' }}>
      <CreativePaper density="print" />
    </div>
  )
}

export default function CvPaper({ variant, density }: CvPaperProps) {
  if (variant === 'ats') {
    if (density === 'full') {
      return (
        <div className="flex w-full flex-col gap-4">
          <div className="aspect-[210/297] w-full shrink-0 overflow-hidden rounded-md bg-white">
            <AtsPageOne density="full" />
          </div>
          <div className="aspect-[210/297] w-full shrink-0 overflow-hidden rounded-md bg-white">
            <AtsPageTwo density="full" />
          </div>
        </div>
      )
    }
    return (
      <div aria-hidden={true} className="h-full w-full">
        <AtsPageOne density="card" />
      </div>
    )
  }

  return (
    <div aria-hidden={density === 'card' ? true : undefined} className="h-full w-full">
      <CreativePaper density={density} />
    </div>
  )
}
