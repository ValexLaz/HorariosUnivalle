import RecordService from "../../common/recordService";
import Class from "./class.model.js";

class ClassRecord extends RecordService{
    constructor() {
        super(Class);
    }

}

export default ClassRecord;