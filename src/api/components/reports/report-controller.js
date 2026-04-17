// Mengambil model/database buatan Kevin
const Order = require('../../../models/order-schema');

// SEKARANG KITA NYALAKAN KARENA FILE YOVAN SUDAH ADA
const Product = require('../../../models/product-schema'); 

const getRevenue = async (req, res, next) => {
  try {
    const orders = await Order.find({}); 
    
    let totalRevenue = 0;
    orders.forEach(order => {
        totalRevenue += order.totalPrice || 0; 
    });

    return res.status(200).json({
        message: "Laporan Pendapatan Berhasil Ditarik",
        total_transaksi: orders.length,
        total_pendapatan: totalRevenue
    });
  } catch (error) {
    return next(error);
  }
};

const getLowStock = async (req, res, next) => {
  try {
    // FITUR ASLI: Cari barang yang stoknya kurang dari 5
    const lowStockProducts = await Product.find({ stock: { $lt: 5 } });

    return res.status(200).json({
        message: "Daftar Barang Stok Menipis",
        jumlah_barang: lowStockProducts.length,
        barang: lowStockProducts
    });
  } catch (error) {
    return next(error);
  }
};

// Barang Habis Total (Stok = 0)
const getOutOfStock = async (req, res, next) => {
  try {
    const outOfStockProducts = await Product.find({ stock: 0 });

    return res.status(200).json({
        message: "Daftar Barang Habis (Kosong)",
        jumlah_barang: outOfStockProducts.length,
        barang: outOfStockProducts
    });
  } catch (error) {
    return next(error);
  }
};

// 5 Transaksi Terakhir
const getRecentTransactions = async (req, res, next) => {
  try {
    // Mencari pesanan, diurutkan dari yang paling baru (createdAt: -1), dan dibatasi 5 saja
    const recentOrders = await Order.find({}).sort({ createdAt: -1 }).limit(5);

    return res.status(200).json({
        message: "5 Transaksi Terakhir",
        jumlah_transaksi: recentOrders.length,
        transaksi: recentOrders
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