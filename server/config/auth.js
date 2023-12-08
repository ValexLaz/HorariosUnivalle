import JWT from "jsonwebtoken";
import config from "./config.mjs";

export const generateToken =(payload,timeExpired)=>{
    return JWT.sign(payload, config.Secret.SECRET_KEY, {expiresIn: timeExpired});
}
export const verifyToken = (token)=>{
    return JWT.verify(token,config.Secret.SECRET_KEY);
}