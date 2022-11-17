const express = require("express");
const router = express.Router();
const ProductRouter = require("../routes/products");
const UsersRouter = require("../routes/users");
const categoryRouter = require("../routes/category");
const orderRouter = require("../routes/order");
router
  .use("/products", ProductRouter)
  .use("/users", UsersRouter)
  .use("/category", categoryRouter)
  .use("/order", orderRouter);

module.exports = router;
