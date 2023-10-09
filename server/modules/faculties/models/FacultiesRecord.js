import RecordService from "../../../common/recordService";
import FacultiesModel from "./faculties.model";
class FacultiesRecord extends RecordService{
    constructor() {
        super(FacultiesModel);
    }
}

export default FacultiesRecord;