const express = require("express");
const router = express.Router();
const TenantController = require("../controllers/TenantController");
const authenticateToken = require("../middleware/authMiddleware");

// Tenant Profile Routes
router.get("/profile", authenticateToken, TenantController.getProfile);
router.put("/profile", authenticateToken, TenantController.updateProfile);

// Tenant Property and Payment Routes
router.get("/properties", authenticateToken, TenantController.getAppliedProperties);
router.get("/payments", authenticateToken, TenantController.getPaymentHistory);

// Tenant Complaint and Notification Routes
router.get("/complaints", authenticateToken, TenantController.getComplaints);
router.get("/notifications", authenticateToken, TenantController.getNotifications);

// Tenant Management Routes (General Tenant CRUD)
router.get("/", authenticateToken, TenantController.getAllTenants);
router.get("/:id", authenticateToken, TenantController.getTenantById);
router.post("/", authenticateToken, TenantController.createTenant);
router.put("/:id", authenticateToken, TenantController.updateTenant);
router.delete("/:id", authenticateToken, TenantController.deleteTenant);

// Additional Features
router.post("/:id/communication", authenticateToken, TenantController.addCommunication);
router.put("/:id/payment-status", authenticateToken, TenantController.updatePaymentStatus);

module.exports = router;
