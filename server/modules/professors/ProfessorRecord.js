import RecordService from "../../common/RecordService";
import professorsModel from "./professors.model";
class ProfessorRecord extends RecordService{
    constructor() {
        super(professorsModel);
    }
}
export default ProfessorRecord;