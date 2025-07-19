import { MdEmail } from "react-icons/md";
import { FaClock, FaFacebookF, FaInstagram, FaWhatsapp ,FaPhoneAlt,FaYoutube,
  FaEnvelope} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

export default function UpHeader() {
  return (
    <div className="bg-primary text-white text-sm px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-1">
            <MdEmail className="text-yellow-400" />
            <span>desilktours@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-yellow-400" />
            <span>24/7 Support</span>
          </div>
        </div>

        <div className="flex  gap-3 mt-1 md:mt-0">
          <BsTelephoneFill className="text-yellow-400" />
          <span>For Bookings & Queries: +92 312 5032502</span>
        </div>

        <div className="flex flex-col items-center md:items-end mt-2 md:mt-0">
          
          <div className="flex gap-7 text-yellow-400 text-2xl">
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
             {/* Phone */}
  <a href="tel:+923125032502">
    <FaPhoneAlt className="hover:text-white cursor-pointer" />
  </a>

  {/* Email */}
  <a href="mailto:desilktours@gmail.com">
    <FaEnvelope className="hover:text-white cursor-pointer" />
  </a>
  <a href="https://www.youtube.com/@desilktours2019" target="_blank" rel="noopener noreferrer">
  <FaYoutube className="hover:text-white cursor-pointer" />
</a>
          </div>
        </div>
      </div>
    </div>
  );
}
