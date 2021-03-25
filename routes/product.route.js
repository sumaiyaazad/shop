const productController = require('../controllers/product.controller');

const productRoutes = (app, router) => {
    router.get('/products', productController.getAllProducts);
    router.get('/products/low', productController.getProductsLowToHigh);
    router.get('/products/discount', productController.getProductsHighDiscount);
    router.get('/products/new', productController.getProductsNewest);
    router.get('/products/category', productController.getProductsByCategoryNewest);
    router.get('/products/category/:categoryId', productController.getProductsByCategoryId);
    router.get('/products/category/:categoryId/low', productController.getProductsByCategoryLowToHigh);
    router.get('/products/category/:categoryId/discount', productController.getProductsByCategoryHighDiscount);

    router.post('/products', app.upload.array('images', 10), productController.createProduct);
    router.put('/products/:productId', app.upload.array('images', 10), productController.updateProduct);
    router.delete('/products/:productId', productController.deleteProduct);

    return router;
};

module.exports = productRoutes;