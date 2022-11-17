const express = require("express");
const router = express.Router();
const { orderController } = require("./../controller/order");
const { protect, roleUser } = require("./../middleware/auth");

router.get("/", orderController.getProduct);
router.post("/", orderController.insert);
router.put("/:id", roleUser, orderController.update);
router.delete("/:id", roleUser, orderController.delete);
router.get("/searchID=:id", protect, orderController.search);

module.exports = router;
