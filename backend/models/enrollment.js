const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
  courseTitle: { type: String },
  userEmail: { type: String },
  userName: { type: String },
  courseContent: { type: String, required: true },
  courseInformation: { type: String, required: true },
});

const model = mongoose.model("enrollment", EnrollmentSchema);

module.exports = model;
