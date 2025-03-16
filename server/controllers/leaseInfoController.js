const LeaseInfo = require("../models/LeaseInfo");

const getLeaseInfo = async (req, res) => {
  try {
    const leaseInfo = await LeaseInfo.findOne({}); // Fetch the first lease info document
    if (!leaseInfo) {
      return res.status(404).json({ message: "Lease information not found" });
    }
    res.status(200).json(leaseInfo);
  } catch (error) {
    console.error("Error fetching lease information:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getLeaseInfo };