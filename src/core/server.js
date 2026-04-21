const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server OK");
});

const orderRoutes = require("../api/components/orders/order-route");
app.use("/api/orders", orderRoutes);

const reportRoutes = require("../api/components/reports/report-route");
app.use("/api/reports", reportRoutes);

const usersRoutes = require('../api/components/users/users-route');
app.use('/api/users', usersRoutes);

const categoryRoutes = require("../api/components/categories/category-route");
app.use("/api/categories", categoryRoutes);

const productRoutes = require("../api/components/products/product-route");
app.use("/api/products", productRoutes);

module.exports = app;