import RecordService from "../../common/RecordService";
import classroom_availabilitiesModel from './classroom_availabilities.model'

class ClassAvailabilitiesRecord extends  RecordService{
    constructor() {
        super(classroom_availabilitiesModel);
    }
}
export default ClassAvailabilitiesRecord