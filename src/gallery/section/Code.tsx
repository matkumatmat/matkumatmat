const snippet = `/* 1. Paste the tokens into your CSS */
:root {
  --brand: #054082;
  --accent: #b8d600;
  --canvas: #f4f4f0;
  /* ...full block lives in DESIGN.md */
}

/* 2. Bridge them into Tailwind v4 */
@theme inline {
  --color-brand: var(--brand);
}

/* 3. Toggle .dark on <html> to switch themes */`

export default function CodeSection() {
  return (
    <section id="code">
      <h2 className="text-heading">Use in 3 steps</h2>
      <p className="text-body text-fg-muted mt-3 max-w-xl">
        The whole system is CSS variables plus a Tailwind v4 bridge. No build
        plugin, no config file.
      </p>
      <pre className="mt-6 overflow-x-auto rounded-xl border border-line bg-surface-2 p-5 font-mono text-small leading-relaxed">
        <code>{snippet}</code>
      </pre>
    </section>
  )
}
