import RecordService from "../../common/recordService";


class ClassRecord extends RecordService{
    constructor(model) {
        super(model);
        console.log(model)
    }
}

export default ClassRecord;