const Router = require('express');
const users = require('./users');
const articles = require('./articles');

const router = new Router();

router.get('/users/getById', users.getById);
router.get('/articles/getById', articles.getById);

module.exports = router;