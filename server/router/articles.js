const {Article} = require("../config");

class Articles {
  async getById(req, res) {
    const snapshot = await Article.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  }
}

module.exports = new Articles();