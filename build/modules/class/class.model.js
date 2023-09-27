"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
// Schema de clase (materia)
var class_schema = new _mongoose.Schema({
  _id: {
    type: String,
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
  hours_demanded: {
    type: Number,
    required: true
  },
  id_semester: {
    type: String,
    ref: "semester",
    required: true
  }
});
var _default = (0, _mongoose.model)("class", class_schema);
exports["default"] = _default;