const express = require("express");
const router = express.Router();
const ownerController = require("../controllers/ownerController");
const authenticateToken = require("../middleware/authMiddleware");

router.get("/profile", authenticateToken, ownerController.getProfile);
router.put("/profile", authenticateToken, ownerController.updateProfile);

module.exports = router;