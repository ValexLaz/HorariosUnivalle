import mongoose from 'mongoose';
// Esquema de la colección "faculties"
const faculties_schema = new mongoose.Schema({
<<<<<<< HEAD
  _id: {
    type: String,

  },
=======
>>>>>>> b7398dafa29ac024cd65ab7caf67c6b3e9a252b5
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  id_module_id: {
    type: String,
    ref: 'module', // Referencia al modelo "modules"
  },
});
// Crea el modelo "faculties" utilizando el esquema
const faculties_model = mongoose.model('faculty', faculties_schema);

export default faculties_model;
