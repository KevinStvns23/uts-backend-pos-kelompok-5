const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory
} = require("./category-controller");

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);

module.exports = router;