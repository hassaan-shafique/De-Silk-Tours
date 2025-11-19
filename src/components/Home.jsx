'use client';
import React from 'react';

const Home = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/image2.jpeg"
        alt="Home"
        className="w-full h-[90vh] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Text content */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 max-w-2xl">
        <p className="text-yellow-300 text-lg font-medium mb-2">
          Trusted Travel Partner in Pakistan
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Pakistan with De Silk Tours
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the beauty of Pakistan with our custom tours, luxury stays,
          and premium travel experiences.
        </p>
        <a
          href="#contact"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full"
        >
          Plan Your Trip
        </a>
      </div>
    </section>
  );
};

export default Home;
