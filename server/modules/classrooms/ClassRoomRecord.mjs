import RecordService from "../../common/RecordService.mjs";
import  classroomsModel from './classrooms.model.mjs'
class ClassRoomRecord extends  RecordService{
    constructor() {
        super(classroomsModel);
    }
}
export  default  ClassRoomRecord;