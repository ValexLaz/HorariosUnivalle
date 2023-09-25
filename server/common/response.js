import createError from "http-errors";

export const success = (res,status=200,msg = 'ok',data={})=>{
    res.status(status).json({msg,data});
};

export const error = (res,error =null)=>{
    const {statusCode , message} = error ? error : new  createError.InternalServerError();
    res.status(statusCode).json({message});
};