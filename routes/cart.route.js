const cartController = require('../controllers/cart.controller');

const cartRoutes = (app, router) => {
    router.get('/carts/:userId', cartController.getCartByUserId);
    router.post('/carts', cartController.addToCart);
    router.put('/carts/:cartId', cartController.updateCart);
    router.delete('/carts/:cartId', cartController.deleteCart);
    return router;
};

module.exports = cartRoutes;