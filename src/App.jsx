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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <UpHeader />
      <Navbar/>
      <Home/>
      <AboutUs/>
      <TourPackages/>
      <Services/>
      
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
