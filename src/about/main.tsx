import Contact from './section/Contact'
import Intro from './section/Intro'
import Skills from './section/Skills'
import Story from './section/Story'
import Hero from './section/Hero'

export default function About() {
  return (
    <main className=" flex flex-col px-6 gap-12 pt-6 py-10">
      <Hero/>
      <Intro />
      <Story />
      <Skills />
      <Contact />
    </main>
  )
}
