import mongoose, {Schema} from 'mongoose';
// Esquema de la colección "faculties"
const faculties_schema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  building: {
    type: Schema.Types.ObjectId,
    ref: "building",
  },
});

const faculties_model = mongoose.model('faculty', faculties_schema);

export default faculties_model;
