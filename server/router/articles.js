const {Article} = require("../config");

class Articles {
  async getById(req, res) {
    const {id} = req.query

    if (!id) { // + проверка на корректность
      return res.send("this is not correct id")
    }

    const doc = await Article.doc(id).get()
    const article_candidate = doc.data()

    if (!article_candidate) {
      return res.send("the article with this id was not found")
    }

    return res.send(article_candidate)
  }

  async create(req, res) { // проверка на уникальность title
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

    const snapshot = await Article.get();
    const count_articles = snapshot.size
    console.log(count_articles)
    await Article.doc(count_articles + 1 + '').set({
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

    return res.send('article was created')
  }

  async edit(req, res) { // проверка на уникальность title
    const {
      author,
      author_id,
      category,
      subcategory,
      date_creation,
      date_publication,
      file_url,
      title,
      old_title,
      is_draw
    } = req.body

    const snapshot = await Article.where('title', '==', old_title).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    const id_old_article = snapshot.docs[0].id
    await Article.doc(id_old_article).update({
      author,
      // author_id,
      category,
      subcategory,
      // date_creation,
      // date_publication,
      file_url,
      title,
      is_draw
    })

    // await Article.doc().set({
    //   author,
    //   // author_id,
    //   category,
    //   subcategory,
    //   // date_creation,
    //   // date_publication,
    //   file_url,
    //   title
    // });

    return res.send('article was edited')
  }

  async getByTitle(req, res) {
    const {title} = req.query

    if (!title) {
      return res.send("the title is empty")
    }

    const snap_article = await Article.where('title', '==', title).get()

    if (snap_article.empty) {
      res.statusCode = 400
      return res.send('No matching articles')
    }
    const article = {
      id: +snap_article.docs[0].id,
      ...snap_article.docs[0].data()
    }
    return res.send(article)
  }

  async getAll(req, res) {
    // если автор статьи и пользователь который запрашивает совпадают, то вернуть статью даже если черновик
    const snapshot = await Article.get()

    const articles = snapshot.docs.map(doc => {
      const data = doc.data()

      if (!data.is_draw || true) { // !!!!!!!
        return {
          id: +doc.id,
          category: data.category,
          subcategory: data.subcategory,
          title: data.title,
          file_url: data.file_url,
          author: data.author,
          is_draw: data.is_draw
        }
      }
    });

    return res.send(articles)
  }

  async getAllByCategories(req, res) {
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

    // PZDC O(n)
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

    return res.send(categories)
  }
}

module.exports = new Articles();