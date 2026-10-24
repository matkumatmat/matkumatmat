import Certification from './section/Certification'
import Contact from './section/Contact'
import Experience from './section/Experience'
import Intro from './section/Intro'
import Skills from './section/Skills'
import Milestone from './section/Milestone'
import Hero from './section/Hero'
import Resume from './section/Resume'

export default function About() {
  return (
    <main className="flex flex-col gap-12 px-4 pt-6 py-10 sm:px-6">
      <Hero />
      <Resume/>
      <Milestone />
      <Intro />
      <Experience />
      <Skills />
      <Certification />
      <Contact />
    </main>
  )
}
