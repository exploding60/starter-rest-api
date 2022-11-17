const express = require("express");
const router = express.Router();
const { categoryController } = require("./../controller/category");
const { validateCategory } = require("./../helpers/validateStock");
const { requireAdmin } = require("./../middleware/auth");
const { protect } = require("../middleware/auth");

router.get("/", categoryController.getCategory);
router.post("/", requireAdmin, validateCategory, categoryController.insert);
router.put("/:id", requireAdmin, validateCategory, categoryController.update);
router.delete("/:id", requireAdmin, categoryController.delete);
router.get("/searchID=:id", categoryController.search);
// router.get('/search=:name',protect.searchName)

module.exports = router;
