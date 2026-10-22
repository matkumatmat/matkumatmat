import { useState } from 'react'
import { palette, radii } from '../palette'

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export default function Palette() {
  const [copied, setCopied] = useState<string | null>(null)

  const onCopy = async (key: string, text: string) => {
    if (await copyText(text)) {
      setCopied(key)
      window.setTimeout(() => setCopied((current) => (current === key ? null : current)), 1200)
    }
  }

  return (
    <section id="palette">
      <h2 className="text-heading">Palette</h2>
      <p className="text-body text-fg-muted mt-3 max-w-xl">
        Runtime tokens. Swatches follow the active theme; click any hex to copy it.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {palette.map((color) => (
          <div
            key={color.token}
            className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div className="h-18" style={{ backgroundColor: `var(${color.token})` }} />
            <div className="px-4 pt-2 pb-4">
              <p className="text-small font-semibold">{color.name}</p>
              <p className="font-mono text-small text-fg-muted">{color.token}</p>
              <p className="font-mono text-small text-fg-muted">{color.className}</p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => onCopy(`${color.token}-light`, color.light)}
                  className="rounded-md border border-line px-2 py-1 font-mono text-small transition-colors hover:border-brand-text hover:text-brand-text"
                >
                  {copied === `${color.token}-light` ? 'copied' : color.light}
                </button>
                <button
                  type="button"
                  onClick={() => onCopy(`${color.token}-dark`, color.dark)}
                  className="rounded-md border border-line px-2 py-1 font-mono text-small transition-colors hover:border-brand-text hover:text-brand-text"
                >
                  {copied === `${color.token}-dark` ? 'copied' : color.dark}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-subheading mt-10">Shape</h3>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {radii.map((radius) => (
          <div key={radius.label} className="rounded-xl border border-line bg-surface p-4">
            <div className={`h-14 bg-brand ${radius.className}`} />
            <p className="font-mono text-small mt-3">{radius.label}</p>
            <p className="text-small text-fg-muted">{radius.usage}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
