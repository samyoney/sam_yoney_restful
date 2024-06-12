const UserService = require("../services/UserService");

class UserController {
  static async register(req, res) {
    try {
      const user = await UserService.registerUser(req.body);
      res.status(200).send({
        status: 0,
        message: "Register successful",
        user,
      });
    } catch (error) {
      res.status(200).send({
        status: 1,
        message: error.message,
      });
    }
  }

  static async login(req, res) {
    try {
      const user = await UserService.loginUser(req.body);
      res.status(200).send({
        status: 0,
        message: "Login successful",
        user,
      });
    } catch (error) {
      res.status(200).send({
        status: 1,
        message: error.message,
      });
    }
  }
}

module.exports = UserController;
