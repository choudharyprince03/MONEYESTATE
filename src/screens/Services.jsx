import React from "react";
import {
  Home,
  Building,
  Briefcase,
  TrendingUp,
  FileText,
  Key,
  Paintbrush,
  Sofa
} from "lucide-react";

const services = [
  {
    icon: <Home size={28} />,
    title: "Residential Sale & Purchase",
    description:
      "Complete assistance for buying and selling residential properties in Sector 45 and Sector 47, Gurugram including site visits, negotiation, and closing support.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Property Consultancy",
    description:
      "Strategic real estate advisory based on market trends, appreciation potential, and sector-specific investment insights.",
  },
  {
    icon: <Building size={28} />,
    title: "Pre-Launch & New Project Booking",
    description:
      "Early access booking support for premium and affordable projects with builder verification and pricing guidance.",
  },
  {
    icon: <Paintbrush size={28} />,
    title: "Renovation Services",
    description:
      "End-to-end renovation coordination to enhance property value, rental yield, and resale appeal.",
  },
  {
    icon: <Sofa size={28} />,
    title: "Furnishing & Interior Styling",
    description:
      "Complete furnishing solutions including modular kitchens, wardrobes, furniture setup, and investment-focused styling for rental properties.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Investment Planning & ROI Analysis",
    description:
      "Data-driven property investment strategies focused on capital growth and long-term rental income.",
  },
  {
    icon: <Key size={28} />,
    title: "Rental & Leasing Services",
    description:
      "Tenant sourcing, agreement drafting, and property leasing support for residential units in Gurugram.",
  },
  {
    icon: <FileText size={28} />,
    title: "Documentation & Legal Assistance",
    description:
      "Support with registry, agreements, property verification, and secure transaction coordination.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== Hero Section ===== */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 text-center overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>

        <h1 className="relative text-4xl md:text-5xl font-bold">
          Our Real Estate Services
        </h1>
        <p className="relative mt-6 text-blue-100 max-w-3xl mx-auto">
          Professional property solutions across Sector 45 and Sector 47,
          Gurugram — from buying and investment planning to renovation
          and complete furnishing support.
        </p>
      </div>

      {/* ===== Services Grid ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-blue-900 mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* ===== Why Choose Us ===== */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Why Choose MoneyEstate?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            With deep expertise in Gurugram’s prime sectors, transparent
            advisory services, and a strong local network, MoneyEstate
            ensures secure transactions and profitable property decisions.
            Our focus is not just closing deals — but building long-term
            client relationships.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
