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

module.exports = {
  getRevenue,
  getLowStock
};