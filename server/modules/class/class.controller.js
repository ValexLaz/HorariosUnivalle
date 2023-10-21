import ParentController from "../../common/ParentController";

class ClassController extends ParentController{
    constructor(recordService) {
        console.log("ClassController",recordService)
        super(recordService);
    }
    async getAllClassBySemester(req,res){
        const {id} = req.params;
        const classes = await this.recordService.get_all_records_by_param({id_semester:id});
        this.response(res,classes)
    }
}
export  default ClassController;
