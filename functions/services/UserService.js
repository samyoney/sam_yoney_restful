// services/UserService.js
const UserRepository = require("../repositories/UserRepository");
const UserModel = require("../models/UserModel");

class UserService {
  static validateUsernameAndPassword(username, password) {
    // eslint-disable-next-line max-len
    const userValid = typeof username === "string" && username.trim().length >= 3;
    const passValid = typeof password === "string" && password.trim().length >= 6;
    return userValid && passValid;
  }

  static validateAdditionalFields(courseId, name, birth) {
    const courseIdValid = true;
    const nameValid = typeof name === "string" && name.trim().length > 0;
    const birthValid = typeof birth === "string" && birth.trim().length > 0;
    return courseIdValid && nameValid && birthValid;
  }

  static async registerUser({username, password, courseId, name, birth}) {
    if (!this.validateUsernameAndPassword(username, password) || !this.validateAdditionalFields(courseId, name, birth)) {
      throw new Error("Invalid input value");
    }

    const existingUser = await UserRepository.getUserByUsername(username);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = new UserModel(username, password, courseId, name, birth);
    await UserRepository.createUser(user);
    return user;
  }

  static async loginUser({username, password}) {
    if (!this.validateUsernameAndPassword(username, password)) {
      throw new Error("Invalid credentials");
    }

    const user = await UserRepository.getUserByUsername(username);
    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }
    return user;
  }
}

module.exports = UserService;
