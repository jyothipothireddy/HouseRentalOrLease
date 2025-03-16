const Payment = require("../models/Payment");

// Get payment history
exports.getPaymentHistory = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching payment history", error });
  }
};

// Process rent payment
exports.processPayment = async (req, res) => {
  try {
    const { amount, method } = req.body;
    const newPayment = new Payment({ amount, method });
    await newPayment.save();
    res.json({ message: "Payment successful!" });
  } catch (error) {
    res.status(500).json({ message: "Error processing payment", error });
  }
};