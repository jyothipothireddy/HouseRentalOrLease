import React, { useState } from "react";

const owners = [
  { id: 1, name: "Ravi Kumar", listings: 3 },
  { id: 2, name: "Priya Shah", listings: 2 },
  { id: 3, name: "Manoj Yadav", listings: 1 },
];

const ManageOwners = () => {
  const [ownerData, setOwnerData] = useState(owners);

  const handleSuspendOwner = (id) => {
    setOwnerData(ownerData.map(owner => owner.id === id ? { ...owner, suspended: true } : owner));
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Manage Owners</h2>
      {ownerData.map((owner) => (
        <div key={owner.id} className="p-4 mb-4 bg-white shadow-md rounded-md">
          <h3 className="font-semibold text-gray-800">{owner.name}</h3>
          <p className="text-gray-600">Listings: {owner.listings}</p>
          {owner.suspended ? (
            <p className="text-red-600">Suspended</p>
          ) : (
            <button
              onClick={() => handleSuspendOwner(owner.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Suspend
            </button>
          )}
        </div>
      ))}
    </section>
  );
};

export default ManageOwners;
