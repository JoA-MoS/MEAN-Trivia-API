const Controller = require('../../lib/controller');
const quizFacade = require('./facade');

class QuizController extends Controller {
    find(req, res, next) {

        return this.facade.find(req.query)
            .then(collection => {
                collection.sort(function (a, b) {
                    const res = Math.random() - Math.random();
                    return res;
                });
                let random3 = collection.slice(0, 3);
                random3.forEach(function (element) {
                    element.answers.sort(function (a, b) {
                        const res = Math.random() - Math.random();
                        return res;
                    });
                }, this);

                res.status(200).json(random3);
            })
            .catch(err => next(err));
    }
}


module.exports = new QuizController(quizFacade);
