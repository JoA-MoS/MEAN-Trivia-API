const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const random = require('mongoose-simple-random');


const questionsSchema = new Schema({
  questionText: { type: String, required: true, minlength: 15 },
  answers: [{
    answerText: { type: String, required: true },
    isCorrect: { type: Boolean, required: true }
  }]
});
questionsSchema.plugin(random);
// questionsSchema.answers.plugin(random);




module.exports = mongoose.model('Questions', questionsSchema);
