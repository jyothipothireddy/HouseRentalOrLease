const express = require("express");
const router = express.Router();
const NotificationController = require("../controllers/NotificationController");

// Get all notifications
router.get("/", NotificationController.getNotifications);

// Mark notification as read
router.put("/:id/mark-as-read", NotificationController.markAsRead);

// Send rent due alert
router.post("/rent-due", NotificationController.sendRentDueAlert);

// Send maintenance alert
router.post("/maintenance", NotificationController.sendMaintenanceAlert);

// Send lease renewal reminder
router.post("/lease-renewal", NotificationController.sendLeaseRenewalReminder);

// Send system notification
router.post("/system", NotificationController.sendSystemNotification);

module.exports = router;