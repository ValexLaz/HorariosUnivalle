class RecordService {
    constructor(model){
        this.model = model;
        return new Proxy(this, {
            get(target, prop) {
                if (target.model[prop] instanceof Function) {
                    return target.model[prop].bind(target.model);
                }
                return target[prop];
            }
        });
    }
    async create(data){
        return await new this.model(data).save();
    }

}

export default RecordService;