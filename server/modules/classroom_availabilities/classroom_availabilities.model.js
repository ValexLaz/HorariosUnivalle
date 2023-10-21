import { Schema, model } from "mongoose";

const classroom_availabilities_schema = new Schema({
    classroom_id: {
        type: Schema.Types.ObjectId,
        ref: "classroom",
        required: true,
    },
    availability_id: {
        type: Schema.Types.ObjectId,
        ref: "time_availability",
        required: true,
    }
});

export default model("classroom_availability", classroom_availabilities_schema);
