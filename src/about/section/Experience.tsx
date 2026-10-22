import { education, workExperience, type ExperienceItem } from '../data'

function ItemIcon({ icon, label }: { icon: string; label: string }) {
  const isImage = icon.startsWith('/') || icon.startsWith('http')
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface-2 text-fg">
      {isImage ? (
        <img src={icon} alt="" className="h-full w-full object-contain p-1.5" />
      ) : (
        <svg aria-hidden="true" fill="currentColor" className="h-6 w-6">
          <use href={`/icons.svg#${icon}`} />
        </svg>
      )}
      <span className="sr-only">{label}</span>
    </span>
  )
}

function Column({ id, title, items }: { id: string; title: string; items: ExperienceItem[] }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h3 id={id} className="text-subheading">
          {title}
        </h3>
        <span className="font-mono text-small text-fg-muted">
          {String(items.length).padStart(2, '0')}
        </span>
      </div>
      <ul
        aria-labelledby={id}
        tabIndex={0}
        className="no-scrollbar mt-4 max-h-[360px] divide-y divide-line overflow-y-auto rounded-2xl border border-line bg-surface [mask-image:linear-gradient(to_bottom,black_calc(100%-2.5rem),transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text"
      >
        {items.map((item) => (
          <li
            key={`${item.year}-${item.name}`}
            title={item.name}
            className="flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-surface-2 motion-reduce:transition-none"
          >
            <ItemIcon icon={item.icon} label={item.name} />
            <span className="min-w-0">
              <span className="text-body block truncate font-medium">{item.name}</span>
              <span className="mt-0.5 block font-mono text-small text-fg-muted">{item.year}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <div className="flex items-center gap-4">
        <h2 id="experience-heading" className="shrink-0 text-title text-fg">
          5. <span className="bg-accent px-2 text-accent-fg">Experience</span>
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
        <Column id="experience-education" title="Education" items={education} />
        <Column id="experience-work" title="Work Experience" items={workExperience} />
      </div>
    </section>
  )
}
