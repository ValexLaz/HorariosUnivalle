import { Schema, model } from "mongoose";

const classrooms_schema = new Schema({
    code: {
        type: String,
        required: true,
    },
    classroom_type: {
        type: Schema.Types.ObjectId,
        ref: "classroom_type",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    building: {
        type: Schema.Types.ObjectId,
        ref: "building",
        required: true,
    }
});

export default model("classroom", classrooms_schema);
