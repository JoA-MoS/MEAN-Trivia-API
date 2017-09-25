const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const resultSchema = new Schema({
  userFirstName: { type: String, required: true },
  score: { type: Number, required: true }
});


module.exports = mongoose.model('Results', resultSchema);
