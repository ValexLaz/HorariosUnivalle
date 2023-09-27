"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Esquema de la colección "faculties"
var faculties_schema = new _mongoose["default"].Schema({
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
  },
  id_module_id: {
    type: String,
    required: true,
    ref: 'module' // Referencia al modelo "modules"
  }
});

// Crea el modelo "faculties" utilizando el esquema
var faculties_model = _mongoose["default"].model('faculty', faculties_schema);
var _default = faculties_model;
exports["default"] = _default;