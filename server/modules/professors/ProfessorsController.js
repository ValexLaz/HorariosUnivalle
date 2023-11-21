import ParentController from "../../common/ParentController";

class ProfessorsController extends  ParentController{
    constructor(recordService) {
        super(recordService);
    }
    getRecordsByParams = async (req,res) =>{
        console.log("Controller Professor")
        console.log(req.body);
        try {
            const records = await this.recordService.findDuplicate(req.body);
            this.responseSuccess(res,{data:records});
        }catch (e) {
            this.responseError(res,{message:e.message})
        }
    }
}
export  default  ProfessorsController;