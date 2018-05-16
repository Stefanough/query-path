const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new Schema({
  query: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('Query', querySchema);
