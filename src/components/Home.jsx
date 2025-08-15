'use client';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const imageList = [
  '/home1.jpg',
  '/home3.jpg',
  '/home4.jpg',
];

// Arrows
const ArrowLeft = (props) => (
  <div
    {...props}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full cursor-pointer"
  >
    <FaArrowLeft size={20} />
  </div>
);

const ArrowRight = (props) => (
  <div
    {...props}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full cursor-pointer"
  >
    <FaArrowRight size={20} />
  </div>
);

const Home = () => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [src]: true }));
      };
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Slider {...settings}>
        {imageList.map((src, i) => (
          <div key={i} className="w-full h-[90vh] bg-black">
            {loadedImages[src] ? (
              <img
                src={src}
                alt={`Slide ${i}`}
                className="w-full h-[90vh] object-cover"
              />
            ) : (
              <div className="w-full h-[90vh] flex items-center justify-center text-white">
                Loading...
              </div>
            )}
          </div>
        ))}
      </Slider>

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
