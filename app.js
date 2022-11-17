const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const mainRouter = require("./src/routes/index");
const { response } = require("./src/middleware/getDataHelpers");
const app = express();
const xss = require("xss-clean");

app.use(xss());
app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
  })
);

app.use(cookieParser());
const port = process.env.PORT;
app.use(bodyParser.json());

app.use("/", mainRouter);
app.use("/image", express.static("./src/image"));

app.all("*", (req, res, next) => {
  response(res, 404, false, null, "404 Not Found");
});

app.get("/", (req, res, next) => {
  res.status(200).json({ status: "success", statusCode: 200 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
