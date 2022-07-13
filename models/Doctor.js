const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
  name:  {type: String, required: true },
  qualification: {type: String, required: true },
  sessions:  {type: Number },
  calls:  {type: Number },
  minutes: {type: Number },
  loggedIn:  {type: String},
  rating:  {type: Array },
  monAvailability: {type: Array, of: Boolean},
  tueAvailability: {type: Array, of: Boolean},
  wedAvailability: {type: Array, of: Boolean},
  thuAvailability: {type: Array, of: Boolean},
  friAvailability: {type: Array, of: Boolean},
  satAvailability: {type: Array, of: Boolean},
  sunAvailability: {type: Array, of: Boolean},
});

module.exports = mongoose.model('Doctor', DoctorSchema);