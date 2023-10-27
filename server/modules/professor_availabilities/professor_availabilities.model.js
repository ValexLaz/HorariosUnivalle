import { Schema, model } from "mongoose";

const professor_availabilities_schema = new Schema({
    professor_id: {
        type: Schema.Types.ObjectId,
        ref: "professor",
        required: true,
    },
    id_availability: {
        type: Schema.Types.ObjectId,
        ref: "time_availability",
        required: true,
    }
});

export default model("professor_availability", professor_availabilities_schema);
