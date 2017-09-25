const Facade = require('../../lib/facade');
const quizSchema = require('./schema');

class QuizFacade extends Facade {
    find(...args) {
        return this.Schema
            .aggregate([
                { $sort: { name: 1 } },
                { $limit: 3 }
            ])
    }

}

module.exports = new QuizFacade(quizSchema);
