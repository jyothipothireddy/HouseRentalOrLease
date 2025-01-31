import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample data for tenants, owners, and payments
const tenants = [
  { id: 1, name: "John Doe", property: "324 Tara Place, Pune", status: "Active" },
  { id: 2, name: "Jane Smith", property: "405 Lock House, Goa", status: "Inactive" },
  { id: 3, name: "Alice Johnson", property: "Radha Apartment, 657, Delhi", status: "Active" },
];

const owners = [
  { id: 1, name: "Ravi Kumar", listings: 3 },
  { id: 2, name: "Priya Shah", listings: 2 },
  { id: 3, name: "Manoj Yadav", listings: 1 },
];

const payments = [
  { id: 1, tenant: "John Doe", amount: "₹ 50,000", status: "Paid" },
  { id: 2, tenant: "Jane Smith", amount: "₹ 45,000", status: "Pending" },
  { id: 3, tenant: "Alice Johnson", amount: "₹ 25,000", status: "Paid" },
];

const AdminDashboard = () => {
  const [tenantData, setTenantData] = useState(tenants);
  const [ownerData, setOwnerData] = useState(owners);
  const [paymentData, setPaymentData] = useState(payments);

  const handleTenantStatusChange = (id, newStatus) => {
    setTenantData((prevData) =>
      prevData.map((tenant) =>
        tenant.id === id ? { ...tenant, status: newStatus } : tenant
      )
    );
  };

  const handlePaymentStatusChange = (id, newStatus) => {
    setPaymentData((prevData) =>
      prevData.map((payment) =>
        payment.id === id ? { ...payment, status: newStatus } : payment
      )
    );
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white">
        <div className="p-4 text-lg font-bold text-center border-b border-gray-600">
          Admin Dashboard
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/manage-tenants">Manage Tenants</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/manage-owners">Manage Owners</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/manage-payments">Manage Payments</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/admin-profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-orange-200 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
        <p className="text-gray-700 mb-6">
          Manage tenants, owners, and payments from here.
        </p>

        {/* Manage Tenants */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Manage Tenants</h2>
          <div className="space-y-4">
            {tenantData.map((tenant) => (
              <div
                key={tenant.id}
                className="p-4 bg-white shadow-md rounded-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{tenant.name}</h3>
                  <p className="text-gray-600">Property: {tenant.property}</p>
                  <p className="text-sm mt-2">Status: {tenant.status}</p>
                </div>
                <div className="space-x-4">
                  <button
                    onClick={() => handleTenantStatusChange(tenant.id, "Active")}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Activate
                  </button>
                  <button
                    onClick={() => handleTenantStatusChange(tenant.id, "Inactive")}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Deactivate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Manage Owners */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Manage Owners</h2>
          <div className="space-y-4">
            {ownerData.map((owner) => (
              <div
                key={owner.id}
                className="p-4 bg-white shadow-md rounded-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{owner.name}</h3>
                  <p className="text-gray-600">Listings: {owner.listings}</p>
                </div>
                <div className="space-x-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    View Listings
                  </button>
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                    Suspend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Manage Payments */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Manage Payments</h2>
          <div className="space-y-4">
            {paymentData.map((payment) => (
              <div
                key={payment.id}
                className="p-4 bg-white shadow-md rounded-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{payment.tenant}</h3>
                  <p className="text-gray-600">Amount: {payment.amount}</p>
                  <p className={`text-sm mt-2 ${payment.status === "Paid" ? "text-green-600" : "text-yellow-600"}`}>
                    Status: {payment.status}
                  </p>
                </div>
                <div className="space-x-4">
                  {payment.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handlePaymentStatusChange(payment.id, "Paid")}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        Mark as Paid
                      </button>
                      <button
                        onClick={() => handlePaymentStatusChange(payment.id, "Rejected")}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Reject Payment
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
