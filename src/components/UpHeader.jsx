import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

export default function UpHeader() {
  return (
    <div className="bg-primary text-white text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-1">
            <MdEmail className="text-yellow-400" />
            <span>desilktours@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-yellow-400" />
            <span>Mon-Sat: 9am - 7pm</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1 md:mt-0">
          <BsTelephoneFill className="text-yellow-400" />
          <span>For Bookings & Queries: +92 312 5032502</span>
        </div>
      </div>
    </div>
  );
}
