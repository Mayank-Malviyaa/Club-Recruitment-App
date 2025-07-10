const express = require("express");
const router = express.Router();
const ClubApplication = require("../models/ClubApplication");

router.post("/apply", async (req, res) => {
  try {
    console.log("📥 Received Form Data:", req.body);
    const newApp = new ClubApplication(req.body);
    await newApp.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/applications", async (req, res) => {
  try {
    const data = await ClubApplication.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
