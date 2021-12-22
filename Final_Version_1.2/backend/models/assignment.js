const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  course: { type: String, required: true },
  assignment: { type: String, required: true }

});

const model = mongoose.model("assignment", AssignmentSchema);

module.exports = model;
