import RecordService from "../../common/RecordService";
import  classroomsModel from './classrooms.model'
class ClassRoomRecord extends  RecordService{
    constructor() {
        super(classroomsModel);
    }
}
export  default  ClassRoomRecord;