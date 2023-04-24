const cors = require("cors");
const express = require("express");
const router = require("./router")

const app = express();
const PORT = 80

const {firebaseConfig} = require("./firebaseConfig")
console.log(firebaseConfig)

app.use(cors())
   .use(express.json())
   .use('/api', router);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));