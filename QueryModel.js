const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new Schema({
  query: { type: String, required: true }
});

module.exports = mongoose.model('Query', querySchema);
