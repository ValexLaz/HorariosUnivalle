import RecordService from "../../common/RecordService.mjs";
import class_professorModel from "./class_professor.model.mjs";

class ClassProfessorRecord  extends RecordService{
    constructor() {
        super(class_professorModel);
    }
}
export default ClassProfessorRecord;