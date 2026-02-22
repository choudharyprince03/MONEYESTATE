import PropertyCard from "../components/PropertyCard";
import properties from "../constants/properties.json";

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
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
