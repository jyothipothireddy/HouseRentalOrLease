const Tenant = require("../models/Tenant");
const User = require("../models/User");
const Property = require("../models/Property");
const Payment = require("../models/Payment");
const Complaint = require("../models/Complaint");
const Notification = require("../models/Notification");

// Get all tenants
exports.getAllTenants = async (req, res) => {
  try {
    const tenants = await Tenant.find().populate("propertyId");
    res.status(200).json(tenants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tenants", error });
  }
};

// Get a single tenant by ID
exports.getTenantById = async (req, res) => {
  try {
    const tenant = await Tenant.findById(req.params.id).populate("propertyId");
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res.status(200).json(tenant);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tenant", error });
  }
};

// Create a new tenant
exports.createTenant = async (req, res) => {
  try {
    const newTenant = new Tenant(req.body);
    await newTenant.save();
    res.status(201).json(newTenant);
  } catch (error) {
    res.status(500).json({ message: "Error creating tenant", error });
  }
};

// Update a tenant
exports.updateTenant = async (req, res) => {
  try {
    const updatedTenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res.status(200).json(updatedTenant);
  } catch (error) {
    res.status(500).json({ message: "Error updating tenant", error });
  }
};

// Delete a tenant
exports.deleteTenant = async (req, res) => {
  try {
    const deletedTenant = await Tenant.findByIdAndDelete(req.params.id);
    if (!deletedTenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res.status(200).json({ message: "Tenant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting tenant", error });
  }
};

// Add communication message
exports.addCommunication = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const tenant = await Tenant.findById(id);
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    tenant.communication.push({ message });
    await tenant.save();
    res.status(201).json({ message: "Communication added successfully", tenant });
  } catch (error) {
    res.status(500).json({ message: "Error adding communication", error });
  }
};

// Update payment status
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;
    const tenant = await Tenant.findByIdAndUpdate(id, { paymentStatus }, { new: true });
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }
    res.json({ message: "Payment status updated successfully", tenant });
  } catch (error) {
    res.status(500).json({ message: "Error updating payment status", error });
  }
};

// Get tenant profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update tenant profile
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, email, phone } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, phone },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists." });
    }
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get applied properties
exports.getAppliedProperties = async (req, res) => {
  try {
    const userId = req.user.userId;
    const properties = await Property.find({ tenantId: userId });
    res.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get payment history
exports.getPaymentHistory = async (req, res) => {
  try {
    const userId = req.user.userId;
    const payments = await Payment.find({ tenantId: userId });
    res.json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get complaints
exports.getComplaints = async (req, res) => {
  try {
    const userId = req.user.userId;
    const complaints = await Complaint.find({ tenantId: userId });
    res.json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get notifications
exports.getNotifications = async (req, res) => {
  try {
    const userId = req.user.userId;
    const notifications = await Notification.find({ tenantId: userId });
    res.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ message: "Server Error" });
  }
};