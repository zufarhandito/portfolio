import Hero from './components/Hero'
import About from './components/About'
// import LanguageSwitcher from './components/LanguageSwitcher'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='overflow-x-hidden bg-slate-800 text-slate-200 flex flex-col items-center'>
      {/* <LanguageSwitcher /> */}

        {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>

      <article className=' max-w-5xl flex flex-col'>

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

      </article>
      {/* Footer */}
      <section id='footer'>
        <Footer />
      </section>
    </div>
  )
}
