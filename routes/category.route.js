const categoryController = require('../controllers/category.controller');

const categoryRoutes = (app, router) => {
    router.get('/categories', categoryController.getAllCategories);

    router.post('/categories', app.upload.single('image'), categoryController.createCategory);
    router.put('/categories/:categoryId', app.upload.single('image'), categoryController.updateCategory);
    router.delete('/categories/:categoryId', categoryController.deleteCategory);

    return router;
};

module.exports = categoryRoutes;