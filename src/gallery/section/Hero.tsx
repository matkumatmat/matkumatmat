export default function HeroSection() {
  return (
    <section>
      <p className="text-label uppercase text-accent-text">Design tokens</p>
      <h1 className="text-display display-tight mt-4 max-w-4xl">
        One palette, two themes, zero hardcodes.
      </h1>
      <p className="text-body text-fg-muted mt-6 max-w-xl">
        Every color on this site comes from 12 CSS variables with light and dark
        values. Browse them below, copy what you need, or read the full spec in
        DESIGN.md.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#palette"
          className="rounded-full bg-brand px-5 py-3 text-small font-semibold text-brand-fg transition-opacity hover:opacity-90"
        >
          Browse tokens
        </a>
        <a
          href="https://github.com/matkumatmat"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-line bg-surface px-5 py-3 text-small transition-colors hover:border-brand-text hover:text-brand-text"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
