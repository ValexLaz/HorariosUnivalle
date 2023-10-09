
class ParentController {
    constructor(recordService){
        this.recordService = recordService;
    }
    async create_record(req,res){
       const new_record =  await this.recordService.create_record(req.body);
       this.response(res,new_record);
    }
    async delete_record(req,res){
        const delete_record = await this.recordService.delete_record(req.params.id);
        this.response(res,delete_record)
    }
    async update_record(req,res){
        const {id} = req.params;
        const updated_record = await this.recordService.update_record(id,req.body);
        this.response(res,updated_record);
    }
    async get_all_records(req,res){
        const records = await this.recordService.get_all_records_by_param({})
        this.response(res,records);
    }
    async getRecordById(req,res){
        const records = await this.recordService.
            get_one_record_by_params({_id:req.params.id});
        this.response(res,records);
    }
    response(res,data={statusCode:200}){
        res.status(data.statusCode).json(data);
    }

}