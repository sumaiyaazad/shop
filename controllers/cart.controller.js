const cartService = require('../services/cart.service');

module.exports = {
    getCartByUserId: async (req, res) => {
        try {
            const { params: { userId } } = req;
            const userCarts = await cartService.getCartByUserId(userId);
            return res.json({
                error: false,
                data: userCarts
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    addToCart: async (req, res) => {
        try {
            const { body } = req;
            const cart = await cartService.addToCart(body);
            return res.json({
                error: false,
                data: cart
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateCart: async (req, res) => {
        try {
            const { params: { cartId }, body } = req;
            const cart = await cartService.updateCart(cartId, body);
            return res.json({
                error: false,
                data: cart
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteCart: async (req, res) => {
        try {
            const { params: { cartId } } = req;
            const cart = await cartService.deleteCart(cartId);
            return res.json({
                error: false,
                data: cart
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
}