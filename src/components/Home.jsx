import React from "react";
import { FaMapMarkedAlt, FaHotel, FaHeadset } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[90vh] text-white"
        style={{ backgroundImage: "url('/homee.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-yellow-300 text-base md:text-lg uppercase tracking-wide font-medium">
            Trusted Travel Partner in Pakistan
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Explore Pakistan with De Silk Tours
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the beauty of Pakistan with our expertly crafted custom tours, luxury hotel stays, and premium travel experiences — tailored just for you.
          </p>
          <a
            href="#contact"
            className="mt-6 px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            Plan Your Trip
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center max-w-5xl mx-auto px-4">
        <div>
          <FaMapMarkedAlt className="text-3xl text-accent mx-auto mb-2" />
          <h4 className="text-lg font-semibold">Custom Tour Plans</h4>
          <p className="text-sm text-gray-600">
            Tailored experiences for individuals and groups
          </p>
        </div>
        <div>
          <FaHotel className="text-3xl text-accent mx-auto mb-2" />
          <h4 className="text-lg font-semibold">Luxury Stays</h4>
          <p className="text-sm text-gray-600">
            Partnered with premium hotels across destinations
          </p>
        </div>
        <div>
          <FaHeadset className="text-3xl text-accent mx-auto mb-2" />
          <h4 className="text-lg font-semibold">24/7 Support</h4>
          <p className="text-sm text-gray-600">
            Customer support throughout your journey
          </p>
        </div>
      </div>

      {/* Call to Action Strip */}
      <div className="bg-accent text-primary py-8 px-4 text-center mt-16">
        <h3 className="text-xl font-bold">
          Ready for your next adventure?
        </h3>
        <a
          href="#contact"
          className="mt-3 inline-block bg-white text-accent font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}
