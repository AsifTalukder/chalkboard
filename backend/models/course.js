const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseTitle: { type: String, required: true, unique: true },
  instructors: { type: String, required: true },
  roasterOfStudents: { type: Array },
  description: { type: String, required: true },
  lessonSequence: { type: String, required: true },
  courseContent: { type: String, required: true },
  courseInformation: { type: String, required: true },

});

const model = mongoose.model("Courses", CourseSchema);

module.exports = model;
