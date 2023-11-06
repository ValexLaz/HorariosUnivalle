import ParentController from "../../common/ParentController";
class ClassController extends ParentController{
    constructor(recordService) {
        super(recordService);
        this.getAllClassBySemester = this.getAllClassBySemester.bind(this);
    }
    async getAllClassBySemester(req,res){
        try {
            const semesters = this.recordService.find({id_semester:req.params.id})
            this.responseSuccess(res,{data:semesters});
        }catch (e) {
            this.responseError(res,{message:e.message});
        }
    }

}
export  default ClassController;
