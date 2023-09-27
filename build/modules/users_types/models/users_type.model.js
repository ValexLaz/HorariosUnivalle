"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Esquema de la colección "users_type"
var users_types_schema = new _mongoose["default"].Schema({
  _id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

//Crea el modelo "users_type" utilizando el esquema
var users_types_model = _mongoose["default"].model('users_type', users_types_schema);
var _default = users_types_model;
exports["default"] = _default;