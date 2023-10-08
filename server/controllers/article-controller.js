const ArticleService = require('../service/article-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');
const userService = require("../service/user-service");

class ArticleController {
  async getAllByCategories(req, res, next) {
    try {
      const articles = await ArticleService.getAllByCategories();
      return res.json(articles);
    } catch (e) {
      next(e);
    }
  }

  async getByTitle(req, res, next) {
    const {title} = req.query

    try {
      const articles = await ArticleService.getByTitle(title);
      return res.json(articles);
    } catch (e) {
      next(e);
    }
  }

  async create(req, res, next) {
    // if (req.user) {
    //   const user = await userService.getUser(req.user.username);
    //   if (user.role !== 'admin') return ApiError.UnauthorizedError("User is not admin")
    // }

    const {
      author,
      author_id,
      category,
      subcategory,
      date_creation,
      date_publication,
      file_url,
      title,
      is_draw
    } = req.body

    try {
      const message = await ArticleService.create({
        author,
        // author_id,
        category,
        subcategory,
        // date_creation,
        // date_publication,
        file_url,
        title,
        is_draw
      });
      return res.json(message);
    } catch (e) {
      next(e);
    }
  }


}


module.exports = new ArticleController();