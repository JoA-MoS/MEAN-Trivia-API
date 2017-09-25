const Facade = require('../../lib/facade');
const questionsSchema = require('./schema');

class QuestionsFacade extends Facade {
    randomThree(...args) {
        return this.Schema
            .aggregate([
                { $sort: { name: 1 } },
                { $limit: 3 }
            ])
    }
    //     findRandom(...args) {
    //         return this.Schema
    //             .findRandom(...args)
    // ;
    //     }
}

module.exports = new QuestionsFacade(questionsSchema);
