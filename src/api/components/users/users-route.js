const express = require('express');
const usersController = require('./users-controller');

const route = express.Router();

// GET: Liat daftar kasir
route.get('/', usersController.getUsers);

// PUT: Edit profil kasir pake ID
route.put('/:id', usersController.updateUser);

// POST: Nambah kasir baru
route.post('/', usersController.createUser); 

module.exports = route;

