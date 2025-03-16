const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  propertyId: { type: String, required: true },
  leaseStart: { type: Date, required: true },
  leaseEnd: { type: Date, required: true },
  rentAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ["Paid", "Pending", "Overdue"], default: "Pending" },
  securityDeposit: { type: Number, default: 0 },
  documents: [{ type: String }], // Store file paths or URLs
  status: { type: String, enum: ["Active", "Vacated"], default: "Active" },
});

module.exports = mongoose.model("Tenant", tenantSchema);