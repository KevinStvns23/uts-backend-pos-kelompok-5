const productRepository = require('./product-repository');

const getProducts = async () => {
  return await productRepository.getProducts();
};

const getProduct = async (id) => {
  return await productRepository.getProduct(id);
};

const createProduct = async (name, price, stock) => {
  return await productRepository.createProduct(name, price, stock);
};

const updateProduct = async (id, name, price, stock) => {
  return await productRepository.updateProduct(id, name, price, stock);
};

const deleteProduct = async (id) => {
  return await productRepository.deleteProduct(id);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};