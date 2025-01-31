import React, { useState } from "react";

const ManageListings = () => {
  const [properties, setProperties] = useState([
    { id: 1, title: "Apartment in Goa", location: "Goa", rent: "₹15,000", mainImage: null, images: [] },
    { id: 2, title: "Villa in Pune", location: "Pune", rent: "₹25,000", mainImage: null, images: [] },
  ]);

  const [newProperty, setNewProperty] = useState({
    title: "",
    location: "",
    rent: "",
    mainImage: null,
    images: [],
  });

  const handleInputChange = (e) => {
    setNewProperty({
      ...newProperty,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (name === "mainImage") {
      setNewProperty({ ...newProperty, mainImage: files[0] });
    } else {
      setNewProperty({ ...newProperty, images: Array.from(files) });
    }
  };

  const handleAddProperty = (e) => {
    e.preventDefault();

    const property = {
      id: properties.length + 1,
      ...newProperty,
    };

    setProperties([...properties, property]);
    setNewProperty({ title: "", location: "", rent: "", mainImage: null, images: [] }); // Clear form fields
  };

  const handleDeleteProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <div className="min-h-screen bg-orange-200 p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Listings</h1>

      {/* Add Property Form */}
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Add New Property</h2>
        <form onSubmit={handleAddProperty}>
          <div className="mb-4">
            <label className="block text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              value={newProperty.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Location</label>
            <input
              type="text"
              name="location"
              value={newProperty.location}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Rent</label>
            <input
              type="text"
              name="rent"
              value={newProperty.rent}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Main Image</label>
            <input
              type="file"
              name="mainImage"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              accept="image/*"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Additional Images (Max: 2)</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              accept="image/*"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Property
          </button>
        </form>
      </div>

      {/* Property List */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your Properties</h2>
        <ul className="space-y-4">
          {properties.map((property) => (
            <li key={property.id} className="border-b pb-4">
              <p className="text-lg font-semibold">{property.title}</p>
              <p className="text-sm text-gray-600">Location: {property.location}</p>
              <p className="text-sm text-gray-600">Rent: {property.rent}</p>
              {property.mainImage && (
                <div className="mt-2">
                  <p className="text-sm font-semibold">Main Image:</p>
                  <img
                    src={URL.createObjectURL(property.mainImage)}
                    alt="Main"
                    className="w-32 h-32 object-cover rounded-md border"
                  />
                </div>
              )}
              {property.images.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-semibold">Additional Images:</p>
                  <div className="flex space-x-4">
                    {property.images.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Additional ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-md border"
                      />
                    ))}
                  </div>
                </div>
              )}
              <button
                onClick={() => handleDeleteProperty(property.id)}
                className="text-red-600 hover:text-red-800 mt-2"
              >
                Delete Property
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageListings;
