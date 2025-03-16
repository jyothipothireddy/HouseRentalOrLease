const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  description: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now },
  status: { type: String, enum: ['Resolved', 'Pending'], default: 'Pending' },
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
});

module.exports = mongoose.model('Complaint', complaintSchema);