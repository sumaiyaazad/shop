const CartModel = require("../models/cart.model");

module.exports = {
  getCartByUserId: async (userId) => {
    return CartModel.find({ user: userId }).populate('product');
  },
  addToCart: async (data) => {
    const cart = new CartModel(data);
    return cart.save();
  },
  updateCart: async (cartId, data) => {
    return CartModel.findByIdAndUpdate(cartId, data, { new: true });
  },
  deleteCart: async (cartId) => {
    await CartModel.findByIdAndDelete(cartId);
    return true;
  },
};
