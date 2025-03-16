const express = require("express");
const { getMessages, sendMessage } = require("../controllers/communicationController");

const router = express.Router();

// GET all messages
router.get("/messages", getMessages);

// POST a new message
router.post("/messages", sendMessage);

module.exports = router;