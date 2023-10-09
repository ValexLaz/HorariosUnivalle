class RecordService {
    constructor(model){
        this.model = model;
    }
    buildResponseError(message,statusCode=404){
        return {statusCode,message : message}
    }
    buildResponseSuccess(data={},message="ok",statusCode = 200){
        return {message,statusCode,data}
    }
    async create_record(data){
        try {
            const new_record = await new this.model(data).save();
            return this.buildResponseSuccess(new_record,`new ${this.model.collection.name} created`)
        }catch (e) {
            console.error(e)
            return  this.buildResponseError(e.message)
        }
    }
    async delete_record_by_id(id){
        try {
            const record_deleted = await this.model.findByIdAndDelete(id);
            return this.buildResponseSuccess(
                record_deleted,
                "record deleted");
        } catch (e) {
            console.error(e)
            return this.buildResponseError(e.message);
        }
    }
    async update_record(id,data){
        try {
            const record_update =  await this.model.findByIdAndUpdate(id,data,{new:true});
            return  this.buildResponseSuccess(record_update)
        }catch (e) {
            console.error(e)
            return  this.buildResponseError(e.message);
        }
    }
    async get_all_records_by_param(params){
        try {
            const records =   await this.model.find(params);
            return  this.buildResponseSuccess(records,`${records.lean} records`);
        }catch (e) {
            console.error(e)
            return this.buildResponseError(e.message);
        }
    }
    async get_one_record_by_params(params){
        try {
            const record = await this.model.findOne(params)
            return this.buildResponseSuccess(record);
        }catch (e) {
            console.error(e)
            return  this.buildResponseError(e.message);
        }
    }
}

export default RecordService;