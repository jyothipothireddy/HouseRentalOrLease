import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TenantApplicationPage = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const [step, setStep] = useState("form"); // "form", "review", "accepted"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const property = {
    // Mock data for demonstration; replace this with actual API call
    id: id,
    title: "Luxury Treehouse Retreat",
    price: "₹16,285 per night",
    location: "Rattota, Sri Lanka",
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setStep("review");
    // Simulate owner review process
    setTimeout(() => {
      setStep("accepted");
    }, 3000); // Simulate a delay for review
  };

  const handlePayment = () => {
    alert(`Payment confirmed for ${property.title}!`);
  };

  return (
    <div className="p-8 bg-gray-100">
      {step === "form" && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tenant Application Form</h2>
          <form onSubmit={handleSubmitForm}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      )}

      {step === "review" && (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Review</h2>
          <p className="text-gray-700">Your application is under review. Please wait...</p>
        </div>
      )}

      {step === "accepted" && (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Accepted</h2>
          <p className="text-gray-700 mb-4">Your application has been accepted! Please proceed with the payment.</p>
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Make Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default TenantApplicationPage;