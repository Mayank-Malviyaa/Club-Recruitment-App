const mongoose = require("mongoose");

const clubApplicationSchema = new mongoose.Schema(
  {
    fullName: String,
    branch: String,
    year: String,
    email: String,
    mobile: String,
    clubName: String,
    whyJoin: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClubApplication", clubApplicationSchema);
