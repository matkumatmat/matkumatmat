const year = new Date().getFullYear()

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-small text-fg-muted">
        <p>© {year} Kaye</p>
        <p>Built with React + Vite</p>
      </div>
    </footer>
  )
}
