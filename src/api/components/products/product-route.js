const express = require('express');
const productControllers = require('./product-controller');

const router = express.Router();

router.get('/', productControllers.getProducts);
router.get('/:id', productControllers.getProduct);
router.post('/', productControllers.createProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

module.exports = router;
