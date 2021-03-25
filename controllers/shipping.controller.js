const shippingService = require('../services/shipping.service');

module.exports = {
    getShippingMethods: async (req, res) => {
        try {
            const shippingMethods = await shippingService.getShippingMethods();
            return res.json({
                error: false,
                data: shippingMethods
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createShipping: async (req, res) => {
        try {
            const { body } = req;
            const shipping = await shippingService.createShipping(body);
            return res.json({
                error: false,
                data: shipping
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateShipping: async (req, res) => {
        try {
            const { params: { shippingId }, body } = req;
            const shipping = await shippingService.updateShipping(shippingId, body);
            return res.json({
                error: false,
                data: shipping
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteShipping: async (req, res) => {
        try {
            const { params: { shippingId } } = req;
            const shipping = await shippingService.deleteShipping(shippingId);
            return res.json({
                error: false,
                data: shipping
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
}