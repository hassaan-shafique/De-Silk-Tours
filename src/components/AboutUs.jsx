export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white text-gray-800 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/image2.jpeg"
            alt="About De Silk Tours"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">About De Silk Tours</h2>
<p className="text-gray-700 mb-4">
  Established in 2019, <strong>De Silk Tours Pvt Ltd</strong> is a leading travel management company in Pakistan, offering exceptional travel experiences tailored to your dreams. From honeymoon escapes to family adventures, and corporate getaways to custom group tours — we’ve designed and delivered hundreds of unforgettable journeys.
</p>
<p className="text-gray-700 mb-4">
  Our expertise lies in crafting personalized itineraries, ensuring luxury accommodation, comfortable transportation, and 24/7 support — all with a commitment to safety and satisfaction. Whether you're looking to explore the scenic beauty of Pakistan or venture abroad, our dedicated team ensures every trip is smooth, memorable, and stress-free.
</p>
<p className="text-gray-700 font-medium">
  At De Silk Tours, travel is more than just destinations — it’s the experiences we create for you.
</p>
        </div>
      </div>
    </section>
  );
}
