import RecordService from "../../common/RecordService.mjs";
import Professor_availabilitiesModel from "./professor_availabilities.model";
class ProfessorAvailabilitiesRecord extends RecordService{
    constructor() {
        super(Professor_availabilitiesModel);
    }
}
export  default  ProfessorAvailabilitiesRecord;