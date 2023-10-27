import * as JWT from "../config/auth.js";
import * as response from "../common/response.js";
export const verify =async (req,res,next)=>{
    try {
        const token  = req.headers.authorization;
        req.userData = JWT.verifyToken(token);
        next();
    }catch (e) {
        response.error(res,{statusCode:401,message:e.message});
    }
};