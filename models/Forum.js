
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ForumSchema = new Schema({
  name:  {type: String, required: true },
  content: {type: String, required: true },
  likes: {type: Number},
  date: {type: String},
  comments: {type: Array},
  userId: {type: mongoose.SchemaTypes.ObjectId, required: true }
});

module.exports = mongoose.model('Forum', ForumSchema);