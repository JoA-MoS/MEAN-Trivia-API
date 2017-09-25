const Controller = require('../../lib/controller');
const resultsFacade = require('./facade');

class ResultsController extends Controller {}

module.exports = new ResultsController(resultsFacade);
