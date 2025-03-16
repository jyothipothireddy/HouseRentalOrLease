const express = require("express");
const router = express.Router();
const PropertyController = require("../controllers/propertyController");
const upload = require("../middleware/upload");

// Add/Edit Property
router.post("/add", upload.fields([
  { name: "photos", maxCount: 10 },
  { name: "documents", maxCount: 5 },
]), PropertyController.addProperty);
router.put("/edit/:id", upload.fields([
  { name: "photos", maxCount: 10 },
  { name: "documents", maxCount: 5 },
]), PropertyController.editProperty);

// Get All Properties
router.get("/", PropertyController.getAllProperties);
router.put("/:id", PropertyController.updateProperty);
router.delete("/:id", PropertyController.deleteProperty);

module.exports = router;