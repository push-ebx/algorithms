const Router = require('express');
const users = require('./users');
const articles = require('./articles');

const router = new Router();

router.get('/users/getById', users.getById);
router.get('/users/getAllUsers', users.getAllUsers);
router.post('/users/create', users.create);

router.get('/articles/getById', articles.getById);
router.get('/articles/getByTitle', articles.getByTitle);
router.post('/articles/create', articles.create);

module.exports = router;