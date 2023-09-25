import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
// Esquema de la colección "users"
const users_schema = new mongoose.Schema({
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
users_schema.statics.encrypt_password = async (password)=>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password,salt);
};
users_schema.statics.compare_password = async (password,receive_password)=>{
  return await bcrypt.compare(password,receive_password);
};
// Crea el modelo "users" utilizando el esquema
const users_model = mongoose.model('user', users_schema);

export default users_model;
