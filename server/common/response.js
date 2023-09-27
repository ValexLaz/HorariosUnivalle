import createError from "http-errors";

export const success = (res,data={},msg = 'ok',status=200)=>{
    res.status(status).json({msg,data});
};

export const error = (res,error =null)=>{
    let {statusCode , message} = error ? error : new  createError.InternalServerError();
    statusCode = statusCode ? statusCode : 404;
    res.status(statusCode).json({message});
};