const usersRepository = require('./users-repository');
const mongoose = require('mongoose');

async function getUsers() {
  const users = await usersRepository.getUsers();

  return users.map((u) => ({
    id: u._id,
    username: u.username,
    nama_lengkap: u.nama_lengkap,
    alamat: u.alamat,
    no_telp: u.no_telp || '-',
    status: u.status,
  }));
}

async function updateUser(id, data) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return false;
  }

  const existingUser = await usersRepository.getUserById(id);
  if (!existingUser) {
    return false;
  }

  const hasil = await usersRepository.updateUser(id, data);

  if (!hasil) {
    return false;
  }

  return true;
}

async function createUser(dataInput) {
  try {
    dataInput.role = 'kasir';
  
    const userBaru = await usersRepository.createUser(dataInput);
    
  
    return userBaru;
  } catch (err) {
   
    if (err.code === 11000) {
      return false; 
    }
    throw err;
  }
}

module.exports = {
  getUsers,
  updateUser,
  createUser, 
};