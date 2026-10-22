import type { ReactNode } from 'react'

type Density = 'card' | 'full'

type CvPaperProps = {
  variant: 'creative' | 'ats'
  density: Density
}

const CV_CONTENT = {
  name: 'Nama Kamu',
  role: 'Frontend Engineer',
  contact: ['nama@kamu.dev', 'github.com/namakamu', 'linkedin.com/in/namakamu'],
  profile:
    'Frontend engineer yang fokus bikin antarmuka cepat, aksesibel, dan konsisten. Terbiasa bawa produk dari desain sampai rilis pakai TypeScript, React, dan design system berbasis token.',
  experience: [
    {
      role: 'Frontend Engineer',
      company: 'Studio Contoh',
      period: '2023 — Sekarang',
      bullets: [
        'Bangun ulang halaman utama pakai React + TypeScript, LCP 4,1s jadi 1,6s.',
        'Jaga design system berbasis token yang dipakai 3 tim produk.',
        'Naikkin skor aksesibilitas audit internal ke WCAG AA.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'Agensi Kreatif',
      period: '2021 — 2023',
      bullets: [
        'Kirim 20+ landing page klien dengan skor Lighthouse 90+.',
        'Standarkan checklist QA aksesibilitas buat tim.',
      ],
    },
  ],
  skills: [
    'TypeScript',
    'React 19',
    'Vite',
    'Tailwind CSS',
    'Node.js',
    'Aksesibilitas',
    'Git',
    'Figma',
  ],
  education: {
    degree: 'S1 Informatika',
    school: 'Universitas Contoh',
    period: '2017 — 2021',
  },
}

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
} as const

