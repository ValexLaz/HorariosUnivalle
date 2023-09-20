import mongoose from 'mongoose';

// Esquema de la colección "university_programs"
const university_programs_schema= new mongoose.Schema({
  id: {
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
  faculty_id: {
    type: String,
    required: true,
    ref: 'faculty', // Referencia al modelo "faculties"
  },
});

// Crea el modelo "university_programs" utilizando el esquema
const university_programs_model = mongoose.model('university_program', university_programs_schema);

export default university_programs_model;
