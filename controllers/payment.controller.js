const paymentService = require('../services/payment.service');

module.exports = {
    getAllPayments: async (req, res) => {
        try {
            const payments = await paymentService.getAllPayments();
            return res.json({
                error: false,
                data: payments
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createPayment: async (req, res) => {
        try {
            const { body } = req;
            const payment = await paymentService.createPayment(body);
            return res.json({
                error: false,
                data: payment
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updatePayment: async (req, res) => {
        try {
            const { params: { paymentId }, body } = req;
            const payment = await paymentService.updatePayment(paymentId, body);
            return res.json({
                error: false,
                data: payment
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deletePayment: async (req, res) => {
        try {
            const { params: { paymentId } } = req;
            const payment = await paymentService.deletePayment(paymentId);
            return res.json({
                error: false,
                data: payment
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
}