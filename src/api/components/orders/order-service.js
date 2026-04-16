const orderRepository = require("./order-repository");

exports.createOrder = async (data) => {
  return await orderRepository.create(data);
};

exports.getOrders = async () => {
  return await orderRepository.findAll();
};

exports.getOrderById = async (id) => {
  return await orderRepository.findById(id);
};

exports.deleteOrder = async (id) => {
  return await orderRepository.deleteById(id);
};

exports.updateOrder = async (id, data) => {
  return await orderRepository.updateById(id, data);
};