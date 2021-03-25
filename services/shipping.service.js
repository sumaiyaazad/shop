const ShippingModel = require('../models/shipping.model');

module.exports = {
    getShippingMethods: async () => {
        return ShippingModel.find({});
    },
    createShipping: async (data) => {
        const shipping = new ShippingModel(data);
        return shipping.save();
    },
    updateShipping: async (shippingId, data) => {
        return ShippingModel.findByIdAndUpdate(shippingId, data, { new: true });
    },
    deleteShipping: async (shippingId) => {
        await ShippingModel.findByIdAndDelete(shippingId);
        return true;
    }
}