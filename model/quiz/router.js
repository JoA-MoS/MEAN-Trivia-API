const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  // need to makt this return random 3 questions  
  .get((...args) => controller.find(...args))

module.exports = router;
