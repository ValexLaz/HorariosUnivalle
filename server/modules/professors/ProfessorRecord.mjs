import RecordService from "../../common/RecordService.mjs";
import professorsModel from "./professors.model.mjs";
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