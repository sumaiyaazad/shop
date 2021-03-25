const productService = require('../services/product.service');
const { moveFile } = require('../utils/helpers');

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            console.log("Inside controller");
            const products = await productService.getAllProducts();
            return res.json({
                error: false,
                data: products
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createProduct: async (req, res) => {
        try {
            const { body, files } = req;
            if (files) {
                body.images = await Promise.all(files.map(file => moveFile(file, 'product')));
            }
            console.log(body);
            const product = await productService.createProduct(body);
            return res.json({
                error: false, 
                data: product
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { params: { productId }, body, files } = req;
            if (files) {
                const images = await Promise.all(files.map(file => moveFile(file, 'product')));
                body.images = [...images, ...(body.images || [])];
            }
            const product = await productService.updateProduct(productId, body);
            return res.json({
                error: false,
                data: product
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const { params: { productId } } = req;
            const product = await productService.deleteProduct(productId);
            return res.json({
                error: false,
                data: product
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getProductsLowToHigh: async (req, res) => {
        try {
            const products = await productService.getProductsLowToHigh();
            return res.json({
                error: false,
                data: products
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getProductsHighDiscount: async (req, res) => {
        try {
            const products = await productService.getProductsHighDiscount();
            return res.json({
                error: false,
                data: products
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getProductsNewest: async (req, res) => {
        try {
            const products = await productService.getProductsNewest();
            return res.json({
                error: false,
                data: products
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getProductsByCategoryNewest: async (req, res) => {
        try {
            const products = await productService.getProductsByCategoryNewest();
            return res.json({
                error: false,
                data: products
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getProductsByCategoryId: async (req, res) => {
        try {
            const { params: { categoryId } } = req;
            const products = await productService.getProductsByCategoryId(categoryId);
            return res.json({
                error: false,
                data: products
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getProductsByCategoryLowToHigh: async (req, res) => {
        try {
            const { params: { categoryId } } = req;
            const products = await productService.getProductsByCategoryLowToHigh(categoryId);
            return res.json({
                error: false,
                data: products
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getProductsByCategoryHighDiscount: async (req, res) => {
        try {
            const { params: { categoryId } } = req;
            const products = await productService.getProductsByCategoryHighDiscount(categoryId);
            return res.json({
                error: false,
                data: products
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
}