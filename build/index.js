"use strict";

var _db = _interopRequireDefault(require("./config/db.js"));
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = new _app["default"]();
app.listen();
_db["default"].connect();