function CreativePaper({ density }: { density: Density }) {
  const s = DENSITY[density]
  const points =
    density === 'card' ? CV_CONTENT.experience[0].bullets.slice(0, 2) : CV_CONTENT.experience[0].bullets

  return (
    <div className={`flex h-full w-full flex-col bg-white font-sans text-[#141414] ${s.root}`}>
      <header className={`flex items-start justify-between gap-[1.2em] ${s.pad} pb-[1.2em]`}>
        <div className="min-w-0">
          <p className={`font-extrabold leading-[0.95] tracking-[-0.03em] text-[#054082] ${s.name}`}>
            {CV_CONTENT.name}
          </p>
          <p className={`mt-[0.35em] font-semibold text-[#141414] ${s.role}`}>{CV_CONTENT.role}</p>
          <p className={`mt-[0.4em] leading-[1.4] text-[#6b675e] ${s.meta}`}>
            {CV_CONTENT.contact.join('  ·  ')}
          </p>
        </div>
        <img
          src="/me-facing-clean.webp"
          alt="Foto profil"
          draggable={false}
          className={`aspect-square shrink-0 rounded-[0.6em] object-cover object-top ${s.photo}`}
        />
      </header>

      <div className={`w-full bg-[#b8d600] ${s.rule}`} />

      <div className={`grid min-h-0 flex-1 grid-cols-[1.55fr_1fr] ${s.padX} pt-[1.3em] ${s.gap}`}>
        <div className={`flex min-w-0 flex-col ${s.gap}`}>
          <section>
            <p className={`font-bold tracking-[-0.01em] text-[#054082] ${s.section}`}>Profil</p>
            <p className={`mt-[0.5em] leading-[1.5] text-[#333] ${s.body}`}>{CV_CONTENT.profile}</p>
          </section>
          <section>
            <p className={`font-bold tracking-[-0.01em] text-[#054082] ${s.section}`}>Pengalaman</p>
            <div className={`mt-[0.5em] flex flex-col ${density === 'full' ? 'gap-[1.1em]' : 'gap-[0.8em]'}`}>
              <div>
                <p className={`font-semibold leading-[1.3] ${s.body}`}>
                  {CV_CONTENT.experience[0].role}
                  <span className="font-normal text-[#6b675e]">
                    {'  ·  '}
                    {CV_CONTENT.experience[0].company}
                  </span>
                </p>
                <p className={`leading-[1.4] text-[#6b675e] ${s.meta}`}>
                  {CV_CONTENT.experience[0].period}
                </p>
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
              <div>
                <p className={`font-semibold leading-[1.3] ${s.body}`}>
                  {CV_CONTENT.experience[1].role}
                  <span className="font-normal text-[#6b675e]">
                    {'  ·  '}
                    {CV_CONTENT.experience[1].company}
                  </span>
                </p>
                <p className={`leading-[1.4] text-[#6b675e] ${s.meta}`}>
                  {CV_CONTENT.experience[1].period}
                </p>
                <ul className={`mt-[0.4em] flex flex-col ${density === 'full' ? 'gap-[0.45em]' : 'gap-[0.3em]'}`}>
                  {CV_CONTENT.experience[1].bullets.map((point) => (
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
            </div>
          </section>
        </div>

        <aside className={`flex min-w-0 flex-col ${s.gap}`}>
          <section>
            <p className={`font-bold tracking-[-0.01em] text-[#054082] ${s.section}`}>Keahlian</p>
            <p className={`mt-[0.5em] leading-[1.6] text-[#333] ${s.body}`}>
              {CV_CONTENT.skills.join('  ·  ')}
            </p>
          </section>
          <section>
            <p className={`font-bold tracking-[-0.01em] text-[#054082] ${s.section}`}>Pendidikan</p>
            <p className={`mt-[0.5em] font-semibold leading-[1.3] ${s.body}`}>
              {CV_CONTENT.education.degree}
            </p>
            <p className={`leading-[1.45] text-[#6b675e] ${s.meta}`}>
              {CV_CONTENT.education.school}
              <br />
              {CV_CONTENT.education.period}
            </p>
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

function AtsPaper({ density }: { density: Density }) {
  const s = DENSITY[density]
  const points =
    density === 'card' ? CV_CONTENT.experience[0].bullets.slice(0, 2) : CV_CONTENT.experience[0].bullets

  return (
    <div className={`flex h-full w-full flex-col bg-white font-sans text-[#111111] ${s.root}`}>
      <header className={`text-center ${s.pad} pb-[1.3em]`}>
        <p className={`font-bold leading-[1.1] tracking-[-0.01em] ${s.name}`}>{CV_CONTENT.name}</p>
        <p className={`mt-[0.3em] font-medium text-[#333] ${s.role}`}>{CV_CONTENT.role}</p>
        <p className={`mt-[0.4em] leading-[1.5] text-[#444] ${s.meta}`}>
          {CV_CONTENT.contact.join('  |  ')}
        </p>
      </header>

      <div className={`flex min-h-0 flex-1 flex-col ${s.padX} ${s.gap} pb-[1.6em]`}>
        <AtsSection title="Profil">
          <p className={`leading-[1.55] text-[#222] ${s.body}`}>{CV_CONTENT.profile}</p>
        </AtsSection>

        <AtsSection title="Pengalaman">
          <div className={`flex flex-col ${density === 'full' ? 'gap-[1.1em]' : 'gap-[0.8em]'}`}>
            <div>
              <p className={`font-bold leading-[1.3] ${s.body}`}>
                {CV_CONTENT.experience[0].role}
                <span className="font-normal text-[#444]">
                  {'  —  '}
                  {CV_CONTENT.experience[0].company}
                </span>
                <span className="float-right font-normal text-[#444]">
                  {CV_CONTENT.experience[0].period}
                </span>
              </p>
              <ul className={`mt-[0.4em] list-disc pl-[1.4em] ${density === 'full' ? 'gap-[0.4em]' : 'gap-[0.25em]'}`}>
                {points.map((point) => (
                  <li key={point} className={`leading-[1.5] text-[#222] ${s.body}`}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`font-bold leading-[1.3] ${s.body}`}>
                {CV_CONTENT.experience[1].role}
                <span className="font-normal text-[#444]">
                  {'  —  '}
                  {CV_CONTENT.experience[1].company}
                </span>
                <span className="float-right font-normal text-[#444]">
                  {CV_CONTENT.experience[1].period}
                </span>
              </p>
              <ul className={`mt-[0.4em] list-disc pl-[1.4em] ${density === 'full' ? 'gap-[0.4em]' : 'gap-[0.25em]'}`}>
                {CV_CONTENT.experience[1].bullets.map((point) => (
                  <li key={point} className={`leading-[1.5] text-[#222] ${s.body}`}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AtsSection>

        <AtsSection title="Keahlian">
          <p className={`leading-[1.6] text-[#222] ${s.body}`}>{CV_CONTENT.skills.join(' · ')}</p>
        </AtsSection>

        <AtsSection title="Pendidikan">
          <p className={`leading-[1.5] text-[#222] ${s.body}`}>
            <span className="font-bold">{CV_CONTENT.education.degree}</span>
            {'  —  '}
            {CV_CONTENT.education.school}
            <span className="float-right text-[#444]">{CV_CONTENT.education.period}</span>
          </p>
        </AtsSection>
      </div>
    </div>
  )
}

export default function CvPaper({ variant, density }: CvPaperProps) {
  if (variant === 'ats') {
    return (
      <div aria-hidden={density === 'card' ? true : undefined} className="h-full w-full">
        <AtsPaper density={density} />
      </div>
    )
  }

  return (
    <div aria-hidden={density === 'card' ? true : undefined} className="h-full w-full">
      <CreativePaper density={density} />
    </div>
  )
}