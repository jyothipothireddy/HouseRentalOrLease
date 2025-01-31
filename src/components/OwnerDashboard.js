import React, { useState } from "react";
import { Link } from "react-router-dom";

const OwnerDashboard = () => {
  const [tenantInquiries, setTenantInquiries] = useState([
    { id: 1, tenantName: "John Doe", propertyName: "324 Tara Place, Pune", status: "Pending" },
    { id: 2, tenantName: "Jane Smith", propertyName: "405 Lock House, Goa", status: "Pending" },
    { id: 3, tenantName: "Alice Johnson", propertyName: "Radha Apartment, 657, Delhi", status: "Pending" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState(null); // For modal

  const handleAccept = (id) => {
    setTenantInquiries((prevInquiries) =>
      prevInquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status: "Accepted" } : inquiry
      )
    );
  };

  const handleReject = (id) => {
    setTenantInquiries((prevInquiries) =>
      prevInquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status: "Rejected" } : inquiry
      )
    );
  };

  const filteredInquiries = tenantInquiries.filter((inquiry) =>
    inquiry.tenantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white">
        <div className="p-4 text-lg font-bold text-center border-b border-gray-600">
          Owner Dashboard
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/manage-listing">Manage Listings</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/tenant-inquiries">View Tenant Inquiries</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/owner-profile">Profile</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/notifications">Notifications</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-orange-200 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Owner Dashboard</h1>
        <p className="text-gray-700 mb-6">Manage your properties and view tenant inquiries from here.</p>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by tenant name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tenant Inquiries Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Tenant Inquiries</h2>
          <div className="space-y-4">
            {filteredInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="p-4 bg-white shadow-md rounded-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{inquiry.tenantName}</h3>
                  <p className="text-gray-600">Property: {inquiry.propertyName}</p>
                  <p
                    className={`text-sm mt-2 ${
                      inquiry.status === "Accepted"
                        ? "text-green-600"
                        : inquiry.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    Status: {inquiry.status}
                  </p>
                </div>

                <div className="space-x-4">
                  {inquiry.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleAccept(inquiry.id)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(inquiry.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setSelectedInquiry(inquiry)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Details Modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-lg w-1/2">
              <h2 className="text-lg font-bold mb-4">Tenant Inquiry Details</h2>
              <p>
                <strong>Tenant Name:</strong> {selectedInquiry.tenantName}
              </p>
              <p>
                <strong>Property Name:</strong> {selectedInquiry.propertyName}
              </p>
              <p>
                <strong>Status:</strong> {selectedInquiry.status}
              </p>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default OwnerDashboard;
