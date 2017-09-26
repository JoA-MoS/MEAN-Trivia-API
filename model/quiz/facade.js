const Facade = require('../../lib/facade');
const quizSchema = require('../questions/schema');

class QuizFacade extends Facade {
    // find(...args) {
    //     // let randomThree = null;
    //     // this.Schema.findRandom({}, {}, { limit: 3 }, function (err, results) {
    //     //     if (err) {
    //     //         console.log(err);
    //     //     }
    //     //     else {
    //     //         // console.log(results);
    //     //         randomThree = results;
    //     //     }
    //     // });
    //     // console.log(randomThree)
    //     // return randomThree;
    //     // this.Schema.syncRandom(function (err, result) {
    //     //     console.log(result.updated);
    //     // }).exec();
    //     // return this.Schema
    //     //     .findRandom()
    //     //     .limit(3).exec();
    //     return this.Schema.aggregate([
    //         {
    //             $project: {
    //                 questionText: questionText,
    //                 answers: answ
    //                 rand: Math.random()
    //             }
    //         },
    //         { $sort: { rand: 1 } },
    //         { $limit: 3 }]).exec();
    // }
}

module.exports = new QuizFacade(quizSchema);
