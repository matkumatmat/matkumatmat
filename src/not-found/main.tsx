import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24">
      <p className="text-label uppercase text-accent-text">404</p>
      <h1 className="text-title">Halaman tidak ditemukan</h1>
      <p className="text-body text-fg-muted max-w-xl">
        URL yang kamu buka tidak ada di portfolio ini.
      </p>
      <Link
        to="/gallery"
        className="w-fit rounded-full bg-brand px-5 py-3 text-small font-semibold text-brand-fg transition-opacity hover:opacity-90"
      >
        Kembali ke Gallery
      </Link>
    </main>
  )
}
