import ParentController from "../../common/ParentController";


class UniProgramsController extends ParentController{
    constructor(RecordService) {
        super(RecordService);
    }
    getAllRecords  = async(req,res)=>{
        try {
            const records = await this.recordService.findAllAndPopulate('faculty');
            console.log(records)
            this.responseSuccess(res,{data:records});
        }catch (e) {
            this.responseError(res,{message:e.message})
        }
    }
    getAllRecordsBySemester = async (req,res)=>{
        try {

            const records = await this.recordService
                .findByParamsAndPopulate({faculty:req.params.id})
            console.log(records)
            this.responseSuccess(res,{data:records});
        }catch (e) {
            this.responseError(res,{message:e.message})
        }
    }
}
export default UniProgramsController;