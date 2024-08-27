
import AboutUs from './Components/About'
import AboAli from './Components/AboAli'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'
import OurTech from './Components/OurTech';
import Testimonials from './Components/Testimonials'

function App() {
  

  return (
    <div className='relative z-10'>
    <AboAli />
    <div className='relative z-20'>
      <Navbar  />
      <Hero/>
      <AboutUs className = "py-20"/>
      <Services className = "py-20"/>
      <Projects className = "py-20"/>
      <OurTech className = "py-20"/>
      <Testimonials className = "py-20"/>
      <ContactMe className = "pb-20"/>
      <Footer />
    </div>

    </div>
  )
}

export default App
