const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const articlesController = require('../controllers/article-controller')
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const userService = require("../service/user-service");
const ApiError = require("../exceptions/api-error");

router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({min: 3, max: 32}),
  userController.registration
);
router.post('/login', userController.login);
router.post('/articles/create', authMiddleware, articlesController.create);
// router.post('/articles/edit', articlesController.edit);
// router.get('/articles/getById', articlesController.getById);
// router.get('/articles/getAll', articlesController.getAll);
router.get('/articles/getByTitle', articlesController.getByTitle);
router.get('/articles/getAllByCategories', articlesController.getAllByCategories);

// router.post('/logout', userController.logout);
// router.get('/activate/:link', userController.activate);
// router.get('/refresh', userController.refresh);
router.get('/user', authMiddleware, userController.getUser);

module.exports = router