import Semester from "./models/semesters.model.js";
import * as response from "../../common/response.js"
export  const  create_semester  = async  (req,res)=>{
    const {id,name,university_program_id} = req.body;
    try {
        const new_semester = new Semester({
            id:id,
            name:name,
            university_program_id:university_program_id
        });
        const saved_semester = await  new_semester.save();
        response.success(res,saved_semester,"semester created");
    }catch (e) {
        response.error(res);
    }
}
export  const  delete_semester_by_id = async  (req,res)=>{
    const {id} = req.params;
    try {
        const semester_deleted = await Semester.findByIdAndDelete(id,{new:true});1
        response.success(res,semester_deleted,"semester deleted");
    }catch (e) {
        response.error(res);
    }
}
export  const  update_semester  = async  (req,res)=>{
    const semester_data = req.body;
    const {id} = req.params;
    try {
        const semester_update = await Semester.findByIdAndUpdate(id,semester_data,{new:true});
        response.success(res,semester_update);
    }catch (e) {
        response.error(res,{message:e.message});
    }
}
export  const  get_all_semester_by_program  = async  (req,res)=>{
    const {id} = req.params;
    try {
        const semesters = await Semester.find(
            {university_program_id:id});
        response.success(res,semesters);
    }catch (e) {
        response.error(res);
    }
}