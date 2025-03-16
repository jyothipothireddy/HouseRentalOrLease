const AutoPay = require("../models/AutoPay");

// Toggle auto-pay
exports.toggleAutoPay = async (req, res) => {
  try {
    const { enabled } = req.body;
    let autoPay = await AutoPay.findOne();
    if (!autoPay) {
      autoPay = new AutoPay({ enabled });
    } else {
      autoPay.enabled = enabled;
    }
    await autoPay.save();
    res.json({ message: `Auto-pay ${enabled ? "enabled" : "disabled"}` });
  } catch (error) {
    res.status(500).json({ message: "Error updating auto-pay", error });
  }
};