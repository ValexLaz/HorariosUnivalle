import Users_type from "../../users_types/users_type.model";
import * as response from "../../../common/response.js";
export const verify_super_admin = async (req,res,next)=>{
    const {users_type_name} = req.userData;
    console.log(req.userData);
    try{
        if(users_type_name === "Superadministrador") return next();
        response.error(res,{statusCode:401,message:`access denied to user type ${users_type_name}`});
    }catch (e) {
        response.error(res,{statusCode:404,message:e.message});
    }
};