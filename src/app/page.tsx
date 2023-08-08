import Hero from './components/Hero'
import About from './components/About'
import LanguageSwitcher from './components/LanguageSwitcher'
import { Form } from './components/Form'
import Skills from './components/Skills'
import Experiences from './components/Experiences'

export default function Home() {
  return (
    <div className='bg-slate-800 text-slate-200'>
      {/* <LanguageSwitcher /> */}

      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>

      {/* About */}
      <section id='about'>
        <About />
      </section>

      <section id='experience'>
        <Experiences />
      </section>

      <section id='skills'>
        <Skills />
      </section>
    </div>
  )
}
