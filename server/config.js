const firebase = require("firebase");
const {firebaseConfig} = require("./firebaseConfig")

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const User = db.collection("Users");
const Article = db.collection("Articles");

module.exports = {User, Article, db};