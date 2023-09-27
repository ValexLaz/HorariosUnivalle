"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var _default = {
  PORT: process.env.PORT,
  Database: {
    URI_MONGODB: process.env.URI_MONGODB
  },
  Secret: {
    SECRET_KEY: process.env.SECRET_KEY
  }
};
exports["default"] = _default;