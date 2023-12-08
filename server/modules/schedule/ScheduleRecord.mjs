import RecordService from "../../common/RecordService.mjs";
import ScheduleModel from "./models/schedule.model.mjs";
class ScheduleRecord extends RecordService{
    constructor() {
        super(ScheduleModel);
    }
}
export default ScheduleRecord;