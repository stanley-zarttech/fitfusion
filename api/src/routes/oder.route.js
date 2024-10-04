const express = require('express');
const router = express.Router();

const { getOrdersHandler, createOrderHandler, updateOrderHandler, deleteOrderHandler } = require('../handler/order.handler.js');

router.get('/orders', getOrdersHandler);

router.post('/orders', createOrderHandler);

router.put('/orders/:id', updateOrderHandler);

router.delete('/orders/:id', deleteOrderHandler);

module.exports = router;
