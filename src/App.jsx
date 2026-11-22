import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Services from './components/sections/Services.jsx'
import Projects from './components/sections/Projects.jsx'
import Journey from './components/sections/Journey.jsx'
import Cta from './components/sections/Cta.jsx'

// Section order follows the design: Hero → About → Skills & Services → Projects → Experience → CTA → Footer
export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2.5 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Journey />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
