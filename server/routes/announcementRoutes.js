const express = require("express");
const announcementController = require("../controllers/announcementController");

const router = express.Router();

// Get all announcements
router.get("/", announcementController.getAnnouncements);

module.exports = router;