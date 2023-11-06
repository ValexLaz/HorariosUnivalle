import RecordService from "../../common/RecordService";
import classroom_typesModel from "./classroom_types.model";
class ClassroomTypesRecord extends RecordService{
    constructor() {
        super(classroom_typesModel);
    }
}
export default ClassroomTypesRecord;