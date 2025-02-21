const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    description: String,
    type: String,
    severity: String,
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    status: { type: String, default: "Open" },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Complaint", complaintSchema);