import ParentController from "../../common/ParentController";

class SemestersController extends ParentController{
    constructor(RecordService) {
     super(RecordService);
     this.getAllSemesterByProgram = this.getAllSemesterByProgram.bind(this);
    }
    async getAllSemesterByProgram(req,res){
        const {id} = req.params;
        const semesters = await this.recordService
                                        .get_all_records_by_param({university_program_id:id})
        this.response(res,semesters)
    }
}
export  default SemestersController;
