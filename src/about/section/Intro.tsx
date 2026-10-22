import { about } from '../data'

export default function Intro() {
  return (
    <header>
      <p className="text-label uppercase text-accent-text">About</p>
      <h1 className="text-title mt-4">{about.heading}</h1>
      <p className="text-body text-fg-muted mt-6 max-w-xl">{about.lede}</p>
    </header>
  )
}
