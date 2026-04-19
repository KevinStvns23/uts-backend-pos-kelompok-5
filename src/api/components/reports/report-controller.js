const reportService = require('./report-service');

const getRevenue = async (req, res, next) => {
  try {
    const result = await reportService.calculateRevenue();
    return res.status(200).json({
        message: "Laporan Pendapatan Berhasil Ditarik",
        ...result
    });
  } catch (error) {
    return next(error);
  }
};

const getLowStock = async (req, res, next) => {
  try {
    const result = await reportService.getLowStock();
    return res.status(200).json({
        message: "Daftar Barang Stok Menipis",
        ...result
    });
  } catch (error) {
    return next(error);
  }
};

const getOutOfStock = async (req, res, next) => {
  try {
    const result = await reportService.getOutOfStock();
    return res.status(200).json({
        message: "Daftar Barang Habis (Kosong)",
        ...result
    });
  } catch (error) {
    return next(error);
  }
};

const getRecentTransactions = async (req, res, next) => {
  try {
    const result = await reportService.getRecentTransactions();
    return res.status(200).json({
        message: "5 Transaksi Terakhir",
        ...result
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getRevenue,
  getLowStock,
  getOutOfStock,
  getRecentTransactions
};