let products = [];

const getAllProducts = () => {
    return products;
};

const createProduct = (productData) => {
    const newProduct = {
        id: products.length + 1, // Assuming simple incrementing ID for illustration
        ...productData,
    };
    products.push(newProduct);
    return newProduct;
};

const updateProduct = (id, updatedData) => {
    const productIndex = products.findIndex((product) => product.id === parseInt(id));
    if (productIndex === -1) {
        throw new Error(`Product with id ${id} not found`);
    }

    products[productIndex] = {
        ...products[productIndex],
        ...updatedData,
    };
    return products[productIndex];
};

const deleteProduct = (id) => {
    const productIndex = products.findIndex((product) => product.id === parseInt(id));
    if (productIndex === -1) {
        throw new Error(`Product with id ${id} not found`);
    }

    const deletedProduct = products.splice(productIndex, 1)[0];
    return deletedProduct;
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
