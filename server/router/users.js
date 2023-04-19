const {User} = require("../config");

class Users {
  async getById(req, res) {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  }
}

module.exports = new Users();