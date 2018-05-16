const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const completedQuerySchema = new Schema({
  query: { type: String, required: true },
  solution: { type: String, required: true },
  completed: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('CompletedQuery', completedQuerySchema);
