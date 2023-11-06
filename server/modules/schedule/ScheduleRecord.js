import RecordService from "../../common/RecordService";
import ScheduleModel from "./schedule.model";
class ScheduleRecord extends RecordService{
    constructor() {
        super(ScheduleModel);
    }
}
export default ScheduleRecord;