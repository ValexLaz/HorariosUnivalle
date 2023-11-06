import RecordService from "../../common/RecordService";
import BuildingModels from "./building.models";
class BuildingRecord extends RecordService{
    constructor() {
        super(BuildingModels);
    }
}
export default BuildingRecord;