import React from "react";

const leases = [
  {
    id: 1,
    property: "324 Tara Place, Pune",
    status: "Active",
    document: "Lease_Agreement_Tara_Place.pdf",
  },
  {
    id: 2,
    property: "405 Lock House, Goa",
    status: "Expired",
    document: "Lease_Agreement_Lock_House.pdf",
  },
];

const LeaseManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lease Management</h1>
      <div className="space-y-4">
        {leases.map((lease) => (
          <div key={lease.id} className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-bold">{lease.property}</h2>
            <p>Status: {lease.status}</p>
            <button className="mt-2 text-blue-500">
              <a href={`/documents/${lease.document}`} download>
                Download Lease Document
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaseManagement;
