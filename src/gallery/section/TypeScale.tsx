import { typeScale } from '../typeScale'

export default function TypeScale() {
  return (
    <section id="type">
      <h2 className="text-heading">Type scale</h2>
      <p className="text-body text-fg-muted mt-3 max-w-xl">
        Google Sans Flex for text, Google Sans Code for mono. Top three steps are fluid.
      </p>
      <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
        {typeScale.map((step) => (
          <div
            key={step.label}
            className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span className="w-28 shrink-0 font-mono text-small text-fg-muted">
              {step.label}
            </span>
            <span className="min-w-0">
              <span className={`block ${step.className}`}>{step.specimen}</span>
              <span className="mt-2 block font-mono text-small text-fg-muted">{step.spec}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
