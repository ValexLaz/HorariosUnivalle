import mongoose from 'mongoose';

// Esquema de la colección "faculties"
const faculties_schema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id_module_id: {
    type: String,
    required: true,
    ref: 'module', // Referencia al modelo "modules"
  },
});

// Crea el modelo "faculties" utilizando el esquema
const faculties_model = mongoose.model('faculty', faculties_schema);

export default faculties_model;
