const mongoose = require("mongoose");

const clubApplicationSchema = new mongoose.Schema(
  {
  fullName: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  clubName: { type: String, required: true },
  whyJoin: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClubApplication", clubApplicationSchema);
