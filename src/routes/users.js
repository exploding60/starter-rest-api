const express = require("express");
const router = express.Router();
const { UsersController } = require("../controller/users");

router.post("/register", UsersController.insert);
router.post("/login", UsersController.login);
router.post("/verif", UsersController.otp);
module.exports = router;
