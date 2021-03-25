const paymentController = require('../controllers/payment.controller');

const paymentRoutes = (app, router) => {
    router.get('/payments', paymentController.getAllPayments);

    router.post('/payments', paymentController.createPayment);
    router.put('/payments/:paymentId', paymentController.updatePayment);
    router.delete('/payments/:paymentId', paymentController.deletePayment);

    return router;
};

module.exports = paymentRoutes;