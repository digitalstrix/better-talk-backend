const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
  name:  {type: String, required: true },
  qualification: String,
});

module.exports = mongoose.model('Doctor', DoctorSchema);