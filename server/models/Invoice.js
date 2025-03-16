const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  dueDate: { type: String, required: true },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Invoice", InvoiceSchema);