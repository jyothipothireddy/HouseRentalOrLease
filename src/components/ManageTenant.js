import React, { useState } from "react";

const tenants = [
  { id: 1, name: "John Doe", property: "324 Tara Place, Pune", status: "Active" },
  { id: 2, name: "Jane Smith", property: "405 Lock House, Goa", status: "Inactive" },
  { id: 3, name: "Alice Johnson", property: "Radha Apartment, 657, Delhi", status: "Active" },
];

const ManageTenants = () => {
  const [tenantData, setTenantData] = useState(tenants);

  const handleTenantStatusChange = (id, newStatus) => {
    setTenantData(tenantData.map(tenant => tenant.id === id ? { ...tenant, status: newStatus } : tenant));
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Manage Tenants</h2>
      {tenantData.map((tenant) => (
        <div key={tenant.id} className="p-4 mb-4 bg-white shadow-md rounded-md">
          <h3 className="font-semibold text-gray-800">{tenant.name}</h3>
          <p className="text-gray-600">Property: {tenant.property}</p>
          <p>Status: {tenant.status}</p>
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
      ))}
    </section>
  );
};

export default ManageTenants;
