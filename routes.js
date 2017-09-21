const Router = require('express').Router;
const router = new Router();

const product = require('./model/product/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to projectproductmanagement-api API!' });
});

router.use('/product', product);

module.exports = router;
