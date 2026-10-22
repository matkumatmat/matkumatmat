import { typeScale } from '../typeScale'

export default function TypeScale() {
  return (
    <section>
      <h2 className="text-heading">Type scale</h2>
      <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
        {typeScale.map((step) => (
          <div
            key={step.label}
            className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span className="w-28 shrink-0 font-mono text-small text-fg-muted">
              {step.label}
            </span>
            <span className={step.className}>{step.specimen}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
