const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  propertyName: { type: String, required: true },
  propertyType: { type: String, required: true },
  bhk: { type: String, required: true },
  carpetArea: { type: Number, required: true },
  furnishingType: { type: String, required: true },
  address: { type: String, required: true },
  nearbyLandmarks: { type: String, required: true },
  ownerName: { type: String, required: true },
  ownerContact: { type: String, required: true },
  ownerEmail: { type: String, required: true },
  alternateContact: { type: String },
  monthlyRent: { type: Number, required: true },
  securityDeposit: { type: Number, required: true },
  maintenanceCharges: { type: Number },
  leaseDuration: { type: String, required: true },
  availabilityDate: { type: Date, required: true },
  rentNegotiable: { type: Boolean, default: false },
  petsAllowed: { type: Boolean, default: false },
  tenantType: { type: String, enum: ["Families", "Bachelors"], default: "Families" },
  smokingPolicy: { type: String, enum: ["Allowed", "Not Allowed"], default: "Not Allowed" },
  visitorPolicy: { type: String, required: true },
  photos: [String],
  documents: [{ type: String }],
  amenities: [String],
  status: { type: String, enum: ["Listed", "Rented", "Vacant"], default: "Listed" },
  maintenanceRequests: [
    {
      tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant" },
      description: String,
      status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Property", PropertySchema);