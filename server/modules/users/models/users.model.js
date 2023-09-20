import mongoose from 'mongoose';

// Esquema de la colección "users"
const users_schema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  users_type_id: {
    type: String,
    required: true,
    ref: 'users_type', // Referencia al modelo users_type
  },
  university_program_id: [{
    type: String,
    required: true,
    ref: 'university_program', // Referencia al modelo university_programs
  }],
});

// Crea el modelo "users" utilizando el esquema
const users_model = mongoose.model('user', users_schema);

export default users_model;
