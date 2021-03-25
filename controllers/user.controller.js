const userService = require("../services/user.service");
const Nexmo = require("nexmo");
const nexmo = new Nexmo({
  apiKey: "ade4557d",
  apiSecret: "d1003bec95322088",
});
module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      return res.json({
        error: false,
        data: users,
      });
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      const { body } = req;
      const user = await userService.createUser(body);
      return res.json({
        error: false,
        data: user,
      });
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const {
        params: { userId },
        body,
      } = req;
      const user = await userService.updateUser(userId, body);
      return res.json({
        error: false,
        data: user,
      });
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const {
        params: { userId },
      } = req;
      const user = await userService.deleteUser(userId);
      return res.json({
        error: false,
        data: user,
      });
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  },
  sendOTP: async (req, res) => {
    console.log(req.body.number);
    nexmo.verify.request(
      {
        number: req.body.number,
        brand: "Airtel",
        code_length: "6",
      },
      (err, result) => {
        console.log(err ? err : result);
        if (result) {
          return res.json({
            error: false,
            data: result,
          });
        } else {
          return res.status(400).json({ error: true, message: err });
        }
      }
    );
  },
  verifyOTP: async (req, res) => {
    console.log(req.body.REQUEST_ID);
    nexmo.verify.check(
      {
        request_id: req.body.REQUEST_ID,
        code: req.body.code,
      },
      (err, result) => {
        if (result) {
          return res.json({
            error: false,
            data: result,
          });
        } else {
          return res.status(400).json({ error: true, message: err });
        }
      }
    );
  },
};
