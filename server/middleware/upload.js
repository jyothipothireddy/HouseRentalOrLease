const multer = require("multer");
const path = require("path");

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    // Generate a unique filename using the current timestamp and a random number
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // Append the original file extension to the unique filename
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

module.exports = upload;