const Category = require('../../../models/category-schema');

async function createCategory(name, description) {
  return await Category.create({ name, description });
}

async function getCategories() {
  return await Category.find({});
}

async function getCategoryById(id) {
  return await Category.findById(id);
}

async function updateCategory(id, name, description) {
  return await Category.findByIdAndUpdate(
    id,
    { name, description },
    { new: true }
  );
}

async function deleteCategory(id) {
  return await Category.findByIdAndDelete(id);
}

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};