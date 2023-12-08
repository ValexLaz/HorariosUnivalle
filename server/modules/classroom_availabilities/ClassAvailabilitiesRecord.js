import RecordService from "../../common/RecordService.mjs";
import classroom_availabilitiesModel from './classroom_availabilities.model'

class ClassAvailabilitiesRecord extends  RecordService{
    constructor() {
        super(classroom_availabilitiesModel);
    }
}
export default ClassAvailabilitiesRecord