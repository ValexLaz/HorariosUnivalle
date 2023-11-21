import RecordService from "../../common/RecordService";
import professorsModel from "./professors.model";
class ProfessorRecord extends RecordService{
    constructor() {
        super(professorsModel);
    }
    findDuplicate(params){
        return this.model.find({
            $or:[
                {name:params.name},
                {email:params.email},
                {ci_number:params.ci_number}
            ]
        })
    }
}
export default ProfessorRecord;