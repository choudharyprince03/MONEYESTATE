import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Home, DollarSign, X } from "lucide-react";
import properties from "../constants/properties.json";

const SingleProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Get property from properties array by ID
  const property = properties.find((prop) => prop.id === parseInt(id));

  const handleNextImage = () => {
    if (!property) return;
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    if (!property) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const openLightboxAt = (index) => {
    if (!property) return;
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate("/listings")}
            className="mb-6 flex items-center text-blue-900 hover:text-blue-700 font-semibold"
          >
            <ChevronLeft size={20} />
            Back to Listings
          </button>
          <p className="text-center text-gray-600">Property not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/listings")}
          className="mb-6 flex items-center text-blue-900 hover:text-blue-700 font-semibold transition"
        >
          <ChevronLeft size={20} />
          Back to Listings
        </button>

        {/* Property Header */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {property.title}
          </h1>
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2">
              <DollarSign className="text-blue-900" size={24} />
              <div>
                <p className="text-gray-500 text-sm">Price</p>
                <p className="text-2xl font-bold text-blue-700">
                  {property.price}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-900" size={24} />
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-lg font-semibold text-gray-800">
                  {property.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Home className="text-blue-900" size={24} />
              <div>
                <p className="text-gray-500 text-sm">Type</p>
                <p className="text-lg font-semibold text-gray-800">
                  {property.type}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Main Image */}
            <div className="relative h-96 sm:h-[500px] bg-gray-200">
              <img
                onClick={() => openLightboxAt(currentImageIndex)}
                src={`${property.images[currentImageIndex]}?auto=format&fit=crop&w=1200&q=80`}
                alt={`Property view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover cursor-zoom-in"
              />

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 p-4 bg-gray-100 overflow-x-auto">
              {property.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => openLightboxAt(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition border-2 ${
                    index === currentImageIndex
                      ? "border-blue-900"
                      : "border-transparent"
                  }`}
                >
                  <img src={`${img}?auto=format&fit=crop&w=100&q=80`} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-[95%] max-h-[95%]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-full z-50"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <button
                onClick={() => { handlePrevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-40"
                aria-label="Previous"
              >
                <ChevronLeft size={28} />
              </button>

              <img
                src={`${property.images[currentImageIndex]}?auto=format&fit=crop&w=2000&q=90`}
                alt={`Preview ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded"
              />

              <button
                onClick={() => { handleNextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-40"
                aria-label="Next"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        )}

        {/* Video Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Property Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {property.videos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative pt-[56.25%] bg-gray-200">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Property Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-900 text-white rounded-2xl shadow-md p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in this property?</h2>
          <p className="mb-6">Get in touch with our team for more information or to schedule a viewing.</p>
          <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
