const userController = require("../controllers/user.controller");

const userRoutes = (app, router) => {
  router.get("/users", userController.getAllUsers);

  router.post("/users", userController.createUser);
  router.put("/users/:userId", userController.updateUser);
  router.delete("/users/:userId", userController.deleteUser);
  router.post("/otp", userController.sendOTP);
  router.post("/verify", userController.verifyOTP);

  return router;
};

module.exports = userRoutes;
