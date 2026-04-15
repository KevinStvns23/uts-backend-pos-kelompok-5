const express = require("express");
const app = express();

app.use(express.json());

// route utama
app.get("/", (req, res) => {
  res.send("Server OK");
});

// 👇 INI WAJIB ADA
const orderRoutes = require("../api/components/orders/order-route");
app.use("/api/orders", orderRoutes);

module.exports = app;