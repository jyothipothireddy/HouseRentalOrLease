const express = require("express");
const messageController = require("../controllers/messageController");

const router = express.Router();

// Get all messages
router.get("/", messageController.getMessages);

// Send a new message
router.post("/", messageController.sendMessage);

module.exports = router;