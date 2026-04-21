const User = require('../../../models/users-schema');

async function getUsers() {
  return User.find({ role: 'kasir' }).lean();
}

async function getUserById(id) {
  return User.findById(id).lean();
}

async function updateUser(id, dataUpdate) {
  return User.findByIdAndUpdate(id, dataUpdate, {
    new: true,
  }).lean();
}


async function createUser(dataBaru) {
  // Pake .create buat nambah data ke MongoDB
  return User.create(dataBaru);
}

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  createUser, 
};