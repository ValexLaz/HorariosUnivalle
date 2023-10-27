import mongoose from 'mongoose';
//Carreras (Ing. de sistemas , Biomedica,etc)
// Esquema de la colección "university_programs"
const university_programs_schema= new mongoose.Schema({
<<<<<<< HEAD
  id: {
    type: String,
    unique: true,

  },
=======
>>>>>>> b7398dafa29ac024cd65ab7caf67c6b3e9a252b5
  name: {
    type: String,

  },
  description: {
    type: String,

  },
  faculty_id: {
    type: String,

    ref: 'faculty', // Referencia al modelo "faculties"
  },
});

const university_programs_model = mongoose.model('university_program', university_programs_schema);

export default university_programs_model;
