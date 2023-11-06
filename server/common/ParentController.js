
class ParentController {
    constructor(recordService){
        this.recordService = recordService ;
    }
    responseError(res, {message, statusCode} ={}){
        const response  = {
            statusCode:statusCode || 404,
            msg:message || "Internal Server Error"
        }
        return this.response(res,response);
    }
    responseSuccess(res,{data ,message,statusCode }){
        const response = {
            statusCode:statusCode || 200,
            msg:message || 'ok',
            data:data || {},
        }
        return this.response(res,response);
    }
    response(res,data){
        return res.status(data.statusCode).json(data);
    }
    createRecord = async (req,res) =>{
        try {
            const newRecord =await this.recordService.create(req.body);
            console.log(newRecord);
            this.responseSuccess(res,{data:newRecord});
        } catch (e) {
            this.responseError(res,{message:e.message});
        }
    }
    deleteRecordById  = async(req,res)=>{
        try {
            const delete_record = await this.recordService.findByIdAndDelete(req.params.id,{new:true});
            if(!delete_record) return this.responseError(res,{message:"source not found"})
            this.responseSuccess(res, {data:delete_record,message:'source deleted',statusCode:200})
        }catch (e) {
            this.responseError(res,{message:e.message})
        }
    }
    updateRecord  = async(req,res)=>{
        try {
            const {id} = req.params;
            const updatedRecord = await this.recordService.findByIdAndUpdate(id,req.body,{new:true});
            this.responseSuccess(res,{data:updatedRecord})
        }catch (e) {
            this.responseError(res,{message:e.message});
        }
    }
    getAllRecords  = async(req,res)=>{
        try {
            const records = await this.recordService.find({});
            this.responseSuccess(res,{data:records});
        }catch (e) {
            this.responseError(res,{message:e.message})
        }
    }
    getRecordById  = async(req,res)=>{
        try {
            const records = await this.recordService.findById(req.params.id);
            if(!records) return this.responseError(res,{message:"source not found"});
            this.responseSuccess(res,{data:records});
        }catch (e) {
            this.responseError(res,{message:e.message});
        }
    }
}
export default ParentController;

