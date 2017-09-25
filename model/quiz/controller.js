const Controller = require('../../lib/controller');
const quizFacade = require('./facade');

class QuizController extends Controller {
    // find(req, res, next) {
    //     let
    //     return this.facade.find(req.query)
    //         .then(collection => res.status(200).json(collection))
    //         .catch(err => next(err));
    // }
}


module.exports = new QuizController(quizFacade);
