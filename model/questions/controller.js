const Controller = require('../../lib/controller');
const questionsFacade = require('./facade');

class QuestionsController extends Controller {
    randomThree(req, res, next) {
        return this.facade.randomThree(req.query)
            .then(collection => res.status(200).json(collection))
            .catch(err => next(err));
    }

}

module.exports = new QuestionsController(questionsFacade);


// const Controller = require('../../lib/controller');
// const questionsFacade = require('./facade');

// class QuestionsController extends Controller {
//     randomThree(req, res, next) {
//         return this.facade.findRandom({}, {}, { limit: 3 })
//             .then(collection => res.status(200).json(collection))
//             .catch(err => next(err));
//     }

// }

// module.exports = new QuestionsController(questionsFacade);
