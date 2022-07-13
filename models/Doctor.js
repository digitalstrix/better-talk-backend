const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
  name:  {type: String, required: true },
  qualification: {type: String, required: true },
  sessions:  {type: Number },
  calls:  {type: Number },
  minutes: {type: Number },
  loggedIn:  {type: String},
  rating:  {type: Array },
  monAvailability: {type: Map, of: Boolean},
  tueAvailability: {type: Map, of: Boolean},
  wedAvailability: {type: Map, of: Boolean},
  thuAvailability: {type: Map, of: Boolean},
  friAvailability: {type: Map, of: Boolean},
  satAvailability: {type: Map, of: Boolean},
  sunAvailability: {type: Map, of: Boolean},
});

module.exports = mongoose.model('Doctor', DoctorSchema);