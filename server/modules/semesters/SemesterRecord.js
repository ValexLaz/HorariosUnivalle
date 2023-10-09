import RecordService from "../../common/recordService";
import SemestersModel from "./semesters.model";

class SemesterRecord extends RecordService{
    constructor() {
        super(SemestersModel);
    }
}
export  default SemesterRecord;

