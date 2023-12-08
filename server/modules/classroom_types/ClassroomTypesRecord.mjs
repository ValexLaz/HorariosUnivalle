import RecordService from "../../common/RecordService.mjs";
import classroom_typesModel from "./classroom_types.model.mjs";
class ClassroomTypesRecord extends RecordService{
    constructor() {
        super(classroom_typesModel);
    }
}
export default ClassroomTypesRecord;