import React, { useState, useEffect } from "react";

const OwnerNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Simulate fetching notifications
  useEffect(() => {
    setNotifications([
      "A new tenant has shown interest in your Goa apartment.",
      "Your property listing in Pune has been approved.",
      "Reminder: Your lease agreement expires in 30 days.",
      "You have an upcoming property inspection scheduled for 2025-02-15.",
      "A tenant has reported an issue with the plumbing in your property in Mumbai.",
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-orange-200 p-6">
      <h1 className="text-2xl font-bold mb-4">Owner Notifications</h1>

      {/* Notifications List */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="p-4 border-b last:border-0 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition"
            >
              {notification}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OwnerNotifications;
