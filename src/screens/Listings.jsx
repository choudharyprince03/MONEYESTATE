

const properties = [
  {
    id: 1,
    title: "3 BHK Luxury Apartment",
    price: "₹2.45 Cr",
    location: "DLF Phase 2, Gurugram",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "4 BHK Premium Villa",
    price: "₹4.8 Cr",
    location: "Golf Course Road, Gurugram",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227",
  },
  {
    id: 3,
    title: "Commercial Office Space",
    price: "₹1.9 Cr",
    location: "MG Road, Gurugram",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
  {
    id: 4,
    title: "2 BHK Investment Property",
    price: "₹1.35 Cr",
    location: "Sohna Road, Gurugram",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
    {
    id: 5,
    title: "5 BHK Ready to Move",
    price: "₹7.5 Cr",
    location: "Sector-73, Gurugram",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
];

const Listings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900">
            Gurugram Property Listings
          </h1>
          <p className="text-gray-600 mt-4">
            Explore verified residential and commercial properties curated by MoneyEstate.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={`${property.image}?auto=format&fit=crop&w=800&q=80`}
                alt={property.title}
                className="h-56 w-full object-cover"
              />

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {property.title}
                </h2>

                <p className="text-blue-700 font-bold text-lg mt-2">
                  {property.price}
                </p>

                <p className="text-gray-500 mt-1">
                  {property.location}
                </p>

                <span className="inline-block mt-3 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                  {property.type}
                </span>

                <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-xl hover:bg-blue-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Listings;
