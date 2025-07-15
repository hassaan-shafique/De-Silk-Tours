import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
     <div className="flex items-center">
  <a href="#home">
    <img src="/logo.png" alt="De Silk Tours" className="h-20 w-auto" />
  </a>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
  <li><a href="#home" className="hover:text-primary">Home</a></li>
  <li><a href="#about" className="hover:text-primary">About</a></li>
  <li><a href="#services" className="hover:text-primary">Services</a></li>
  <li><a href="#tours" className="hover:text-primary">Tours</a></li>
  {/* <li><a href="#gallery" className="hover:text-primary">Gallery</a></li> */}
  <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
  <li><a href="#contact" className="hover:text-primary">Contact</a></li>

          <a href ="#contact" className="ml-4 px-4 py-2 bg-accent text-primary rounded-full font-semibold hover:opacity-90">
            Book Now
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-primary text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* Mobile Dropdown Menu */}
{menuOpen && (
  <div className="md:hidden bg-white px-4 pb-4">
    <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
      <li><a href="#home" className="hover:text-primary">Home</a></li>
      <li><a href="#about" className="hover:text-primary">About</a></li>
      <li><a href="#services" className="hover:text-primary">Services</a></li>
      <li><a href="#tours" className="hover:text-primary">Tours</a></li>
      {/* <li><a href="#gallery" className="hover:text-primary">Gallery</a></li> */}
      <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
      <li><a href="#contact" className="hover:text-primary">Contact</a></li>
      <li>
        <a
          href="#contact"
          className="inline-block w-full text-center px-4 py-2 mt-2 bg-accent text-primary rounded-full font-semibold hover:opacity-90"
        >
          Book Now
        </a>
      </li>
    </ul>
  </div>
)}
    </nav>
  );
}
