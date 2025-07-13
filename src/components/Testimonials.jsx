import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ahsan R.",
    rating: 5,
    review: "Had an amazing trip with De Silk Tours! Everything was perfectly arranged, and the experience was unforgettable.",
  },
  {
    name: "Fatima K.",
    rating: 4,
    review: "Great service and friendly team. Highly recommended for family and honeymoon trips!",
  },
  {
    name: "Ali Z.",
    rating: 5,
    review: "Customized honeymoon tour was beyond our expectations. Thank you for the perfect arrangements!",
  },
  {
    name: "Nida S.",
    rating: 5,
    review: "Skardu tour was well-organized. The hotel and transport were top-notch!",
  },
  {
    name: "Hassan B.",
    rating: 4,
    review: "Great experience! Our guide was helpful and professional throughout the trip.",
  },
  {
    name: "Zainab M.",
    rating: 5,
    review: "Traveled with friends to Fairy Meadows. It was breathtaking, and the service was excellent.",
  },
  {
    name: "Imran A.",
    rating: 5,
    review: "The Neelum Valley trip was amazing. Thank you for the stress-free travel planning!",
  },
  {
    name: "Sadia J.",
    rating: 5,
    review: "Reliable and professional team. I will definitely book my next trip with De Silk Tours.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">What Our Clients Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-3 flex items-center text-yellow-400">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">"{r.review}"</p>
              <div className="text-sm font-semibold text-primary">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
     <div className="text-center mt-10">
  <a
    href="https://www.google.com/search?sca_esv=ee54a96be2d12d25&sxsrf=AE3TifNA4i8knUP4nyCyGk69P2lmonr52w:1752238980146&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1r-O7X_qw_O1NDOTez9tPU7B1UPOM5g98kicoeAodHp0KpdirsqLulCZaLFlU348EqXSqBElXOAoSMmHpDW3zG1XSYk&q=De+Silk+Tour+Reviews&sa=X&ved=2ahUKEwjiouTv7rSOAxX3BdsEHf8ZCzIQ0bkNegQIOBAE&biw=1920&bih=1031&dpr=1"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:opacity-90 transition"
  >
    Add Review
  </a>
</div>


    </section>
  );
};

export default Testimonials;
