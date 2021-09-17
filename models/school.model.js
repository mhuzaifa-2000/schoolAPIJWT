const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    contactNo: { type: String },
    medicalCondition: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const School = mongoose.model("School", schoolSchema);
module.exports = School;
