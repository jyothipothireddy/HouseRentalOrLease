const express = require("express");
const invoiceController = require("../controllers/invoiceController");

const router = express.Router();

// Get all invoices
router.get("/", invoiceController.getInvoices);

module.exports = router;