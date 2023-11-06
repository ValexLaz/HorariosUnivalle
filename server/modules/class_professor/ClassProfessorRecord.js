import RecordService from "../../common/RecordService";
import class_professorModel from "./class_professor.model";

class ClassProfessorRecord  extends RecordService{
    constructor() {
        super(class_professorModel);
    }
}
export default ClassProfessorRecord;