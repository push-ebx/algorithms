const {User, db} = require("../config");

class Users {
  async getById(req, res) {
    const {id} = req.query

    if (!id) { // + проверка на корректность
      return res.send("this is not correct id")
    }

    const doc = await User.doc(id+'').get()
    const user_candidate = doc.data()

    if (!user_candidate) {
      return res.send("the user with this id was not found")
    }

    return res.send(user_candidate)
  }

  async create(req, res) {
    const {first_name, last_name, username, email, sex, password} = req.body

    const snapshot = await User.get();
    const count_users = snapshot.size

    await User.doc(count_users+1+'').set({
      first_name, 
      last_name, 
      username, 
      email, 
      sex, 
      password
    });

    return res.send('user was created')
  }

  async getAll(req, res) {
    const snapshot = await User.get()
    const users = snapshot.docs.map(doc => doc.data());

    return res.send(users)
  }
}

module.exports = new Users();