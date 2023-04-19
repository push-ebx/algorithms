const cors = require("cors");
const express = require("express");
const router = require("./router")

const app = express();
const PORT = 4000

app.use(cors())
   .use(express.json())
   .use('/api', router);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));