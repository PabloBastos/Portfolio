import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import { Education } from './components/Timeline'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import { profile } from './data'

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="footer-center">Code • Rock • Coffee</p>
          <a href="#inicio">Voltar ao topo</a>
        </div>
      </footer>
    </>
  )
}
