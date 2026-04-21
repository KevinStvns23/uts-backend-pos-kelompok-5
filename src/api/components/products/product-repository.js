const Product = require('../../../models/product-schema');

const getProducts = async () => {
  return Product.find({});
};

const getProduct = async (id) => {
  return Product.findById(id);
};

const createProduct = async (name, price, stock) => {
  return Product.create({ name, price, stock });
};

const updateProduct = async (id, name, price, stock) => {
  return Product.findByIdAndUpdate(id, { name, price, stock }, { new: true });
};

const deleteProduct = async (id) => {
  return Product.findByIdAndDelete(id);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};