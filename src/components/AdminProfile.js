import React, { useState } from "react";

// Sample property data (you can keep this as it is or modify accordingly)
const properties = [
  {
    id: 1,
    name: "324 Tara Place, Pune",
    price: "₹ 50,000",
    image: "https://a0.muscache.com/im/pictures/a9f1a558-ff62-4ed9-8cd5-fba6012659ed.jpg?im_w=1200&im_format=avif0",
    description: "This spacious apartment is located in the heart of Pune with easy access to shopping and dining areas.",
    amenities: ["Pool", "Gym", "Parking", "Balcony"],
  },
  // Add other properties as needed
];

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    notifications: {
      email: true,
      sms: false,
      inApp: true,
    },
    profilePicture: null,
  });

  const [appliedProperties, setAppliedProperties] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      notifications: {
        ...prevData.notifications,
        [name]: checked,
      },
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData({ ...profileData, profilePicture: URL.createObjectURL(file) });
    }
  };

  const handleApplyForProperty = (propertyId) => {
    if (appliedProperties.includes(propertyId)) {
      alert("You have already applied for this property.");
    } else {
      setAppliedProperties([...appliedProperties, propertyId]);
      alert("Application submitted successfully!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
      <form onSubmit={handleSubmit}>
        {/* Profile Picture Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Profile Picture</label>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
              {profileData.profilePicture ? (
                <img
                  src={profileData.profilePicture}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="flex items-center justify-center h-full text-gray-500">
                  No Image
                </span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="text-sm"
            />
          </div>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded p-2"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded p-2"
            value={profileData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            className="w-full border border-gray-300 rounded p-2"
            value={profileData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Notification Preferences */}
        

        {/* Save Changes */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>

      {/* Applied Properties */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Available Properties</h2>
        {properties.map((property) => (
          <div key={property.id} className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover rounded-lg mt-4"
            />
            <p className="mt-2">{property.description}</p>
            <p className="font-bold mt-2">{property.price}</p>
            <button
              onClick={() => handleApplyForProperty(property.id)}
              className={`px-4 py-2 font-bold rounded-lg mt-4 ${
                appliedProperties.includes(property.id)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-800"
              } text-white`}
              disabled={appliedProperties.includes(property.id)}
            >
              {appliedProperties.includes(property.id)
                ? "Application Submitted"
                : "Apply for this Property"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
