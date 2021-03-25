const shippingController = require('../controllers/shipping.controller');

const shippingRoutes = (app, router) => {
    router.get('/shippings', shippingController.getShippingMethods);

    router.post('/shippings', shippingController.createShipping);
    router.put('/shippings/:shippingId', shippingController.updateShipping);
    router.delete('/shippings/:shippingId', shippingController.deleteShipping);

    return router;
};

module.exports = shippingRoutes;