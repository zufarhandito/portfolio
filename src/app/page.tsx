import Hero from './components/Hero'
import About from './components/About'
import LanguageSwitcher from './components/LanguageSwitcher'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'

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

      {/* Experience */}
      <section id='experience'>
        <Experiences />
      </section>

      {/* Projects */}
      <section id='projects'>
        <Projects />
      </section>

      {/* Skills */}
      <section id='skills'>
        <Skills />
      </section>

      {/* Footer */}
      <section id='footer'>
        <Footer />
      </section>
    </div>
  )
}
