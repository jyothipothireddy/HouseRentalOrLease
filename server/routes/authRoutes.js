const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Signup and Login Routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Forgot Password and Reset Password Routes
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);

module.exports = router;