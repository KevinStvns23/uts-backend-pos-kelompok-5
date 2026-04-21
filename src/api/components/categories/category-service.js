const categoryRepository = require('./category-repository');

async function createCategory(name, description) {
  return await categoryRepository.createCategory(name, description);
}

async function getCategories() {
  return await categoryRepository.getCategories();
}

async function getCategoryById(id) {
  return await categoryRepository.getCategoryById(id);
}

async function updateCategory(id, name, description) {
  return await categoryRepository.updateCategory(id, name, description);
}

async function deleteCategory(id) {
  return await categoryRepository.deleteCategory(id);
}

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};