import { palette } from '../palette'

export default function Palette() {
  return (
    <section>
      <h2 className="text-heading">Palette</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {palette.map((color) => (
          <div
            key={color.token}
            className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div className="h-18" style={{ backgroundColor: `var(${color.token})` }} />
            <div className="px-4 pt-2 pb-4">
              <p className="text-small font-semibold">{color.name}</p>
              <p className="font-mono text-small text-fg-muted">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
