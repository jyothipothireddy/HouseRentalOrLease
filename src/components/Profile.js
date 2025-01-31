import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
  };

  return (
    <div className="p-6 min-h-screen bg-[#9ef4ee] flex items-center justify-center">
      <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
        <form onSubmit={handleSubmit}>
          {/* Profile Picture Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Profile Picture</label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-[rgb(201,229,229)] overflow-hidden">
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
