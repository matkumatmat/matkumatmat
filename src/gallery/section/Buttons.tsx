const samples = [
  {
    label: 'Primary',
    usage: 'Main action per screen, brand fill',
    node: (
      <span className="inline-block rounded-full bg-brand px-5 py-3 text-small font-semibold text-brand-fg">
        Primary action
      </span>
    ),
  },
  {
    label: 'Secondary',
    usage: 'Alternative action, outline on surface',
    node: (
      <span className="inline-block rounded-full border border-line bg-surface px-5 py-3 text-small">
        Secondary action
      </span>
    ),
  },
  {
    label: 'Text link',
    usage: 'In-flow navigation, underline on accent panel',
    node: (
      <span className="text-label uppercase underline underline-offset-4">
        Text link
      </span>
    ),
  },
]

export default function ButtonsSection() {
  return (
    <section id="buttons">
      <h2 className="text-heading">Buttons</h2>
      <p className="text-body text-fg-muted mt-3 max-w-xl">
        Three variants cover the whole site. Pills everywhere is deliberate: one
        radius for every control.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {samples.map((sample) => (
          <div key={sample.label} className="rounded-xl border border-line bg-surface p-6">
            {sample.node}
            <p className="text-small mt-4 font-semibold">{sample.label}</p>
            <p className="text-small text-fg-muted">{sample.usage}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
