const express = require('express');
const router = express.Router();

const { getProductsHandler, createProductHandler, updateProductHandler, deleteProductHandler } = require('../handler/product.handler.js');

router.get('/products', getProductsHandler);

router.post('/products', createProductHandler);

router.put('/products/:id', updateProductHandler);

router.delete('/products/:id', deleteProductHandler);

module.exports = router;
