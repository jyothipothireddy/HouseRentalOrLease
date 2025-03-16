const Owner = require("../models/Owner");

exports.getProfile = async (req, res) => {
  try {
    const ownerId = req.user.id;
    const owner = await Owner.findById(ownerId);

    if (!owner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    res.json({
      name: owner.name,
      email: owner.email,
      phone: owner.phone,
      address: owner.address,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const ownerId = req.user.id;
    const { name, email, phone, address } = req.body;

    const updatedOwner = await Owner.findByIdAndUpdate(
      ownerId,
      { name, email, phone, address },
      { new: true }
    );

    if (!updatedOwner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    res.json(updatedOwner);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};