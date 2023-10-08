const cors = require("cors");
const express = require("express");
const router = require("./router")
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();
const PORT = 4000

app.use(express.json())
  .use(cookieParser())
  .use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
  }))
  .use('/api', router)
  .use(errorMiddleware)

app.listen(PORT, () => console.log(`Server started on ${PORT}`));