const orderService = require('../service/order.service');

const getOrdersHandler = (req, res) => {
    try {
        const orders = orderService.getAllOrders();
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createOrderHandler = (req, res) => {
    try {
        const newOrder = orderService.createOrder(req.body.orderItems);
        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const updateOrderHandler = (req, res) => {
    try {
        const updatedOrder = orderService.updateOrder(req.params.id, req.body.updatedItems);
        return res.status(200).json(updatedOrder);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const deleteOrderHandler = (req, res) => {
    try {
        const deletedOrder = orderService.deleteOrder(req.params.id);
        return res.status(200).json(deletedOrder);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getOrdersHandler,
    createOrderHandler,
    updateOrderHandler,
    deleteOrderHandler,
};