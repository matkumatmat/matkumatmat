import { milestones } from '../data'

export default function Milestone() {
  return (
    <section>
      <p className="text-label uppercase text-fg-muted">Milestone</p>
      <h2 className="mt-1 text-title text-fg">3. Milestones</h2>

      <ol className="relative mt-8 border-l border-line">
        {milestones.map((item) => (
          <li
            key={`${item.year}-${item.title}`}
            className="group relative pb-10 pl-6 last:pb-0 md:pl-8"
          >
            {/* Penanda titik di rail — posisi center di garis border */}
            <span
              aria-hidden="true"
              className="absolute top-1.5 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-canvas transition-transform duration-300 ease-out group-hover:scale-125 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <p className="font-mono text-label uppercase text-accent-text">
              {item.year}
            </p>
            <h3 className="mt-2 text-subheading text-fg">{item.title}</h3>
            <p className="mt-2 max-w-2xl text-body text-fg-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
