import { Schema, model } from "mongoose";

const classroom_types_schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
    type: String,
        required: true,
}
});

export default model("classroom_type", classroom_types_schema);
