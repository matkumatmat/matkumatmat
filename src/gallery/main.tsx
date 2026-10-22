import Code from './section/Code'
import Hero from './section/Hero'
import Palette from './section/Palette'
import TypeScale from './section/TypeScale'

export default function Gallery() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
      <Hero />
      <Palette />
      <TypeScale />
      <Code />
    </main>
  )
}
