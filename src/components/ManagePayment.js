import React, { useState } from "react";

const payments = [
  { id: 1, tenant: "John Doe", amount: "₹ 50,000", status: "Paid" },
  { id: 2, tenant: "Jane Smith", amount: "₹ 45,000", status: "Pending" },
  { id: 3, tenant: "Alice Johnson", amount: "₹ 25,000", status: "Paid" },
];

const ManagePayments = () => {
  const [paymentData, setPaymentData] = useState(payments);

  const handlePaymentStatusChange = (id, newStatus) => {
    setPaymentData(paymentData.map(payment => payment.id === id ? { ...payment, status: newStatus } : payment));
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Manage Payments</h2>
      {paymentData.map((payment) => (
        <div key={payment.id} className="p-4 mb-4 bg-white shadow-md rounded-md">
          <h3 className="font-semibold text-gray-800">{payment.tenant}</h3>
          <p className="text-gray-600">Amount: {payment.amount}</p>
          <p>Status: {payment.status}</p>
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
      ))}
    </section>
  );
};

export default ManagePayments;
