"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _User = require("../model/User");

class UserController {
  test() {
    const user = new _User.User();
    user.email = '';
  }

}

exports.UserController = UserController;