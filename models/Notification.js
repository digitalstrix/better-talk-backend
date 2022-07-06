const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
  name:  {type: String, required: true},
  content: {type: String, required: true},
  type: {type: String, required: true},
});

module.exports = mongoose.model('Appointment', AppointmentSchema);