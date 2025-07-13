import {
  FaRoute,
  FaBriefcase,
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaBed,
  FaPlaneDeparture,
  FaCar,
} from "react-icons/fa";

const services = [
  { icon: <FaRoute className="text-accent text-3xl" />, title: "Custom Tours" },
  { icon: <FaBriefcase className="text-accent text-3xl" />, title: "Corporate Tours" },
  { icon: <FaUsers className="text-accent text-3xl" />, title: "Group Tours" },
  { icon: <FaHeart className="text-accent text-3xl" />, title: "Honeymoon Tours" },
  { icon: <FaGraduationCap className="text-accent text-3xl" />, title: "School/College Tours" },
  { icon: <FaBed className="text-accent text-3xl" />, title: "Hotel Reservation" },
  { icon: <FaPlaneDeparture className="text-accent text-3xl" />, title: "Flight Booking" },
  { icon: <FaCar className="text-accent text-3xl" />, title: "Rental Transport" },
];


export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-center"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At De Silk Tours, we offer complete travel solutions — whether you're planning a romantic escape, group retreat, or a business trip, we take care of every detail with premium service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border-t-4 border-accent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
