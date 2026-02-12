import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== Hero Section ===== */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
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
          Contact & Support
        </h1>
        <p className="relative mt-6 text-blue-100 max-w-2xl mx-auto">
          We’re here to assist you with property inquiries, consultations,
          and investment guidance across Gurugram.
        </p>
      </div>

      {/* ===== Main Section ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">

        {/* ===== Contact Form ===== */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-8">
            Get in Touch
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about the property you're interested in..."
                className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition font-medium"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* ===== Professional Contact Information (Single Card) ===== */}
        <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col justify-center">

          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            MoneyEstate Consultancy
          </h2>

          <div className="space-y-5 text-gray-700">

            <div>
              <p className="font-medium text-gray-900">Director</p>
              <p>Vikas Singh</p>
            </div>

            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <a
                href="tel:9910003577"
                className="text-blue-800"
              >
                +91 9910003577
              </a>
            </div>

            <div>
              <p className="font-medium text-gray-900">Email</p>
              <a
                href="mailto:moneyestate.singh@gmail.com"
                className="text-blue-800"
              >
                moneyestate.singh@gmail.com
              </a>
            </div>

            <div>
              <p className="font-medium text-gray-900">Office Location</p>
              <p>441, Sector 39 Rd, Near Medanta Hospital, Near Bakhtawar Chowk, Sector 39, Gurugram, Haryana 122003</p>
            </div>

            <div>
              <p className="font-medium text-gray-900">Business Hours</p>
              <p>Monday – Saturday | 9:00 AM – 7:00 PM</p>
            </div>

          </div>

        </div>

      </div>

      {/* ===== Full Width Map Section ===== */}
      <div className="px-6 pb-16">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
            title="MoneyEstate Location"
            src="https://www.google.com/maps?q=441,+Sector+39+Rd,+Near+Medanta+Hospital,+Near+Bakhtawar+Chowk,+Sector+39,+Gurugram,+Haryana+122003&output=embed"
            width="100%"
            height="400"
            className="border-0 w-full"
            loading="lazy"
            ></iframe>


        </div>
      </div>

      {/* ===== WhatsApp Floating Button ===== */}
      <a
        href="https://wa.me/919910003577"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 48 48"
        >
        <path
            fill="#fff"
            d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
        />
        <path
            fill="#40c351"
            d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
        />
        <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
        />
        </svg>

      </a>

    </div>
  );
};

export default Contact;
