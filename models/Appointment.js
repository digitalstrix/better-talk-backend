const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
  from:  {type: String, required: true },
  to: {type: String, required: true },
  time: {type: String, required: true },
  acceptStatus: {type: Boolean, required: true },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);