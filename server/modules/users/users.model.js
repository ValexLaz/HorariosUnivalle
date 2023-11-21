import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
// Esquema de la colección "users"
const users_schema = new mongoose.Schema({
  name: {
    type: String,

  },
  last_name: {
    type: String,

  },
  password: {
    type: String,

  },
  email: {
    type: String,

  },
  user_type: {
    type: String
  },
  university_program_id: [{
    type: String,
    ref: 'university_program',
  }],
});
users_schema.statics.encrypt_password = async (password)=>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password,salt);
};
users_schema.statics.compare_password = async (password,receive_password)=>{
  return await bcrypt.compare(password,receive_password);
};
users_schema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};
const users_model = mongoose.model('user', users_schema);

export default users_model;
