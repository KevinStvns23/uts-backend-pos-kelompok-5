const reportRepository = require('./report-repository');

const calculateRevenue = async () => {
  const orders = await reportRepository.getAllOrders();
  
  let totalRevenue = 0;
  orders.forEach(order => {
      totalRevenue += order.totalPrice || 0; 
  });

  return {
      total_transaksi: orders.length,
      total_pendapatan: totalRevenue
  };
};

const getLowStock = async () => {
  const products = await reportRepository.getLowStockProducts();
  return {
      jumlah_barang: products.length,
      barang: products
  };
};

const getOutOfStock = async () => {
  const products = await reportRepository.getOutOfStockProducts();
  return {
      jumlah_barang: products.length,
      barang: products
  };
};

const getRecentTransactions = async () => {
  const orders = await reportRepository.getRecentOrders(5);
  return {
      jumlah_transaksi: orders.length,
      transaksi: orders
  };
};

module.exports = {
  calculateRevenue,
  getLowStock,
  getOutOfStock,
  getRecentTransactions
};