const express = require("express");
const propertyController = require("../controllers/propertyController"); // Correct import

const router = express.Router();

// Property Routes
router.get("/", propertyController.getAllProperties); // Fetch all properties
router.put("/:id", propertyController.updateProperty); // Update property
router.delete("/:id", propertyController.deleteProperty); // Delete property

module.exports = router;