const Order = require('../../../models/order-schema');
const Product = require('../../../models/product-schema'); 


const getAllOrders = async () => {
  return await Order.find({});
};

const getLowStockProducts = async () => {
  return await Product.find({ stock: { $lt: 5 } });
};

const getOutOfStockProducts = async () => {
  return await Product.find({ stock: 0 });
};

const getRecentOrders = async (limitNumber) => {
  return await Order.find({}).sort({ createdAt: -1 }).limit(limitNumber);
};

module.exports = {
  getAllOrders,
  getLowStockProducts,
  getOutOfStockProducts,
  getRecentOrders
};