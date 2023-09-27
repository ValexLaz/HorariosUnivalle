"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Esquema de la colección "semester"
var semesters_schema = new _mongoose["default"].Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  university_program_id: {
    type: String,
    required: true,
    ref: 'university_program' // Referencia al modelo "university_programs"
  }
});

// Crea el modelo "semester" utilizando el esquema
var semesters_model = _mongoose["default"].model('semester', semesters_schema);
var _default = semesters_model;
exports["default"] = _default;