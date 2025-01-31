import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Sample property data
const properties = [
  {
    id: 1,
    name: "324 Tara Place, Pune",
    price: "₹ 50,000",
    image: "https://a0.muscache.com/im/pictures/a9f1a558-ff62-4ed9-8cd5-fba6012659ed.jpg?im_w=1200&im_format=avif0",
    description: "This spacious apartment is located in the heart of Pune with easy access to shopping and dining areas.",
    amenities: ["Pool", "Gym", "Parking", "Balcony"],
  },
  {
    id: 2,
    name: "405 Lock House, Goa",
    price: "₹ 45,000",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1136134460329724046/original/90457934-160f-4ffd-9622-f779bdf13546.jpeg?im_w=1200&im_format=avif",
    description: "Experience luxury living with breathtaking views of the beach in Goa.",
    amenities: ["Beach Access", "Rooftop Bar", "Wi-Fi", "Air Conditioning"],
  },
  {
    id: 3,
    name: "Raman Plaza 554, Goa",
    price: "₹ 25,000",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-809926257127699671/original/dec615d5-489e-421a-afa0-422117ec2f1b.jpeg?im_w=720&im_format=avif",
    description: "Affordable and cozy apartment in Goa, perfect for short stays.",
    amenities: ["Parking", "Wi-Fi", "Balcony", "Pet-Friendly"],
  },
  {
    id: 4,
    name: "Shanti Niwas 5465, Nashik",
    price: "₹ 15,000",
    image: "https://a0.muscache.com/im/pictures/e7ac53e9-a3b5-449e-8f8c-b319c45c00e6.jpg?im_w=1200&im_format=avif",
    description: "Serene and peaceful stay in Nashik, surrounded by nature and vineyards.",
    amenities: ["Garden", "Parking", "Pet-Friendly", "Wi-Fi"],
  },
  {
    id: 5,
    name: "Radha Apartment, 657, Delhi",
    price: "₹ 55,000",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-42366067/original/0973118e-332e-4f01-a6a2-fd91795d2228.jpeg?im_w=1440&im_format=avif",
    description: "Modern and luxurious apartment in Delhi, with all the amenities you need.",
    amenities: ["Gym", "24/7 Security", "Parking", "Rooftop Pool"],
  },
  {
    id: 6,
    name: "Royal Place, 4546, Goa",
    price: "₹ 60,000",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-48728001/original/ab609fe4-2e90-4fc9-841f-6f4e2eba344b.jpeg?im_w=1200&im_format=avif",
    description: "A royal experience awaits you in Goa, perfect for luxurious getaways.",
    amenities: ["Private Pool", "Butler Service", "Beach Access", "Wi-Fi"],
  },
];

// Component
const PropertyDetails = () => {
  const { id } = useParams(); // Get the dynamic 'id' from the URL
  const [appliedProperties, setAppliedProperties] = useState([]); // State to track applied properties
  const property = properties.find((property) => property.id === parseInt(id)); // Find the property by ID

  if (!property) {
    return <p className="text-center text-red-600 font-bold">Property not found.</p>;
  }

  const handleApply = () => {
    if (appliedProperties.includes(property.id)) {
      alert("You have already applied for this property.");
    } else {
      setAppliedProperties([...appliedProperties, property.id]);
      alert("Application submitted successfully!");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{property.name}</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Property Image */}
        <div className="w-full h-64">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Property Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Price: {property.price}</h2>
          <p className="text-gray-600 mt-4">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Amenities</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="mt-6">
          <button
            onClick={handleApply}
            className={`px-4 py-2 font-bold rounded-lg ${
              appliedProperties.includes(property.id) ? "bg-gray-400" : "bg-blue-600"
            } text-white hover:bg-blue-800 focus:outline-none`}
            disabled={appliedProperties.includes(property.id)} // Disable if already applied
          >
            {appliedProperties.includes(property.id) ? "Application Submitted" : "Apply for this Property"}
          </button>
        </div>

        {/* Review Status */}
        {appliedProperties.includes(property.id) && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
            <p>Your application is under review. We will get back to you soon!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PropertyDetails;
