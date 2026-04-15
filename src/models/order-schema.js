const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [
    {
      productName: String,
      qty: Number,
      price: Number,
    },
  ],
  totalPrice: Number,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);