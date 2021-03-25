const orderService = require('../services/order.service');

module.exports = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await orderService.getAllOrders();
            return res.json({
                error: false,
                data: orders
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createOrder: async (req, res) => {
        try {
            const { body } = req;
            if (!body.user) {
                return res.status(400).json({ error: true, message: 'Invalid user' });
            }
            const order = await orderService.createOrder(body.user, body);
            return res.json({
                error: false,
                data: order
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateOrder: async (req, res) => {
        try {
            const { params: { orderId }, body } = req;
            const order = await orderService.updateOrder(orderId, body);
            return res.json({
                error: false,
                data: order
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const { params: { orderId } } = req;
            const order = await orderService.deleteOrder(orderId);
            return res.json({
                error: false,
                data: order
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getOrdersByUserIdNewest: async (req, res) => {
        try {
            const { params: { userId } } = req;
            const orders = await orderService.getOrdersByUserIdNewest(userId);
            return res.json({
                error: false,
                data: orders
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    }
}