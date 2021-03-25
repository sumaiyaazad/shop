const orderController = require('../controllers/order.controller');

const orderRoutes = (app, router) => {
    router.get('/orders', orderController.getAllOrders);
    router.get('/orders/:userId/new', orderController.getOrdersByUserIdNewest);

    router.post('/orders', orderController.createOrder);
    router.put('/orders/:orderId', orderController.updateOrder);
    router.delete('/orders/:orderId', orderController.deleteOrder);

    return router;
};

module.exports = orderRoutes;