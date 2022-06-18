const mongoose = require('mongoose')

const PurchaseSchema = new mongoose.Schema({
  by:  {type: mongoose.SchemaTypes.ObjectId, required: true },
  username: {type: String, required: true },
  time: {type: Date, required: true },
  appointmentType: {type: String, required: true },
  packType: {type: String, required: true },
});

module.exports = mongoose.model('Purchase', PurchaseSchema);