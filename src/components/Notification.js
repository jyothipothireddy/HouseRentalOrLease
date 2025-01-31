import React, { useState, useEffect } from "react";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  // Simulate fetching notifications from the server
  useEffect(() => {
    setNotifications([
      "Your rent is due on 2025-02-01.",
      "Lease agreement expires in 30 days.",
      "New property matching your preferences is available!",
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-orange-200 p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((notification, index) => (
            <li key={index} className="border-b pb-4 text-gray-600">
              {notification}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationsPage;
