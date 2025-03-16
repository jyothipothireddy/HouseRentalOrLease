const mongoose = require("mongoose");

const LeaseInfoSchema = new mongoose.Schema({
  leaseAgreementUrl: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  renewalOptions: { type: String, required: true },
  rentAmount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  paymentHistory: [
    {
      date: { type: Date, required: true },
      amount: { type: Number, required: true },
      status: { type: String, enum: ["Paid", "Pending"], required: true },
    },
  ],
  tenantName: { type: String, required: true },
  tenantContact: { type: String, required: true },
  landlordName: { type: String, required: true },
  landlordContact: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  propertyAddress: { type: String, required: true },
  propertyType: { type: String, required: true },
  numberOfRooms: { type: Number, required: true },
  numberOfBathrooms: { type: Number, required: true },
  amenities: { type: [String], required: true },
  maintenanceResponsibilities: { type: String, required: true },
  utilityBillsResponsibility: { type: String, required: true },
  petPolicy: { type: String, required: true },
  latePaymentPenalties: { type: String, required: true },
  noticePeriodForTermination: { type: String, required: true },
  terminationFee: { type: Number, required: true },
});

module.exports = mongoose.model("LeaseInfo", LeaseInfoSchema);