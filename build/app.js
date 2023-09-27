"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config/config.js"));
var _userRoutes = _interopRequireDefault(require("./modules/users/user.routes.js"));
var _semestersRoutes = _interopRequireDefault(require("./modules/semesters/semesters.routes.js"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _app = /*#__PURE__*/new WeakMap();
var _PORT = /*#__PURE__*/new WeakMap();
var _setRoutes = /*#__PURE__*/new WeakSet();
var _configure = /*#__PURE__*/new WeakSet();
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    _classPrivateMethodInitSpec(this, _configure);
    _classPrivateMethodInitSpec(this, _setRoutes);
    _classPrivateFieldInitSpec(this, _app, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _PORT, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _app, (0, _express["default"])());
    _classPrivateFieldSet(this, _PORT, _config["default"].PORT);
    _classPrivateMethodGet(this, _configure, _configure2).call(this);
    _classPrivateMethodGet(this, _setRoutes, _setRoutes2).call(this);
  }
  _createClass(App, [{
    key: "listen",
    value: function listen() {
      var _this = this;
      _classPrivateFieldGet(this, _app).listen(_classPrivateFieldGet(this, _PORT), function (error) {
        console.log("server is runnin in port ", _classPrivateFieldGet(_this, _PORT));
      });
    }
  }]);
  return App;
}();
function _setRoutes2() {
  _classPrivateFieldGet(this, _app).use('/api/user', _userRoutes["default"]);
  _classPrivateFieldGet(this, _app).use('/api/semester', _semestersRoutes["default"]);
}
function _configure2() {
  _classPrivateFieldGet(this, _app).use((0, _morgan["default"])('dev'));
  _classPrivateFieldGet(this, _app).use(_express["default"].json());
}
var _default = App;
exports["default"] = _default;