const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
  from:  {type: mongoose.SchemaTypes.ObjectId, required: true },
  to: {type: mongoose.SchemaTypes.ObjectId, required: true },
  fromName: {type: String, required: true},
  time: {type: String, required: true },
  acceptStatus: {type: Boolean},
  startStatus:  {type: Boolean },
  appointmentType: {type: String, required: true },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);