"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Esquema de la colección "university_programs"
var university_programs_schema = new _mongoose["default"].Schema({
  id: {
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
  faculty_id: {
    type: String,
    required: true,
    ref: 'faculty' // Referencia al modelo "faculties"
  }
});

// Crea el modelo "university_programs" utilizando el esquema
var university_programs_model = _mongoose["default"].model('university_program', university_programs_schema);
var _default = university_programs_model;
exports["default"] = _default;