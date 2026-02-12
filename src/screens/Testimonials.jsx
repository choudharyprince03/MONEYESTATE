import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Mehra",
    location: "Sector 47, Gurugram",
    review:
      "MoneyEstate helped us secure a 3BHK in Sector 47 at a great price. The entire process was transparent and professionally handled. Highly recommended.",
  },
  {
    name: "Anjali Verma",
    location: "Sector 45, Gurugram",
    review:
      "Vikas Singh personally guided us through our property investment. His market knowledge and honest advice made all the difference.",
  },
  {
    name: "Sandeep Arora",
    location: "Golf Course Extension Road",
    review:
      "From documentation to final registry, everything was handled smoothly. A trustworthy real estate consultancy in Gurugram.",
  },
  {
    name: "Priya Kapoor",
    location: "Sector 39, Gurugram",
    review:
      "The renovation and furnishing support provided by MoneyEstate increased our rental income significantly. Professional and reliable team.",
  },
  {
    name: "Amit Bansal",
    location: "Sector 45, Gurugram",
    review:
      "Pre-launch booking support was excellent. They explained payment plans clearly and ensured builder credibility before we invested.",
  },
  {
    name: "Neha Sharma",
    location: "Sector 47, Gurugram",
    review:
      "Complete end-to-end support — from site visits to negotiation. MoneyEstate truly understands the Gurugram property market.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== Hero Section ===== */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Client Testimonials
        </h1>
        <p className="mt-6 text-blue-100 max-w-3xl mx-auto">
          Hear from our clients who trusted MoneyEstate for property
          investments and transactions across Gurugram.
        </p>
      </div>

      {/* ===== Testimonials Grid ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                “{testimonial.review}”
              </p>

              <div>
                <h3 className="font-semibold text-blue-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.location}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ===== Call To Action Section ===== */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Invest in Gurugram?
          </h2>
          <p className="text-gray-600 mb-8">
            Connect with MoneyEstate today and receive professional guidance
            for buying, selling, or investing in Sector 45 and Sector 47.
          </p>

          <a
            href="/contact"
            className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;
