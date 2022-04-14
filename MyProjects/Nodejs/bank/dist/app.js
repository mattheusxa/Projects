"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const URL = process.env.DB_COMN;

class App {
  constructor() {
    this.express = (0, _express.default)();
    this.middleware();
    this.database();
    this.routes();
  }

  middleware() {
    this.express.use(_express.default.json());
    this.express.use((0, _cors.default)());
  }

  database() {
    _mongoose.default.connect(`mongodb:${URL}`, () => {
      console.log('Connect to database');
    });
  }

  routes() {
    this.express.get('/', (req, res) => {
      res.send('Hello Worl');
    });
  }

}

var _default = new App().express;
exports.default = _default;