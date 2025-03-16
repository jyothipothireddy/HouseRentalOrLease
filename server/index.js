const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const tenantRoutes = require("./routes/tenantRoutes");
const ownerRoutes = require("./routes/ownerRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const supportRoutes = require("./routes/supportRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const autoPayRoutes = require("./routes/autoPayRoutes");
const messageRoutes = require("./routes/messageRoutes");
const announcementRoutes = require("./routes/announcementRoutes");
const communicationRoutes = require("./routes/communicationRoutes");
const leaseInfoRoutes = require("./routes/leaseInfoRoutes");
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/users")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/user", authRoutes);
app.use("/api/tenant", tenantRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/support", supportRoutes); 
app.use("/api/rent/invoices", invoiceRoutes);
app.use("/api/rent/payment-history", paymentRoutes);
app.use("/api/rent/auto-pay", autoPayRoutes);
app.use("/api/communication/messages", messageRoutes);
app.use("/api/communication/notifications", notificationRoutes);
app.use("/api/communication/announcements", announcementRoutes);
app.use("/api/communication", communicationRoutes);
app.use("/api", leaseInfoRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});