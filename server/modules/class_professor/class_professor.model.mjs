import { Schema, model } from "mongoose";

const class_professor_schema = new Schema({
    class: {
        type: Schema.Types.ObjectId,
        ref: "class",
        required: true,
    },
    professor: {
        type: Schema.Types.ObjectId,
        ref: "professor",
        required: true,
    }
});

export default model("class_professor", class_professor_schema);
