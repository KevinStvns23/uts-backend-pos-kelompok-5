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

module.exports = app;