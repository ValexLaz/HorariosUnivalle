import ParentController from "../../common/ParentController";
class ClassController extends ParentController{
    constructor(recordService) {
        super(recordService);
        this.getAllClassBySemester = this.getAllClassBySemester.bind(this);
    }
    async getAllClassBySemester(req,res){
        try {
            console.log("Entrando ")
            const semesters = await this.recordService.model.find({semester:req.params.id}).populate(
                {
                    path:"semester"
                }
            )
            console.log('data',semesters);
            this.responseSuccess(res,{data:semesters});
        }catch (e) {
            this.responseError(res,{message:e.message});
        }
    }

}
export  default ClassController;
