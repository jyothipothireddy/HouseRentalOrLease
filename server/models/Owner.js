const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["owner"], default: "owner" },
}, { timestamps: true });

module.exports = mongoose.model("Owner", OwnerSchema);
