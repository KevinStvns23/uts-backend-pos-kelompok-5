const express = require('express');
const categoryController = require('./category-controller');

const route = express.Router();

route.post('/', categoryController.createCategory);
route.get('/', categoryController.getCategories);
route.get('/:id', categoryController.getCategoryById);
route.put('/:id', categoryController.updateCategory);
route.delete('/:id', categoryController.deleteCategory);

module.exports = route;