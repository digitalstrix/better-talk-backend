const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
  name:  {type: String, required: true },
  description: String,
  consultation:   String,
});

module.exports = mongoose.model('Doctor', DoctorSchema);