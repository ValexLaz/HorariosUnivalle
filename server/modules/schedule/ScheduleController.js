import ParentController from "../../common/ParentController";
import ScheduleManager from "./service/ScheduleManager"
import WorkigDayRecord from "./recordService/workigDayRecord.mjs";
import WorkingDayRecord from "./recordService/workigDayRecord.mjs";

class ScheduleController extends ParentController{
    constructor(recordService) {
        super(recordService);
        this.workingDay = new WorkingDayRecord()
    }
    generate =async  (req,res) => {
        console.log(req.body)
        const {uniProgram,id_semester,number_groups} = req.body;
        const schedule = new ScheduleManager(uniProgram,id_semester,number_groups);
        const result = await schedule.generate();
        if(result.success){
            this.responseSuccess(res,{data:result.results});
        }else {
            this.responseError(res,{message:result.errors})
        }

    }
    findSchedule = async  (req,res)=>{
        console.log(req.body)
        try {
            const schedules = await this.workingDay.model.find({
                semester: req.body.id_semester,
                uniProgram:req.body.uniProgram,
                group:"1"
            }).populate({
                path:"class_professor",
                model:"class_professor",
                populate:[
                    {
                        path:"class",
                        model:"class"
                    },
                    {
                        path:"professor",
                        model:"professor"
                    }

                ],
            }).populate("classroom")

            console.log(schedules)
            this.responseSuccess(res,{data:schedules})
        }catch (e) {
            this.responseError(res,{message:e})
        }
    }
}

export default ScheduleController;