import Contact from './section/Contact'
import Intro from './section/Intro'
import Skills from './section/Skills'
import Story from './section/Story'
import Hero from './section/Hero'

export default function About() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
      <Hero/>
      <Intro />
      <Story />
      <Skills />
      <Contact />
    </main>
  )
}
