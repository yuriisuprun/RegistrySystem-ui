import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
