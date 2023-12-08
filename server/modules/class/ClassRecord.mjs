import RecordService from "../../common/RecordService.mjs";
import ClassModel from "./class.model.mjs";
class ClassRecord extends RecordService{
    constructor() {
        super(ClassModel);
    }
}
export default ClassRecord;