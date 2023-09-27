import * as response from "../../common/response.js";
import Class  from "class.model.js";
export const update_class = async (req,res) => {
    const data_class = req.body;
    const {id} = req.params;
    try {
        const class_update = await Class.findByIdAndUpdate(id,data_class,{new:true});
        response.success(res,class_update);
    }catch (e) {
        response.error(res,{message:e.message});
    }
};
export const delete_class_by_id = async (req,res) => {
    const {id} = req.params;
    try {
        const class_deleted = await Class.findByIdAndDelete(id);
        response.success(res,class_deleted,`class deleted ${class_deleted._id}`);
    }catch (e) {
        response.error(res,{message:e.message});
    }
};
export const get_all_class_by_semester = async (req,res) => {
    const {id} = req.params;
    try {
        const classes  = await  Class.find({id_semester:id});
        if(!classes) response.error(res,{statusCode:500,message:"no classes found"});
        response.success(res,classes);
    }catch (e) {
        response.error(res,{message:e.message});
    }
};
export const create_class = async (req,res)=>{
    const {_id,name,description,hours_demanded,id_semester} = req.body;
    try {
        const new_class = new Class({
           _id:_id,
           name:name,
           description:description,
           hours_demanded:hours_demanded,
           id_semester:id_semester
        });
        const saved_class = await new_class.save();
        response.success(res,saved_class,"class created");
    }catch (e) {
        response.error(res,{message:e.message});
    }
}