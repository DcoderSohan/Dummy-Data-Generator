const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

const students = mongoose.model("students", studentsSchema);

module.exports = students;
