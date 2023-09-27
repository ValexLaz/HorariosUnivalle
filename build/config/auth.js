"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var generateToken = function generateToken(payload, timeExpired) {
  return _jsonwebtoken["default"].sign(payload, _config["default"].Secret.SECRET_KEY, {
    expiresIn: timeExpired
  });
};
exports.generateToken = generateToken;
var verifyToken = function verifyToken(token) {
  return _jsonwebtoken["default"].verify(token, _config["default"].Secret.SECRET_KEY);
};
exports.verifyToken = verifyToken;