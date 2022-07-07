const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  to: { type: mongoose.SchemaTypes.ObjectId, required: true },
  content: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Notification", NotificationSchema);
