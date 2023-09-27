"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.success = exports.error = void 0;
var _httpErrors = _interopRequireDefault(require("http-errors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var success = function success(res) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ok';
  var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;
  res.status(status).json({
    msg: msg,
    data: data
  });
};
exports.success = success;
var error = function error(res) {
  var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var _ref = error ? error : new _httpErrors["default"].InternalServerError(),
    statusCode = _ref.statusCode,
    message = _ref.message;
  statusCode = statusCode ? statusCode : 404;
  res.status(statusCode).json({
    message: message
  });
};
exports.error = error;