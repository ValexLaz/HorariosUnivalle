import RecordService from "../../common/RecordService.mjs";
import SemestersModel from "./semesters.model";

class SemesterRecord extends RecordService{
    constructor() {
        super(SemestersModel);
    }
}
export  default SemesterRecord;

