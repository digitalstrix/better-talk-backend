const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
  name:  {type: String, required: true },
  qualification: {type: String, required: true },
  sessions:  {type: Number },
  calls:  {type: Number },
  minutes: {type: Number },
  loggedIn:  {type: Boolean},
  rating:  {type: Array },
});

module.exports = mongoose.model('Doctor', DoctorSchema);