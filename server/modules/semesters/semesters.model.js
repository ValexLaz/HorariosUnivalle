import mongoose from 'mongoose';

// Esquema de la colección "semester"
const semesters_schema = new mongoose.Schema({
<<<<<<< HEAD
  _id: {
    type: String,
  },
=======
>>>>>>> b7398dafa29ac024cd65ab7caf67c6b3e9a252b5
  name: {
    type: String,
  },
  university_program_id: {
    type: String,
    ref: 'university_program', // Referencia al modelo "university_programs"
  },
});

// Crea el modelo "semester" utilizando el esquema
const semesters_model = mongoose.model('semester', semesters_schema);

export default semesters_model;
