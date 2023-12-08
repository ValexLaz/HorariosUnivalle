import RecordService from "../../../common/RecordService.mjs";
import WorkingDayModel from "../models/workingDay.model.mjs";

class WorkingDayRecord extends RecordService{
    constructor() {
        super(WorkingDayModel);
    }

    async create(data) {
        const recordExisting = await this.model.findOne(data)
        if(recordExisting){
            new Error('Ya existe un registro con los mismos valores')
        }else {
            await super.create(data)
        }
    }

    async findBestClassroom(classroomIds,startTime,endTime,day){
        try {
            const ids = classroomIds.map(item => item._id);
            const result = await this.model.aggregate([
                {
                    $match: {
                        classroom: { $in: ids },
                        start_time: startTime,
                        end_time: endTime,
                        day: day
                    }
                },
                {
                    $group: {
                        _id: '$classroom',
                        count: { $sum: 1 }
                    }
                },
                {
                    $sort: {
                        count: 1
                    }
                },
                {
                    $limit:1
                },
                {
                    $project: {
                        _id: 1
                    }
                }
            ]);
            return result.length > 0 ? result[0]._id : ids[0];
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


}
export default WorkingDayRecord;