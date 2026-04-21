const express = require('express');
const router = express.Router();
const reportController = require('./report-controller');

// Rute untuk melihat total pendapatan
router.get('/revenue', reportController.getRevenue);

// Rute untuk melihat barang yang stoknya mau habis
router.get('/low-stock', reportController.getLowStock);

// Rute untuk melihat barang yang stoknya 0
router.get('/out-of-stock', reportController.getOutOfStock);

// Rute untuk melihat 5 transaksi terakhir
router.get('/recent-transactions', reportController.getRecentTransactions);

module.exports = router;