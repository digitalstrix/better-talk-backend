const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
  name:  {type: String, required: true },
  qualification: String,
  sessions: Number,
  calls: Number,
  minutes: Number,
});

module.exports = mongoose.model('Doctor', DoctorSchema);