const express = require('express');
const router = express.Router();
const reportController = require('./report-controller');

// Rute untuk melihat total pendapatan
router.get('/revenue', reportController.getRevenue);

// Rute untuk melihat barang yang stoknya mau habis
router.get('/low-stock', reportController.getLowStock);

module.exports = router;