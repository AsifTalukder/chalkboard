const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  courseTitle: { type: String },
  userEmail: { type: String },
  userName: { type: String },
  courseContent: { type: String, required: true },
  courseInformation: { type: String, required: true },
  instructorEmail: { type: String, required: true },
});

const model = mongoose.model("Order", OrderSchema);

module.exports = model;
