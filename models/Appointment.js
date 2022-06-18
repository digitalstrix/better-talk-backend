const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
  from:  {type: mongoose.SchemaTypes.ObjectId, required: true },
  to: {type: mongoose.SchemaTypes.ObjectId, required: true },
  time: {type: Date, required: true },
  acceptStatus: {type: Boolean},
  startStatus:  {type: Boolean },
  appointmentType: {type: String, required: true },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);