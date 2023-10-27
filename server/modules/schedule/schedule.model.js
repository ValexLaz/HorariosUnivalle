import { Schema, model } from "mongoose";

const schedules_schema = new Schema({
    class_professor_id: {
        type: Schema.Types.ObjectId,
        ref: "class_professor",
        required: true,
    },
    classroom_id: {
        type: Schema.Types.ObjectId,
        ref: "classroom",
        required: true,
    },
    availability: [{
        type: Schema.Types.ObjectId,
        ref: "time_availability",
        required: true,
    }]
});

export default model("schedule", schedules_schema);
