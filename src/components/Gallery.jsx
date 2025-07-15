import React from "react";

const Gallery = () => {
  const gallerySections = [
    {
      title: "Hunza & Skardu",
      images: [
        "/Hunza.jpg",
         "/neelum.jpg",
        "/neelum.jpg",
      ],
    },
    {
      title: "Hunza",
      images: [
        "/neelum.jpg",
        "/neelum.jpg",
       "/neelum.jpg",
      ],
    },
    {
      title: "Naran",
      images: [
       "/neelum.jpg",
        "/neelum.jpg",
        "/neelum.jpg",
      ],
    },
  ];

  return (
    <section id="gallery" className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Gallery</h2>

        {gallerySections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Section Heading */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{section.title}</h3>

            {/* Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
                >
                  <img
                    src={img}
                    alt={`${section.title} ${i + 1}`}
                    className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
