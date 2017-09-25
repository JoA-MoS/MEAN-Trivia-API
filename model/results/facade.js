const Facade = require('../../lib/facade');
const resultsSchema = require('./schema');

class ResultsFacade extends Facade {}

module.exports = new ResultsFacade(resultsSchema);
