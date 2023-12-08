import { Schema, model } from "mongoose";

const schedules_schema = new Schema({
    class_professor: {
        type: Schema.Types.ObjectId,
        ref: "class_professor",
        required: true,
    },
    semester:{
        type: Schema.Types.ObjectId,
        ref: "semester",
        required: true,
    },
    university_program:{
        type: Schema.Types.ObjectId,
        ref: "university_program",
        required: true,
    },
    group:{
        type:String,
        required:true
    },
    availability: [{
        type: Schema.Types.ObjectId,
        ref: "working_day",
        required: true,
    }],

});

export default model("schedule", schedules_schema);
