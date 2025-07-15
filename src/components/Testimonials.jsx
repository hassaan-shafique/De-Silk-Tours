import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Qurban Ali",
    rating: 5,
    review: "Had a wonderful experience with De Silk Tours! From beginning to end, the team was very professional and made the entire journey smooth and enjoyable.",
  },
  {
    name: "Abdullah Shahzad",
    rating: 5,
    review: "Excellent service by a highly professional team. The vehicle was clean, comfortable, and exactly as promised. Highly recommended!",
  },
  {
    name: "Markhor 786",
    rating: 5,
    review: "Fairy Meadows trip was truly breathtaking. De Silk Tours made everything hassle-free and memorable!",
  },
  {
    name: "Arslan Anjum",
    rating: 5,
    review: "Had an incredible experience traveling to Fairy Meadows with De Silk Tours. Everything was perfectly arranged and well-managed.",
  },
  {
    name: "Adam Bezar",
    rating: 5,
    review: "Best tour agency I’ve traveled with. Their services and professionalism really stood out!",
  },
  {
    name: "Wolfie 316",
    rating: 5,
    review: "An uplifting and unforgettable experience! The journey through the meadows was magical, thanks to De Silk Tours.",
  },
  {
    name: "Usama Safdar",
    rating: 5,
    review: "Visited Fairy Meadows with De Silk Tours and it was the best experience of my life. Highly professional and smooth planning!",
  },
  {
    name: "Muhammad Uzair",
    rating: 5,
    review: "Amazing experience! Their services were outstanding and highly recommended for anyone wanting to explore the Northern Areas.",
  },
  {
    name: "Hassaan Shafique",
    rating: 5,
    review: "I recently traveled with De Silk Tours and had a fantastic time. Everything from planning to execution was handled perfectly. Highly recommend!",
  }
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
