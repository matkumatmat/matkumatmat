import Contact from './section/Contact'
import Intro from './section/Intro'
import Skills from './section/Skills'
import Story from './section/Story'
import Milestone from './section/Milestone'
import Hero from './section/Hero'
import Resume from './section/Resume'

export default function About() {
  return (
    <main className=" flex flex-col px-6 gap-12 pt-6 py-10">
      <Hero />
      <Resume/>
      <Intro />
      <Story />
      <Milestone />
      <Skills />
      <Contact />
    </main>
  )
}
