const Notification = require("../models/Notification");
const Tenant = require("../models/Tenant");
const Property = require("../models/Property");

// Get all notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ ownerId: req.user.userId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications", error });
  }
};

// Mark notification as read
exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndUpdate(id, { isRead: true }, { new: true });
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json({ message: "Notification marked as read", notification });
  } catch (error) {
    res.status(500).json({ message: "Error marking notification as read", error });
  }
};

// Send rent due alert
exports.sendRentDueAlert = async (req, res) => {
  try {
    const { tenantId } = req.body;
    const tenant = await Tenant.findById(tenantId).populate("propertyId");
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }

    const message = `Rent is due for ${tenant.name} at ${tenant.propertyId.address}.`;
    const newNotification = new Notification({
      ownerId: req.user.userId,
      type: "RentDue",
      message,
    });
    await newNotification.save();

    res.status(201).json({ message: "Rent due alert sent successfully", notification: newNotification });
  } catch (error) {
    res.status(500).json({ message: "Error sending rent due alert", error });
  }
};

// Send maintenance alert
exports.sendMaintenanceAlert = async (req, res) => {
  try {
    const { propertyId, description } = req.body;
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    const message = `New maintenance request for ${property.address}: ${description}`;
    const newNotification = new Notification({
      ownerId: req.user.userId,
      type: "Maintenance",
      message,
    });
    await newNotification.save();

    res.status(201).json({ message: "Maintenance alert sent successfully", notification: newNotification });
  } catch (error) {
    res.status(500).json({ message: "Error sending maintenance alert", error });
  }
};

// Send lease renewal reminder
exports.sendLeaseRenewalReminder = async (req, res) => {
  try {
    const { tenantId } = req.body;
    const tenant = await Tenant.findById(tenantId).populate("propertyId");
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }

    const message = `Lease renewal reminder for ${tenant.name} at ${tenant.propertyId.address}.`;
    const newNotification = new Notification({
      ownerId: req.user.userId,
      type: "LeaseRenewal",
      message,
    });
    await newNotification.save();

    res.status(201).json({ message: "Lease renewal reminder sent successfully", notification: newNotification });
  } catch (error) {
    res.status(500).json({ message: "Error sending lease renewal reminder", error });
  }
};

// Send system notification
exports.sendSystemNotification = async (req, res) => {
  try {
    const { message } = req.body;
    const newNotification = new Notification({
      ownerId: req.user.userId,
      type: "System",
      message,
    });
    await newNotification.save();

    res.status(201).json({ message: "System notification sent successfully", notification: newNotification });
  } catch (error) {
    res.status(500).json({ message: "Error sending system notification", error });
  }
};