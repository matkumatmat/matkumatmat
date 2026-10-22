export default function HeroSection() {
  return (
    <section>
      <p className="text-label uppercase text-accent-text">Portfolio</p>
      <h1 className="text-display display-tight mt-4 max-w-4xl">
        Building things that feel fast.
      </h1>
      <p className="text-body text-fg-muted mt-6 max-w-xl">
        Frontend engineer. Fokus pada performa, aksesibilitas, dan sistem desain yang
        konsisten.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#"
          className="rounded-full bg-brand px-5 py-3 text-small font-semibold text-brand-fg transition-opacity hover:opacity-90"
        >
          Lihat Proyek
        </a>
        <a
          href="#"
          className="rounded-full border border-line bg-surface px-5 py-3 text-small transition-colors hover:border-brand-text hover:text-brand-text"
        >
          Kontak
        </a>
      </div>
    </section>
  )
}
