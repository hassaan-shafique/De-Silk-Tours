import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <h3 className="text-xl font-bold mb-3">De Silk Tours</h3>
          <p className="text-sm text-gray-300">
            Experience world-class travel services with personalized care, best rates, and memorable journeys.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-accent cursor-pointer">Home</li>
            <li className="hover:text-accent cursor-pointer">About</li>
            <li className="hover:text-accent cursor-pointer">Services</li>
            <li className="hover:text-accent cursor-pointer">Tours</li>
            <li className="hover:text-accent cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-300">Email: info@desilktours.com</p>
          <p className="text-sm text-gray-300">Phone: +92 300 1234567</p>
          <p className="text-sm text-gray-300">Mon-Sat: 9:00am - 7:00pm</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-accent text-xl">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaWhatsapp className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-6">
        &copy; {new Date().getFullYear()} De Silk Tours Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
