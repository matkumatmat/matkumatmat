import { about } from '../data'

export default function Story() {
  return (
    <>
      {about.blocks.map((block) => (
        <section key={block.title}>
          <h2 className="text-heading">{block.title}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body max-w-2xl">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
