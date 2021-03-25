const PaymentModel = require('../models/payment.model');

module.exports = {
    getAllPayments: async () => {
        return PaymentModel.find({});
    },
    createPayment: async (data) => {
        const payment = new PaymentModel(data);
        return payment.save();
    },
    updatePayment: async (paymentId, data) => {
        return PaymentModel.findByIdAndUpdate(paymentId, data, { new: true });
    },
    deletePayment: async (paymentId) => {
        await PaymentModel.findByIdAndDelete(paymentId);
        return true;
    }
}