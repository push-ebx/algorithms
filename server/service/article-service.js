const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const ApiError = require('../exceptions/api-error');
const {Article} = require("../config");

class ArticleService {
  async getByTitle(title) {
    if (!title) {
      throw ApiError.BadRequest("the title is empty")
    }

    const snap_article = await Article.where('title', '==', title).get()

    if (snap_article.empty) {
      return ApiError.BadRequest('No matching articles')
    }
    const article = {
      id: +snap_article.docs[0].id,
      ...snap_article.docs[0].data()
    }
    return article
  }

  async create(article) { // проверка на уникальность title
    const snapshot = await Article.get();
    const count_articles = snapshot.size
    await Article.doc(count_articles + 1 + '').set(article);

    return 'article was created'
  }

  async getAllByCategories(username) {
    const snapshot = await Article.get()

    const articles = snapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: +doc.id,
        category: data.category,
        subcategory: data.subcategory,
        title: data.title,
        file_url: data.file_url,
        author: data.author
      }
    });

    const categories = {}

    articles.forEach(article => {
      if (article.category && article.subcategory) {
        if (!categories[article.category]) {
          categories[article.category] = {}
        }
        if (!categories[article.category][article.subcategory]) {
          categories[article.category][article.subcategory] = []
        }

        if (categories[article.category][article.subcategory].length) {
          categories[article.category][article.subcategory].push(article)
        } else {
          categories[article.category][article.subcategory] = [article]
        }
      }
    })

    return categories
  }
}

module.exports = new ArticleService();