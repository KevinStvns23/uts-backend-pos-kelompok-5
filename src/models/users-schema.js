const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    nama_lengkap: { type: String, required: true },
    alamat: { type: String, default: '-' },
    no_telp: { type: String, default: '-' },
    role: { type: String, default: 'kasir' },
    status: { type: String, enum: ['aktif', 'nonaktif'], default: 'aktif' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', usersSchema);