const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: { type: String, enum: ["tenant", "owner"], required: true }, // Identify sender
  message: { type: String, required: true }, // Message content
  timestamp: { type: Date, default: Date.now }, // Timestamp of the message
});

module.exports = mongoose.model("Message", MessageSchema);