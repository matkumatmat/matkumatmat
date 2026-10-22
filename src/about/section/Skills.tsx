import { about } from '../data'

export default function Skills() {
  return (
    <section>
      <h2 className="text-heading">Skills</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {about.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-line bg-surface px-3 py-1 text-small"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
