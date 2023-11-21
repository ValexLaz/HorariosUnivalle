import ParentController from "../../common/ParentController";

class SemestersController extends ParentController{
    constructor(RecordService) {
     super(RecordService);
     this.getAllSemesterByProgram = this.getAllSemesterByProgram.bind(this);
    }
    async getAllSemesterByProgram(req,res){
        try {
            const semesters =await  this.recordService.model.find({university_program:req.params.id},{university_program:0});
            this.responseSuccess(res,{data:semesters});
        }catch (e) {
            this.responseError(res,{message:e.message});
        }
    }
}
export  default SemestersController;
