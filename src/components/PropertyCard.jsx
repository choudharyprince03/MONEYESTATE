import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`, { state: { property } });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
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

        <button
          onClick={handleViewDetails}
          className="mt-6 w-full bg-blue-900 text-white py-2 rounded-xl hover:bg-blue-800 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
