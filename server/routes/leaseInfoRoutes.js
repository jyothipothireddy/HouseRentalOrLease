const express = require("express");
const { getLeaseInfo } = require("../controllers/leaseInfoController");

const router = express.Router();

router.get("/lease-info", getLeaseInfo);

module.exports = router;