import Nav from './components/Nav.jsx'
import AboutMe from './components/AboutMe.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Certificates from './components/Certificates.jsx'
import Activities from './components/Activities.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Nav />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Activities />
      <ContactMe />
      <Footer />
    </div>
  )
}