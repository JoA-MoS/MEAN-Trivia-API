const Router = require('express').Router;
const router = new Router();

const quiz = require('./model/quiz/router');
const questions = require('./model/questions/router');
const results = require('./model/results/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to Exam API!' });
});

router.use('/quiz', quiz);
router.use('/questions', questions);
router.use('/results', results);

module.exports = router;
