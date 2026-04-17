const usersService = require('./users-service');

async function getUsers(req, res, next) {
  try {
    const data = await usersService.getUsers();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    return next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    const id = req.params.id;
    const { username, nama_lengkap, alamat, no_telp, status } = req.body;

    if (!username && !nama_lengkap && !alamat && !no_telp && !status) {
      return res.status(400).json({
        success: false,
        message: 'Data tidak boleh kosong',
      });
    }

    const berhasil = await usersService.updateUser(id, {
      username,
      nama_lengkap,
      alamat,
      no_telp,
      status,
    });

    if (!berhasil) {
      return res.status(404).json({
        success: false,
        message: 'Data tidak ditemukan',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Berhasil diupdate',
    });

  } catch (err) {
    return next(err);
  }
}
async function createUser(req, res, next) {
  try {
    const { username, nama_lengkap, alamat, no_telp, status } = req.body;

    // Validasi input minimal (Username dan nama lengkap harus ada)
    if (!username || !nama_lengkap) {
      return res.status(400).json({
        success: false,
        message: 'Username dan Nama Lengkap wajib diisi',
      });
    }

    // Panggil Service buat bikin data
    const berhasil = await usersService.createUser({
      username,
      nama_lengkap,
      alamat,
      no_telp,
      status,
    });

    if (!berhasil) {
      return res.status(409).json({
        success: false,
        message: 'Gagal! Username sudah terpakai',
      });
    }

    return res.status(201).json({
      success: true,
      message: 'data kasir baru berhasil ditambah',
    });

  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getUsers,
  updateUser,
  createUser, 
};