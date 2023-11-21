class RecordService {
    constructor(model){
        this.model = model;
    }
    async create(data){
        return await new this.model(data).save();
    }

}

export default RecordService;