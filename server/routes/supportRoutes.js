const express = require("express");
const router = express.Router();
const SupportController = require("../controllers/SupportController");

// Submit feedback
router.post("/feedback", SupportController.submitFeedback);

// Get FAQs (static data for now)
router.get("/faqs", SupportController.getFAQs);

module.exports = router;