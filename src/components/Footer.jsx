import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <h3 className="text-xl font-bold mb-3">De Silk Tours</h3>
          <p className="text-sm text-gray-300">
            Experience the art of travel with De Silk Tours — where your comfort, adventure, and memories come first.
We specialize in personalized tours, luxury getaways, and affordable travel packages across Pakistan and beyond
  24/7 support,
 because you deserve more than just a vacation.
          </p>
        </div>

        {/* Navigation */}
        <div>
  <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
  <ul className="space-y-2 text-sm text-gray-300">
    <li>
      <a href="#home" className="hover:text-accent cursor-pointer">Home</a>
    </li>
    <li>
      <a href="#about" className="hover:text-accent cursor-pointer">About</a>
    </li>
    <li>
      <a href="#services" className="hover:text-accent cursor-pointer">Services</a>
    </li>
    <li>
      <a href="#tours" className="hover:text-accent cursor-pointer">Tours</a>
    </li>
    <li>
      <a href="#contact" className="hover:text-accent cursor-pointer">Contact</a>
    </li>
    {/* <li>
      <a href="#gallery" className="hover:text-accent cursor-pointer">Gallery</a>
    </li> */}
    <li>
      <a href="#testimonials" className="hover:text-accent cursor-pointer">Testimonials</a>
    </li>
  </ul>
</div>


        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-300">Email: desilktours@gmail.com</p>
          <p className="text-sm text-gray-300">Phone: +92 3125032502</p>
          <p className="text-sm text-gray-300">24/7 Support</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-accent text-xl">
  <a
    href="https://www.facebook.com/DesilktourPakistan"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF className="hover:text-white cursor-pointer" />
  </a>

  <a
    href="https://www.instagram.com/desilktours/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="hover:text-white cursor-pointer" />
  </a>

 <a
  href="https://wa.me/923125032502?text=Hello%20De%20Silk%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20a%20tour."
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="hover:text-white cursor-pointer" />
</a>

</div>

        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-6">
        &copy; {new Date().getFullYear()} De Silk Tours Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
