const express = require("express");
const router = express.Router();
const { productController } = require("./../controller/products");
const { validateStock } = require("./../helpers/validateStock");
const { protect, requireAdmin, roleUser } = require("../middleware/auth");
const upload = require("./../middleware/upload");
const { hitCache, clearCache } = require("../middleware/redis");

router.get("/sort", productController.sort);
// router.get("/", productController.getProduct);
router.post(
  "/",
  upload.single("photo"),
  validateStock,
  productController.insert
);
router.put(
  "/edit/:id",
  // validateStock, masih error di validestock
  upload.single("photo"),
  productController.update
);
router.delete("/:id", productController.delete);
// router.get("/search=:name", productController.searchName);
// router.get('/',productController.sort)
router.get("/:id", productController.search);
module.exports = router;
