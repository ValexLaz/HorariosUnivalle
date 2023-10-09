import mongoose from 'mongoose';

// Esquema de la colección "semester"
const semesters_schema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  university_program_id: {
    type: String,
    required: true,
    ref: 'university_program', // Referencia al modelo "university_programs"
  },
});

// Crea el modelo "semester" utilizando el esquema
const semesters_model = mongoose.model('semester', semesters_schema);

export default semesters_model;