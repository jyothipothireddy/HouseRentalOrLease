import React, { useState } from "react";

const SupportPage = () => {
  const [complaint, setComplaint] = useState("");
  const [complaints, setComplaints] = useState([
    { id: 1, issue: "Leaking roof", status: "Resolved" },
    { id: 2, issue: "Broken AC", status: "Pending" },
  ]);

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmitComplaint = (e) => {
    e.preventDefault();
    const newComplaint = {
      id: complaints.length + 1,
      issue: complaint,
      status: "Pending",
    };
    setComplaints([...complaints, newComplaint]);
    setComplaint(""); // Clear the input field after submission
  };

  return (
    <div className="min-h-screen bg-orange-200 p-6">
      <h1 className="text-2xl font-bold mb-4">Support</h1>

      {/* Complaint Form */}
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Submit a Complaint</h2>
        <form onSubmit={handleSubmitComplaint}>
          <textarea
            value={complaint}
            onChange={handleComplaintChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            rows="4"
            placeholder="Describe your issue..."
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Complaint
          </button>
        </form>
      </div>

      {/* Complaints List */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your Complaints</h2>
        <ul className="space-y-4">
          {complaints.map((complaint) => (
            <li key={complaint.id} className="border-b pb-4">
              <p className="text-lg font-semibold">{complaint.issue}</p>
              <p className="text-sm text-gray-600">Status: {complaint.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupportPage;
