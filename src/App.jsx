import Navbar from './components/Navbar'
import UpHeader from './components/UpHeader'
import Home from './components/Home'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import TourPackages from './components/TourPackages'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
function App() {
  return (
    <div>
      <UpHeader />
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <TourPackages/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
