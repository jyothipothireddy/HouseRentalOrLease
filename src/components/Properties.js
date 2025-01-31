import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const properties = [
  { id: 1, name: "324 Tara Place, Pune", price: "₹ 50,000", image: "https://a0.muscache.com/im/pictures/a9f1a558-ff62-4ed9-8cd5-fba6012659ed.jpg?im_w=1200&im_format=avif0" },
  { id: 2, name: "405 Lock House, Goa", price: "₹ 45,000", image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1136134460329724046/original/90457934-160f-4ffd-9622-f779bdf13546.jpeg?im_w=1200&im_format=avif" },
  { id: 3, name: "Raman Plaza 554, Goa", price: "₹ 25,000", image: "https://a0.muscache.com/im/pictures/miso/Hosting-809926257127699671/original/dec615d5-489e-421a-afa0-422117ec2f1b.jpeg?im_w=720&im_format=avif" },
  { id: 4, name: "Shanti Niwas 5465, Nashik", price: "₹ 15,000", image: "https://a0.muscache.com/im/pictures/e7ac53e9-a3b5-449e-8f8c-b319c45c00e6.jpg?im_w=1200&im_format=avif" },
  { id: 5, name: "Radha Apartment, 657, Delhi", price: "₹ 55,000", image: "https://a0.muscache.com/im/pictures/miso/Hosting-42366067/original/0973118e-332e-4f01-a6a2-fd91795d2228.jpeg?im_w=1440&im_format=avif" },
  { id: 6, name: "Royal Place, 4546, Goa", price: "₹ 60,000", image: "https://a0.muscache.com/im/pictures/miso/Hosting-48728001/original/ab609fe4-2e90-4fc9-841f-6f4e2eba344b.jpeg?im_w=1200&im_format=avif" },
];

const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Our Amazing Properties</h1>
          <nav>
            <a href="/" className="text-gray-300 hover:text-white mx-2">
              Home
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white mx-2">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search properties by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {property.name}
                  </h2>
                  <p className="text-green-600 font-bold">{property.price}</p>
                  {/* View All Details Button with Link */}
                  <Link 
                    to={`/property/${property.id}`}
                    className="mt-4 text-blue-500 hover:text-blue-700 text-sm"
                  >
                    View All Details &gt;
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No properties found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default PropertyListing;
