const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const random = require('mongoose-simple-random');

const answerSchema = new Schema({
  answerText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true }
})

const questionSchema = new Schema({
  questionText: { type: String, required: true, minlength: 15 },
  answers: [answerSchema]
});



module.exports = mongoose.model('Questions', questionSchema);
