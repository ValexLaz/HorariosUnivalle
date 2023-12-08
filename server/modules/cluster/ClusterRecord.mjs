import RecordService from "../../common/RecordService.mjs";
import clusterModel from "./cluster.model.mjs";
class ClusterRecord extends  RecordService{
    constructor() {
        super(clusterModel);
    }
}
export  default  ClusterRecord;