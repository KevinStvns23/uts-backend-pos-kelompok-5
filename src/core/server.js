const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server OK");
});

const orderRoutes = require("../api/components/orders/order-route");
app.use("/api/orders", orderRoutes);

module.exports = app;