import {Schema,model} from "mongoose";
// Schema de clase (materia)
const class_schema =  new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    hours_demanded:{
        type:Number,
        required:true
    },
    semester:{
        type:String,
        ref:"semester",
        required:true
    },
    university_program:{
        type:Schema.Types.ObjectId,
        ref:'university_program',
        required:true
    }
});
export default model("class",class_schema);