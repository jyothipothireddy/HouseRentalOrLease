import React, { useState, useEffect } from "react";

const TenantInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  // Simulate fetching inquiries from the server
  useEffect(() => {
    setInquiries([
      { id: 1, tenantName: "John Doe", message: "Interested in the Goa apartment", response: "" },
      { id: 2, tenantName: "Jane Smith", message: "Is the Pune villa still available?", response: "" },
    ]);
  }, []);

  const handleResponseChange = (id, value) => {
    setInquiries((prevInquiries) =>
      prevInquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, response: value } : inquiry
      )
    );
  };

  const handleResponseSubmit = (id) => {
    // Simulate sending the response to the server
    alert("Response submitted for Inquiry ID: " + id);

    // You can make an API call here to save the response to the backend
    console.log("Saved Response:", inquiries.find((inquiry) => inquiry.id === id).response);
  };

  return (
    <div className="min-h-screen bg-orange-200 p-6">
      <h1 className="text-2xl font-bold mb-4">Tenant Inquiries</h1>

      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">Inquiries from Tenants</h2>
        <ul className="space-y-6">
          {inquiries.map((inquiry) => (
            <li key={inquiry.id} className="border-b pb-4">
              {/* Inquiry Details */}
              <p className="text-lg font-semibold">{inquiry.tenantName}</p>
              <p className="text-sm text-gray-600 mb-4">{inquiry.message}</p>

              {/* Owner Response */}
              <textarea
                placeholder="Write your response..."
                value={inquiry.response}
                onChange={(e) => handleResponseChange(inquiry.id, e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              ></textarea>
              <button
                onClick={() => handleResponseSubmit(inquiry.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit Response
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TenantInquiries;
