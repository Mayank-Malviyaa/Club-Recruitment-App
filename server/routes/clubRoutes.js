const express = require("express");
const router = express.Router();
const ClubApplication = require("../models/ClubApplication");

router.post("/apply", async (req, res) => {
  try {
    const newApp = new ClubApplication(req.body);
    await newApp.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists. Please use a different one." });
    }
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const applications = await ClubApplication.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications" });
  }
});

module.exports = router;