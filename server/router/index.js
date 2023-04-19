const Router = require('express');
const users = require('./users');
const articles = require('./articles');

const router = new Router();

router.get('/users/getById', users.getById);
router.get('/users/getAll', users.getAll);
router.post('/users/create', users.create);

router.post('/articles/create', articles.create);
router.get('/articles/getById', articles.getById);
router.get('/articles/getByTitle', articles.getByTitle);
router.get('/articles/getAll', articles.getAll);

module.exports = router;