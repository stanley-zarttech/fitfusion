const getAllOrders = () => {
    return orders;
};

const createOrder = (orderItems) => {
    const newOrder = {
        id: orders.length + 1,
        items: orderItems,
        timestamp: new Date(),
    };
    orders.push(newOrder);
    return newOrder;
};

const updateOrder = (id, updatedItems) => {
    const orderIndex = orders.findIndex((order) => order.id === parseInt(id));
    if (orderIndex === -1) {
        throw new Error(`Order with id ${id} not found`);
    }

    orders[orderIndex].items = updatedItems;
    return orders[orderIndex];
};

const deleteOrder = (id) => {
    const orderIndex = orders.findIndex((order) => order.id === parseInt(id));
    if (orderIndex === -1) {
        throw new Error(`Order with id ${id} not found`);
    }

    const deletedOrder = orders.splice(orderIndex, 1)[0];
    return deletedOrder;
};

module.exports = {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
};