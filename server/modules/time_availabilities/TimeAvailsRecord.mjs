import RecordService from "../../common/RecordService.mjs";
import Time_availabilities from "./time_availabilities.mjs";
class TimeAvailsRecord extends RecordService{
    constructor() {
        super(Time_availabilities);
    }
}
export default TimeAvailsRecord;
