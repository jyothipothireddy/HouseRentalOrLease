const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Category Routes
router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.addCategory);

module.exports = router;