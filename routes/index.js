const cartRoutes = require('./cart.route');
const categoryRoutes = require('./category.route');
const cityRoutes = require('./city.route');
const locationRoutes = require('./location.route');
const offerRoutes = require('./offer.route');
const orderRoutes = require('./order.route');
const paymentRoutes = require('./payment.route');
const productRoutes = require('./product.route');
const shippingRoutes = require('./shipping.route');
const specificationRoutes = require('./specification.route');
const userRoutes = require('./user.route');


const indexRoutes = (app, router) => {
  cartRoutes(app, router);
  categoryRoutes(app, router);
  cityRoutes(app, router);
  locationRoutes(app, router);
  offerRoutes(app, router);
  orderRoutes(app, router);
  orderRoutes(app, router);
  paymentRoutes(app, router);
  productRoutes(app, router);
  shippingRoutes(app, router);
  specificationRoutes(app, router);
  userRoutes(app, router);

  return router;
};

module.exports = indexRoutes;