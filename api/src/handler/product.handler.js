const productService = require('../service/product.service');

const getProductsHandler = (req, res) => {
    try {
        const products = productService.getAllProducts();
        return products;
    } catch (error) {
        return { error: error.message };
    }
};

const createProductHandler = (req, res) => {
    try {
        const newProduct = productService.createProduct(req.body);
        return newProduct;
    } catch (error) {
        return { error: error.message };
    }
};

const updateProductHandler = (req, res) => {
    try {
        const updatedProduct = productService.updateProduct(req.params.id, req.body);
        return updatedProduct;
    } catch (error) {
        return { error: error.message };
    }
};

const deleteProductHandler = (req, res) => {
    try {
        const deletedProduct = productService.deleteProduct(req.params.id);
        return deletedProduct;
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = {
    getProductsHandler,
    createProductHandler,
    updateProductHandler,
    deleteProductHandler,
};
