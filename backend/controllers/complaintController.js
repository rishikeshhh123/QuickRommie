const Complaint = require("../models/Complaint");
exports.createComplaint = async (req, res) => {
    try {
        const { title, description, type, severity } = req.body;
        const complaint = await Complaint.create({
            userId: req.user.id,
            title,
            description,
            type,
            severity
        });
        res.status(201).json(complaint);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};