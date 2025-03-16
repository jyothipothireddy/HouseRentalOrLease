const express = require("express");
const autoPayController = require("../controllers/autoPayController");

const router = express.Router();

// Toggle auto-pay
router.post("/", autoPayController.toggleAutoPay);

module.exports = router;