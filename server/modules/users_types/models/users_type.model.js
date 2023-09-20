import mongoose from "mongoose";

//Esquema de la colección "users_type"
const users_types_schema = new mongoose.Schema({
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
  });
  
  //Crea el modelo "users_type" utilizando el esquema
  const users_types_model = mongoose.model('users_type', users_types_schema);
  
  export default users_types_model;