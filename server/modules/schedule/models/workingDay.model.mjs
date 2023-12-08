import { Schema, model } from "mongoose";

const workingDaySchema = new Schema({
    day: {
        type:String,
        required: true,
    },
    start_time:{
        type:String,
        required: true
    },
    end_time:{
        type:String,
        required: true
    },
    class_professor:{
        type:Schema.Types.ObjectId,
        ref:"class_professor",
        required:true
    },
    classroom:{
        type:Schema.Types.ObjectId,
        ref:"classroom",
        required:true
    },
    group:{
        type:String,
        required:true
    },
    semester:{
        type:Schema.Types.ObjectId,
        ref:"semester",
        required:true
    },
    uniProgram:{
        type:Schema.Types.ObjectId,
        ref:"university_program",
        required:true
    }
});

export default model("working_day", workingDaySchema);
