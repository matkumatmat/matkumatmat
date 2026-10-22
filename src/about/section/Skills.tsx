import { useMemo } from 'react'
import { about, type SkillType } from '../data'

const pillStyles: Record<SkillType, string> = {
  hard: 'border-transparent bg-brand text-brand-fg',
  soft: 'border-transparent bg-accent text-accent-fg',
  meta: 'border-line bg-surface-2 text-fg',
  cognitive: 'border-brand-text/60 bg-transparent text-brand-text',
  life: 'border-dashed border-line bg-transparent text-fg-muted',
}

/** Acak stabil (seed tetap) biar urutan campurannya tidak berubah tiap render */
function shuffleSeeded<T>(items: T[]): T[] {
  const arr = [...items]
  let seed = 7
  const rand = (): number => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function Skills() {
  const pills = useMemo(
    () =>
      shuffleSeeded(
        about.skills.flatMap((group) =>
          group.items.map((label) => ({ type: group.id, label })),
        ),
      ),
    [],
  )

  return (
    <section aria-labelledby="skills-heading">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <h2 id="skills-heading" className="shrink-0 text-title text-fg">
          6. <span className="bg-accent px-2 text-accent-fg">Skills</span>
        </h2>
        <span aria-hidden="true" className="h-px min-w-8 flex-1 bg-line" />
        <div className="flex flex-wrap gap-2" aria-label="Skill types">
          {about.skills.map((group) => (
            <span
              key={group.id}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-label font-semibold ${pillStyles[group.id]}`}
            >
              <svg aria-hidden="true" fill="currentColor" className="h-3.5 w-3.5">
                <use href={`/icons.svg#${group.icon}`} />
              </svg>
              {group.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-surface p-4 sm:p-6">
        <ul className="flex flex-wrap gap-2">
          {pills.map((pill) => (
            <li
              key={`${pill.type}-${pill.label}`}
              className={`rounded-full border px-3.5 py-1.5 text-small font-medium ${pillStyles[pill.type]}`}
            >
              {pill.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
