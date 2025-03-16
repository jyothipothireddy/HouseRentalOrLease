const mongoose = require("mongoose");

const AutoPaySchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
});

module.exports = mongoose.model("AutoPay", AutoPaySchema);