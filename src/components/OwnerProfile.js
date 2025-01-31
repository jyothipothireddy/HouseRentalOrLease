import React, { useState, useEffect } from "react";

const OwnerProfile = () => {
  // State to store the owner profile details
  const [ownerProfile, setOwnerProfile] = useState({
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "9876543210",
    address: "123 Property Lane, Mumbai",
  });

  // State to manage the form input for editing profile
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...ownerProfile });

  // Simulate fetching profile data on component mount
  useEffect(() => {
    // Here, you would fetch the data from an API or state management
    setOwnerProfile({
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "9876543210",
      address: "123 Property Lane, Mumbai",
    });
    setEditedProfile({
      ...ownerProfile,
    });
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission (save profile data)
  const handleSubmit = (e) => {
    e.preventDefault();
    setOwnerProfile({ ...editedProfile });
    setIsEditing(false);
    // Here, you would send the updated data to the backend to save changes
  };

  return (
    <div className="min-h-screen bg-orange-200 p-6">
      <h1 className="text-2xl font-bold mb-6">Owner Profile</h1>

      {/* Profile Information */}
      <div className="bg-white shadow rounded-lg p-6">
        {!isEditing ? (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Name: {ownerProfile.name}</h2>
              <p className="text-gray-700">Email: {ownerProfile.email}</p>
              <p className="text-gray-700">Phone: {ownerProfile.phone}</p>
              <p className="text-gray-700">Address: {ownerProfile.address}</p>
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={editedProfile.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={editedProfile.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={editedProfile.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={editedProfile.address}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default OwnerProfile;
