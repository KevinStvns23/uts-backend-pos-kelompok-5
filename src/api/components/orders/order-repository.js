const Order = require("../../../models/order-schema");

exports.create = async (data) => {
  return await Order.create(data);
};

exports.findAll = async () => {
  return await Order.find();
};

exports.findById = async (id) => {
  return await Order.findById(id);
};

exports.deleteById = async (id) => {
  return await Order.findByIdAndDelete(id);
};

exports.updateById = async (id, data) => {
  return await Order.findByIdAndUpdate(id, data, { new: true });
};