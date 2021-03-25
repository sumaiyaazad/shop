const OrderModel = require("../models/order.model");
const CartModel = require("../models/cart.model");
const cartService = require("../services/cart.service");

module.exports = {
  getAllOrders: async () => {
    return OrderModel.find({})
      .populate("location shipping user products.product")
      .exec();
  },
  createOrder: async (userId, data) => {
    const userCarts = await cartService.getCartByUserId(userId);
    console.log(userCarts);
    const cartIds = [];
    const products = [];
    let amount = 0;
    for (const element of userCarts) {
      const total = element.product.price * element.qty;
      amount = amount + total;
      cartIds.push(element._id);
      products.push({
        qty: element.qty,
        price: element.product.price,
        total: total,
        product: element.product._id,
        specification: element.specification
      });
    }
    const orderData = {
      ...data,
      user: userId,
      products,
      amount,
    };
    console.log(orderData);
    const order = new OrderModel(orderData);
    await order.save();
    await CartModel.deleteMany({ _id: { $in: cartIds } });
    return OrderModel.find({ _id: order._id }, null, { sort: { createdAt: -1 } })
    .populate("location shipping products.product")
  },
  updateOrder: async (orderId, data) => {
    return OrderModel.findByIdAndUpdate(orderId, data, { new: true });
  },
  deleteOrder: async (orderId) => {
    await OrderModel.findByIdAndDelete(orderId);
    return true;
  },
  getOrdersByUserIdNewest: async (userId) => {
    return OrderModel.find({ user: userId }, null, { sort: { createdAt: -1 } })
      .populate("location shipping products.product")
      .exec();
  },
};
