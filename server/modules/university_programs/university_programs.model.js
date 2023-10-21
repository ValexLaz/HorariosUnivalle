import mongoose from 'mongoose';
//Carreras (Ing. de sistemas , Biomedica,etc)
// Esquema de la colección "university_programs"
const university_programs_schema= new mongoose.Schema({
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

const university_programs_model = mongoose.model('university_program', university_programs_schema);

export default university_programs_model;
