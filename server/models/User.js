const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "owner", "tenant"],
    required: true,
  },
  resetPasswordToken: String, // Add this field for reset token
  resetPasswordExpires: Date, // Add this field for token expiration
}, { timestamps: true });

// Method to generate a password reset token
userSchema.methods.generatePasswordReset = function () {
  const crypto = require('crypto');
  this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
};

module.exports = mongoose.model("User", userSchema);