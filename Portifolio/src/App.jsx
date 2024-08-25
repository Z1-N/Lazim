
import AboutUs from './Components/About'
import Background from './Components/BackGround'
import ContactUs from './Components/Contactus'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'

function App() {
  

  return (
    <>
    <Background/>
      <Navbar  />
      <Hero/>
      <AboutUs className = "py-20"/>
      <Projects className = "py-20"/>
      <Services className = "py-20"/>
      <ContactUs className = "pt-10"/>
      <Footer/>
    </>
  )
}

export default App
