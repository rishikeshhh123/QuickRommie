const express = require("express");
const { createComplaint, getComplaints } = require("../controllers/complaintController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/", authMiddleware, createComplaint);
router.get("/", getComplaints);
module.exports = router;